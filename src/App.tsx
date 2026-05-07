import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import Layout from './components/Layout';
import Home from './pages/Home';
import TransactionHistory from './pages/TransactionHistory';
import Profile from './pages/Profile';
import { ThemeContextProvider } from './context/ThemeContext';

function App() {
  const { t, i18n } = useTranslation();

  useEffect(() => {
    document.title = t('appTitle');
  }, [i18n.language, t]);

  return (
    <ThemeContextProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="history" element={<TransactionHistory />} />
            <Route path="profile" element={<Profile />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </ThemeContextProvider>
  );
}

export default App;
