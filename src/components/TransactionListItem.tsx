import type { ReactNode } from 'react';
import { Avatar, Box, ListItem, ListItemAvatar, ListItemText, Typography } from '@mui/material';
import CallReceivedIcon from '@mui/icons-material/CallReceived';
import CallMadeIcon from '@mui/icons-material/CallMade';
import { useTranslation } from 'react-i18next';
import type { Transaction } from '../types/transaction';

interface TransactionListItemProps {
  transaction: Transaction;
  highlightColor: string;
  icon?: ReactNode;
}

const TransactionListItem = ({ transaction, highlightColor, icon }: TransactionListItemProps) => {
  const { t } = useTranslation();
  const isIncoming = transaction.direction === 'in';
  const leadingIcon = icon ?? (isIncoming ? <CallReceivedIcon /> : <CallMadeIcon />);

  return (
    <ListItem disableGutters sx={{ mb: 1, borderBottom: '1px solid', borderColor: 'divider', pb: 2 }}>
      <ListItemAvatar>
        <Avatar sx={{ bgcolor: 'action.hover', color: highlightColor }}>{leadingIcon}</Avatar>
      </ListItemAvatar>
      <ListItemText
        primary={
          <Typography variant="caption" color="text.secondary" fontWeight="bold">
            {isIncoming ? t('moneyIn') : t('moneyOut')}
          </Typography>
        }
        secondary={
          <Typography variant="body2" fontWeight="bold" color="text.primary">
            {transaction.name}
          </Typography>
        }
      />
      <Box textAlign="right">
        <Typography variant="caption" color="text.secondary" fontWeight="bold">
          {transaction.date}
        </Typography>
        <Typography variant="body2" fontWeight="bold" sx={{ color: highlightColor }}>
          {transaction.amount}
        </Typography>
      </Box>
    </ListItem>
  );
};

export default TransactionListItem;