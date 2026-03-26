import React, { useContext } from 'react';
import {
  Box,
  Typography,
  IconButton,
  Paper,
  List,
  ListItem,
  ListItemAvatar,
  Avatar,
  ListItemText,
} from '@mui/material';
import { useNavigate } from 'react-router-dom';
import MenuIcon from '@mui/icons-material/Menu';
import NotificationsNoneIcon from '@mui/icons-material/NotificationsNone';
import SyncAltIcon from '@mui/icons-material/SyncAlt';
import TranslateIcon from '@mui/icons-material/Translate';
import { useTranslation } from 'react-i18next';
import { BarChart, Bar, XAxis, ResponsiveContainer, Cell, Tooltip } from 'recharts';
import { ColorModeContext } from '../context/ThemeContext';
import DarkModeIcon from '@mui/icons-material/DarkMode';
import LightModeIcon from '@mui/icons-material/LightMode';

const data = [
  { name: 'Mon', value: 4000 },
  { name: 'Tue', value: 3000 },
  { name: 'Wed', value: 2000 },
  { name: 'Thu', value: 6000 },
  { name: 'Fri', value: 4500 },
  { name: 'Sat', value: 5500 },
  { name: 'Sun', value: 4800 },
];

const transactions = [
  {
    id: 1,
    type: 'Money Out',
    name: 'Wisteria Ravenclaw',
    date: '28 Apr, 2022',
    amount: '-$120.00',
    color: '#ff5252',
  },
  {
    id: 2,
    type: 'Money In',
    name: 'Jake Weary',
    date: '28 Apr, 2022',
    amount: '+$1500.00',
    color: '#69f0ae',
  },
];

const Home: React.FC = () => {
  const { mode, toggleColorMode } = useContext(ColorModeContext);
  const navigate = useNavigate();
  const { t, i18n } = useTranslation();

  const toggleLanguage = () => {
    i18n.changeLanguage(i18n.language === 'en' ? 'pt' : 'en');
  };

  return (
    <Box sx={{ flexGrow: 1, position: 'relative', bgcolor: 'background.default', pb: 4 }}>
      {/* Header Section with Gradient */}
      <Box
        sx={{
          background: 'linear-gradient(135deg, #6a11cb 0%, #2575fc 100%)',
          pt: 4,
          pb: 12,
          px: 2,
          color: 'white',
          borderBottomLeftRadius: 32,
          borderBottomRightRadius: 32,
        }}
      >
        <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 3 }}>
          <IconButton color="inherit" edge="start">
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" fontWeight="bold">
            {t('home')}
          </Typography>
          <Box>
            <IconButton color="inherit" onClick={toggleLanguage}>
              <TranslateIcon />
            </IconButton>
            <IconButton color="inherit" onClick={toggleColorMode}>
              {mode === 'dark' ? <LightModeIcon /> : <DarkModeIcon />}
            </IconButton>
            <IconButton color="inherit" edge="end">
              <NotificationsNoneIcon />
            </IconButton>
          </Box>
        </Box>

        <Typography variant="h5" fontWeight="bold" gutterBottom>
          {t('welcomeBack')}
        </Typography>
        <Typography variant="subtitle2" sx={{ opacity: 0.8 }}>
          {t('greeting')}
        </Typography>
      </Box>

      {/* Main Floating Card */}
      <Box sx={{ px: 2, mt: -8, position: 'relative', zIndex: 1 }}>
        <Paper
          elevation={4}
          sx={{
            p: 3,
            borderRadius: 4,
            bgcolor: 'background.paper',
          }}
        >
          {/* Expenditure Header */}
          <Box sx={{ textAlign: 'center' }}>
             <Box sx={{ width: 40, height: 4, bgcolor: 'divider', borderRadius: 2, mb: 2, mx: 'auto' }} />
          </Box>
          <Typography variant="caption" color="text.secondary" fontWeight="bold">
            {t('totalExpenditure')}
          </Typography>
          <Typography variant="h4" fontWeight="bold" sx={{ mt: 1, mb: 3 }}>
            $60,000.00
          </Typography>

          {/* Bar Chart */}
          <Box sx={{ height: 200, width: '100%', mb: 4 }}>
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={data} margin={{ top: 0, right: 0, left: 0, bottom: 0 }}>
                <XAxis 
                  dataKey="name" 
                  axisLine={false} 
                  tickLine={false} 
                  tick={{ fill: mode === 'dark' ? '#aaaaaa' : '#9e9e9e', fontSize: 12, fontWeight: 500 }} 
                  dy={10}
                />
                <Tooltip cursor={{ fill: 'transparent' }} contentStyle={{ borderRadius: 8 }} />
                <Bar dataKey="value" radius={[10, 10, 10, 10]} barSize={16}>
                  {data.map((entry, index) => (
                    <Cell
                      key={`cell-${index}`}
                      fill={entry.name === 'Thu' ? '#2979ff' : (mode === 'dark' ? '#333333' : '#f5f5f5')}
                    />
                  ))}
                </Bar>
              </BarChart>
            </ResponsiveContainer>
          </Box>

          {/* Recent Transactions Header */}
          <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 2 }}>
            <Typography variant="h6" fontWeight="bold">
              {t('recentTransactions')}
            </Typography>
            <Typography 
              variant="caption" 
              color="text.secondary" 
              sx={{ cursor: 'pointer', fontWeight: 'bold' }}
              onClick={() => navigate('/history')}
            >
              {t('seeAll')}
            </Typography>
          </Box>

          {/* Transactions List */}
          <List disablePadding>
            {transactions.map((tx) => (
              <ListItem key={tx.id} disableGutters sx={{ mb: 1, borderBottom: '1px solid', borderColor: 'divider', pb: 2 }}>
                <ListItemAvatar>
                  <Avatar sx={{ bgcolor: mode === 'dark' ? '#333' : '#e3f2fd', color: '#2979ff' }}>
                    <SyncAltIcon />
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
                  <Typography variant="body2" fontWeight="bold" sx={{ color: tx.color }}>
                    {tx.amount}
                  </Typography>
                </Box>
              </ListItem>
            ))}
          </List>
        </Paper>
      </Box>
    </Box>
  );
};

export default Home;
