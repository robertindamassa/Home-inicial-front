import { useState } from 'react';
import { Box, Typography, IconButton, List, Paper, Tabs, Tab, Stack, Chip } from '@mui/material';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import { useNavigate } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import TransactionListItem from '../components/TransactionListItem';
import { transactionHistory } from '../data/transactions';

function TransactionHistory() {
  const navigate = useNavigate();
  const [tabIndex, setTabIndex] = useState(0);
  const { t } = useTranslation();

  const filteredData = transactionHistory.filter((transaction) => {
    if (tabIndex === 0) return true;
    if (tabIndex === 1) return transaction.direction === 'in';
    return transaction.direction === 'out';
  });

  return (
    <Box sx={{ flexGrow: 1, position: 'relative', pb: 4 }}>
      <Box
        sx={{
          background: 'linear-gradient(135deg, #0f172a 0%, #2563eb 60%, #38bdf8 100%)',
          pt: 4,
          pb: 6,
          px: 2,
          color: 'white',
          borderBottomLeftRadius: 32,
          borderBottomRightRadius: 32,
          boxShadow: '0 24px 48px rgba(15, 23, 42, 0.18)',
        }}
      >
        <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
          <IconButton color="inherit" edge="start" onClick={() => navigate(-1)}>
            <ArrowBackIcon />
          </IconButton>
          <Typography variant="h6" fontWeight="bold" sx={{ ml: 2, flexGrow: 1 }}>
            {t('transactionHistory')}
          </Typography>
        </Box>

        <Stack direction="row" spacing={1} sx={{ mt: 3 }}>
          <Chip label={t('all')} sx={{ bgcolor: 'rgba(255,255,255,0.16)', color: 'white' }} />
          <Chip label={t('income')} sx={{ bgcolor: 'rgba(255,255,255,0.16)', color: 'white' }} />
          <Chip label={t('expense')} sx={{ bgcolor: 'rgba(255,255,255,0.16)', color: 'white' }} />
        </Stack>
      </Box>

      <Box sx={{ px: 2, mt: -4, position: 'relative', zIndex: 1 }}>
        <Paper
          elevation={0}
          sx={{
            borderRadius: 5,
            pb: 2,
            bgcolor: 'background.paper',
            border: '1px solid',
            borderColor: 'divider',
            boxShadow: '0 18px 40px rgba(15, 23, 42, 0.08)',
          }}
        >
          <Tabs
            value={tabIndex}
            onChange={(_, newValue) => setTabIndex(newValue)}
            indicatorColor="primary"
            textColor="primary"
            variant="fullWidth"
            sx={{ borderBottom: 1, borderColor: 'divider', mb: 2, borderRadius: '16px 16px 0 0' }}
          >
            <Tab label={t('all')} />
            <Tab label={t('income')} />
            <Tab label={t('expense')} />
          </Tabs>

          <List sx={{ px: 2 }}>
            {filteredData.map((transaction) => (
              <TransactionListItem
                key={transaction.id}
                transaction={transaction}
                highlightColor={transaction.direction === 'in' ? '#69f0ae' : '#ff5252'}
              />
            ))}
            
            {filteredData.length === 0 && (
              <Box textAlign="center" py={4}>
                <Typography color="text.secondary">{t('noTransactions')}</Typography>
              </Box>
            )}
          </List>
        </Paper>
      </Box>
    </Box>
  );
};

export default TransactionHistory;
