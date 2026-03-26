import React, { useContext, useState } from 'react';
import {
  Box,
  Typography,
  IconButton,
  List,
  ListItem,
  ListItemAvatar,
  Avatar,
  ListItemText,
  Paper,
  Tabs,
  Tab,
} from '@mui/material';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import { useNavigate } from 'react-router-dom';
import CallReceivedIcon from '@mui/icons-material/CallReceived';
import CallMadeIcon from '@mui/icons-material/CallMade';
import { ColorModeContext } from '../context/ThemeContext';
import { useTranslation } from 'react-i18next';

const historyData = [
  { id: 1, type: 'Money Out', name: 'Wisteria Ravenclaw', date: '28 Apr, 2022', amount: '-$120.00', category: 'out' },
  { id: 2, type: 'Money In', name: 'Jake Weary', date: '28 Apr, 2022', amount: '+$1500.00', category: 'in' },
  { id: 3, type: 'Money Out', name: 'Amazon Web Services', date: '27 Apr, 2022', amount: '-$45.00', category: 'out' },
  { id: 4, type: 'Money Out', name: 'Starbucks Coffee', date: '26 Apr, 2022', amount: '-$6.50', category: 'out' },
  { id: 5, type: 'Money In', name: 'Freelance Payout', date: '25 Apr, 2022', amount: '+$850.00', category: 'in' },
  { id: 6, type: 'Money Out', name: 'Uber Rides', date: '24 Apr, 2022', amount: '-$24.00', category: 'out' },
];

const TransactionHistory: React.FC = () => {
  const navigate = useNavigate();
  const { mode } = useContext(ColorModeContext);
  const [tabIndex, setTabIndex] = useState(0);
  const { t } = useTranslation();

  const filteredData = historyData.filter(tx => {
    if (tabIndex === 0) return true;
    if (tabIndex === 1) return tx.category === 'in';
    return tx.category === 'out';
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
            {filteredData.map((tx) => (
              <ListItem key={tx.id} disableGutters sx={{ mb: 1, borderBottom: '1px solid', borderColor: 'divider', pb: 2 }}>
                <ListItemAvatar>
                  <Avatar sx={{ 
                    bgcolor: mode === 'dark' ? '#333' : '#e3f2fd', 
                    color: tx.category === 'in' ? '#69f0ae' : '#ff5252' 
                  }}>
                    {tx.category === 'in' ? <CallReceivedIcon /> : <CallMadeIcon />}
                  </Avatar>
                </ListItemAvatar>
                <ListItemText
                  primary={
                    <Typography variant="caption" color="text.secondary" fontWeight="bold">
                      {tx.type === 'Money Out' ? t('moneyOut') : t('moneyIn')}
                    </Typography>
                  }
                  secondary={
                    <Typography variant="body2" fontWeight="bold" color="text.primary">
                      {tx.name}
                    </Typography>
                  }
                />
                <Box textAlign="right">
                  <Typography variant="caption" color="text.secondary" fontWeight="bold">
                    {tx.date}
                  </Typography>
                  <Typography variant="body2" fontWeight="bold" sx={{ color: tx.category === 'in' ? '#69f0ae' : '#ff5252' }}>
                    {tx.amount}
                  </Typography>
                </Box>
              </ListItem>
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
