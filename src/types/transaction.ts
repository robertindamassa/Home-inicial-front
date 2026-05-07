export type TransactionDirection = 'in' | 'out';

export interface Transaction {
  id: number;
  name: string;
  date: string;
  amount: string;
  direction: TransactionDirection;
}

export interface ChartPoint {
  name: string;
  value: number;
}