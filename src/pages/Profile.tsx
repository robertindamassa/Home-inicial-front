import { useContext } from 'react';
import {
  Avatar,
  Box,
  Card,
  CardContent,
  Divider,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Paper,
  Stack,
  Switch,
  Typography,
} from '@mui/material';
import BadgeIcon from '@mui/icons-material/Badge';
import CreditCardIcon from '@mui/icons-material/CreditCard';
import HelpOutlineIcon from '@mui/icons-material/HelpOutline';
import LanguageIcon from '@mui/icons-material/Language';
import LockIcon from '@mui/icons-material/Lock';
import LogoutIcon from '@mui/icons-material/Logout';
import NotificationsNoneIcon from '@mui/icons-material/NotificationsNone';
import PaletteIcon from '@mui/icons-material/Palette';
import { useTranslation } from 'react-i18next';
import { ColorModeContext } from '../context/ThemeContext';

const Profile = () => {
  const { t, i18n } = useTranslation();
  const { mode, toggleColorMode } = useContext(ColorModeContext);

  const toggleLanguage = () => {
    i18n.changeLanguage(i18n.language === 'en' ? 'pt' : 'en');
  };

  return (
    <Box sx={{ px: 2, pt: 2, pb: 4 }}>
      <Paper
        elevation={0}
        sx={{
          p: 3,
          borderRadius: 5,
          color: 'white',
          background: 'linear-gradient(135deg, #0f172a 0%, #2563eb 55%, #38bdf8 100%)',
          boxShadow: '0 24px 48px rgba(15, 23, 42, 0.22)',
        }}
      >
        <Stack direction="row" spacing={2} alignItems="center">
          <Avatar sx={{ width: 72, height: 72, bgcolor: 'rgba(255,255,255,0.18)' }}>RB</Avatar>
          <Box>
            <Typography variant="h6" fontWeight={800}>
              Roberto Paula
            </Typography>
            <Typography variant="body2" sx={{ opacity: 0.88 }}>
              {t('cardHolder')}
            </Typography>
            <Typography variant="caption" sx={{ opacity: 0.72 }}>
              {t('memberSince')} 2024
            </Typography>
          </Box>
        </Stack>

        <Box sx={{ mt: 3, display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 1.5 }}>
          {[
            { label: 'R$ 18.240', caption: t('balance') },
            { label: '24', caption: t('transactionsCount') },
            { label: '98%', caption: t('punctuality') },
          ].map((item) => (
            <Card key={item.caption} sx={{ bgcolor: 'rgba(255,255,255,0.14)', color: 'white' }}>
              <CardContent sx={{ p: 1.5, '&:last-child': { pb: 1.5 } }}>
                <Typography variant="subtitle1" fontWeight={800}>
                  {item.label}
                </Typography>
                <Typography variant="caption" sx={{ opacity: 0.8 }}>
                  {item.caption}
                </Typography>
              </CardContent>
            </Card>
          ))}
        </Box>
      </Paper>

      <Box sx={{ mt: 2.5 }}>
        <Typography variant="overline" color="text.secondary" sx={{ letterSpacing: 1.4 }}>
          {t('quickActions')}
        </Typography>
        <Paper sx={{ mt: 1.5, borderRadius: 4, overflow: 'hidden' }}>
          <List disablePadding>
            <ListItem secondaryAction={<Switch checked={mode === 'dark'} onChange={toggleColorMode} />}>
              <ListItemIcon>
                <PaletteIcon />
              </ListItemIcon>
              <ListItemText primary={t('theme')} secondary={mode === 'dark' ? t('darkMode') : t('lightMode')} />
            </ListItem>
            <Divider />
            <ListItem secondaryAction={<Switch checked={i18n.language === 'pt'} onChange={toggleLanguage} />}>
              <ListItemIcon>
                <LanguageIcon />
              </ListItemIcon>
              <ListItemText primary={t('language')} secondary={i18n.language === 'pt' ? t('portuguese') : t('english')} />
            </ListItem>
          </List>
        </Paper>
      </Box>

      <Box sx={{ mt: 2.5 }}>
        <Typography variant="overline" color="text.secondary" sx={{ letterSpacing: 1.4 }}>
          {t('settings')}
        </Typography>
        <Paper sx={{ mt: 1.5, borderRadius: 4, overflow: 'hidden' }}>
          <List disablePadding>
            <ListItem>
              <ListItemIcon>
                <BadgeIcon />
              </ListItemIcon>
              <ListItemText primary={t('personalInfo')} secondary={t('editProfile')} />
            </ListItem>
            <Divider />
            <ListItem>
              <ListItemIcon>
                <CreditCardIcon />
              </ListItemIcon>
              <ListItemText primary={t('viewStatements')} secondary={t('billingHistory')} />
            </ListItem>
            <Divider />
            <ListItem>
              <ListItemIcon>
                <NotificationsNoneIcon />
              </ListItemIcon>
              <ListItemText primary={t('notifications')} secondary={t('expenseAlerts')} />
            </ListItem>
            <Divider />
            <ListItem>
              <ListItemIcon>
                <LockIcon />
              </ListItemIcon>
              <ListItemText primary={t('security')} secondary={t('biometrics')} />
            </ListItem>
            <Divider />
            <ListItem>
              <ListItemIcon>
                <HelpOutlineIcon />
              </ListItemIcon>
              <ListItemText primary={t('support')} secondary={t('helpCenter')} />
            </ListItem>
            <Divider />
            <ListItem sx={{ color: 'error.main' }}>
              <ListItemIcon sx={{ color: 'inherit' }}>
                <LogoutIcon />
              </ListItemIcon>
              <ListItemText primary={t('logout')} secondary={t('localSession')} />
            </ListItem>
          </List>
        </Paper>
      </Box>
    </Box>
  );
};

export default Profile;
