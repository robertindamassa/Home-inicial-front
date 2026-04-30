import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

const resources = {
  en: {
    translation: {
      home: 'Home',
      welcomeBack: 'Welcome Back!',
      greeting: 'Hi, Robert',
      totalExpenditure: 'Total Expenditure',
      recentTransactions: 'Recent Transactions',
      seeAll: 'See All',
      transactionHistory: 'Transaction History',
      all: 'All',
      income: 'Income',
      expense: 'Expense',
      noTransactions: 'No transactions found.',
      moneyOut: 'Money Out',
      moneyIn: 'Money In',
      historyTab: 'History',
    },
  },
  pt: {
    translation: {
      home: 'Início',
      welcomeBack: 'Bem-vindo de volta!',
      greeting: 'Olá, Roberto',
      totalExpenditure: 'Despesa Total',
      recentTransactions: 'Transações Recentes',
      seeAll: 'Ver Tudo',
      transactionHistory: 'Histórico de Transações',
      all: 'Tudo',
      income: 'Receita',
      expense: 'Despesa',
      noTransactions: 'Nenhuma transação encontrada.',
      moneyOut: 'Saída',
      moneyIn: 'Entrada',
      historyTab: 'Histórico',
    },
  },
};

i18n
  .use(initReactI18next)
  .init({
    resources,
    lng: 'pt', // Set default language to Portuguese BR
    fallbackLng: 'en',
    interpolation: {
      escapeValue: false, // react already safes from xss
    },
  });

export default i18n;
