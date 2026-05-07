import { useContext } from 'react';
import { Box, Typography, IconButton, Paper, List, Stack, Card, CardContent } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import MenuIcon from '@mui/icons-material/Menu';
import NotificationsNoneIcon from '@mui/icons-material/NotificationsNone';
import TranslateIcon from '@mui/icons-material/Translate';
import { useTranslation } from 'react-i18next';
import { BarChart, Bar, XAxis, ResponsiveContainer, Cell, Tooltip } from 'recharts';
import { ColorModeContext } from '../context/ThemeContext';
import DarkModeIcon from '@mui/icons-material/DarkMode';
import LightModeIcon from '@mui/icons-material/LightMode';
import TransactionListItem from '../components/TransactionListItem';
import { recentTransactions, weeklySpending } from '../data/transactions';

const Home: React.FC = () => {
  const { mode, toggleColorMode } = useContext(ColorModeContext);
  const navigate = useNavigate();
  const { t, i18n } = useTranslation();

  const toggleLanguage = () => {
    i18n.changeLanguage(i18n.language === 'en' ? 'pt' : 'en');
  };

  return (
    <Box sx={{ flexGrow: 1, position: 'relative', pb: 4 }}>
      <Box
        sx={{
          background: 'linear-gradient(135deg, #0f172a 0%, #2563eb 60%, #38bdf8 100%)',
          pt: 4,
          pb: 12,
          px: 2,
          color: 'white',
          borderBottomLeftRadius: 32,
          borderBottomRightRadius: 32,
          boxShadow: '0 24px 48px rgba(15, 23, 42, 0.18)',
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

        <Stack direction="row" spacing={1.5} sx={{ mt: 4 }}>
          {[
            { label: t('balance'), value: '$12,480' },
            { label: t('income'), value: '$8,240' },
            { label: t('expense'), value: '$3,760' },
          ].map((item) => (
            <Card key={item.label} sx={{ flex: 1, bgcolor: 'rgba(255,255,255,0.12)', color: 'white' }}>
              <CardContent sx={{ p: 1.5, '&:last-child': { pb: 1.5 } }}>
                <Typography variant="caption" sx={{ opacity: 0.8 }}>
                  {item.label}
                </Typography>
                <Typography variant="subtitle2" fontWeight={800}>
                  {item.value}
                </Typography>
              </CardContent>
            </Card>
          ))}
        </Stack>
      </Box>

      <Box sx={{ px: 2, mt: -8, position: 'relative', zIndex: 1 }}>
        <Paper
          elevation={0}
          sx={{
            p: 3,
            borderRadius: 5,
            bgcolor: 'background.paper',
            border: '1px solid',
            borderColor: 'divider',
            boxShadow: '0 18px 40px rgba(15, 23, 42, 0.08)',
          }}
        >
          <Stack direction="row" alignItems="center" justifyContent="space-between" sx={{ mb: 2 }}>
            <Box>
              <Typography variant="caption" color="text.secondary" fontWeight="bold">
                {t('totalExpenditure')}
              </Typography>
              <Typography variant="h4" fontWeight="bold" sx={{ mt: 0.5 }}>
                $60,000.00
              </Typography>
            </Box>
            <Box sx={{ px: 1.5, py: 0.75, borderRadius: 999, bgcolor: 'action.hover' }}>
              <Typography variant="caption" fontWeight={700}>
                {t('thisWeek')}
              </Typography>
            </Box>
          </Stack>

          {/* Bar Chart */}
          <Box sx={{ height: 200, width: '100%', mb: 4 }}>
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={weeklySpending} margin={{ top: 0, right: 0, left: 0, bottom: 0 }}>
                <XAxis 
                  dataKey="name" 
                  axisLine={false} 
                  tickLine={false} 
                  tick={{ fill: mode === 'dark' ? '#aaaaaa' : '#9e9e9e', fontSize: 12, fontWeight: 500 }} 
                  dy={10}
                />
                <Tooltip cursor={{ fill: 'transparent' }} contentStyle={{ borderRadius: 8 }} />
                <Bar dataKey="value" radius={[10, 10, 10, 10]} barSize={16}>
                  {weeklySpending.map((entry, index) => (
                    <Cell
                      key={`cell-${index}`}
                      fill={entry.name === 'Thu' ? '#2979ff' : (mode === 'dark' ? '#333333' : '#f5f5f5')}
                    />
                  ))}
                </Bar>
              </BarChart>
            </ResponsiveContainer>
          </Box>

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

          <List disablePadding>
            {recentTransactions.map((transaction) => (
              <TransactionListItem
                key={transaction.id}
                transaction={transaction}
                highlightColor={transaction.direction === 'in' ? '#69f0ae' : '#ff5252'}
              />
            ))}
          </List>
        </Paper>
      </Box>
    </Box>
  );
};

export default Home;
