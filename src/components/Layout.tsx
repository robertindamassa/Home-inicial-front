import React from 'react';
import { Outlet, useNavigate, useLocation } from 'react-router-dom';
import { Box, BottomNavigation, BottomNavigationAction, Paper } from '@mui/material';
import HomeIcon from '@mui/icons-material/Home';
import ReceiptLongIcon from '@mui/icons-material/ReceiptLong';
import PersonIcon from '@mui/icons-material/Person';
import { useTranslation } from 'react-i18next';

const Layout: React.FC = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const { t } = useTranslation();

  return (
    <Box sx={{ pb: 11, minHeight: '100vh', display: 'flex', flexDirection: 'column' }}>
      <Box sx={{ flexGrow: 1, display: 'flex', flexDirection: 'column' }}>
        <Outlet />
      </Box>
      <Paper
        elevation={0}
        sx={{
          position: 'fixed',
          bottom: 12,
          left: 12,
          right: 12,
          borderRadius: 6,
          overflow: 'hidden',
          border: '1px solid',
          borderColor: 'divider',
          backdropFilter: 'blur(18px)',
          backgroundColor: 'rgba(255, 255, 255, 0.85)',
        }}
      >
        <BottomNavigation
          showLabels
          value={location.pathname}
          onChange={(_event, newValue) => {
            navigate(newValue);
          }}
          sx={{
            '& .MuiBottomNavigationAction-root': {
              minWidth: 'auto',
              padding: '6px 0',
            },
          }}
        >
          <BottomNavigationAction label={t('home')} value="/" icon={<HomeIcon />} />
          <BottomNavigationAction label={t('historyTab')} value="/history" icon={<ReceiptLongIcon />} />
          <BottomNavigationAction label={t('profileTab')} value="/profile" icon={<PersonIcon />} />
        </BottomNavigation>
      </Paper>
    </Box>
  );
};

export default Layout;
