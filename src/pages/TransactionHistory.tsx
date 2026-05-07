import { useState } from 'react';
import { Box, Typography, IconButton, List, Paper, Tabs, Tab } from '@mui/material';
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
    <Box sx={{ flexGrow: 1, position: 'relative', bgcolor: 'background.default', pb: 4 }}>
      {/* Header */}
      <Box
        sx={{
          background: 'linear-gradient(135deg, #6a11cb 0%, #2575fc 100%)',
          pt: 4,
          pb: 6,
          px: 2,
          color: 'white',
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
      </Box>

      {/* Main Content Area */}
      <Box sx={{ px: 2, mt: -4, position: 'relative', zIndex: 1 }}>
        <Paper elevation={4} sx={{ borderRadius: 4, pb: 2, bgcolor: 'background.paper' }}>
          
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
