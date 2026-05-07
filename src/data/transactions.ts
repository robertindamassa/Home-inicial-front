import type { ChartPoint, Transaction } from '../types/transaction';

export const weeklySpending: ChartPoint[] = [
  { name: 'Mon', value: 4000 },
  { name: 'Tue', value: 3000 },
  { name: 'Wed', value: 2000 },
  { name: 'Thu', value: 6000 },
  { name: 'Fri', value: 4500 },
  { name: 'Sat', value: 5500 },
  { name: 'Sun', value: 4800 },
];

export const recentTransactions: Transaction[] = [
  {
    id: 1,
    direction: 'out',
    name: 'Wisteria Ravenclaw',
    date: '28 Apr, 2022',
    amount: '-$120.00',
  },
  {
    id: 2,
    direction: 'in',
    name: 'Jake Weary',
    date: '28 Apr, 2022',
    amount: '+$1500.00',
  },
];

export const transactionHistory: Transaction[] = [
  {
    id: 1,
    direction: 'out',
    name: 'Wisteria Ravenclaw',
    date: '28 Apr, 2022',
    amount: '-$120.00',
  },
  {
    id: 2,
    direction: 'in',
    name: 'Jake Weary',
    date: '28 Apr, 2022',
    amount: '+$1500.00',
  },
  {
    id: 3,
    direction: 'out',
    name: 'Amazon Web Services',
    date: '27 Apr, 2022',
    amount: '-$45.00',
  },
  {
    id: 4,
    direction: 'out',
    name: 'Starbucks Coffee',
    date: '26 Apr, 2022',
    amount: '-$6.50',
  },
  {
    id: 5,
    direction: 'in',
    name: 'Freelance Payout',
    date: '25 Apr, 2022',
    amount: '+$850.00',
  },
  {
    id: 6,
    direction: 'out',
    name: 'Uber Rides',
    date: '24 Apr, 2022',
    amount: '-$24.00',
  },
];