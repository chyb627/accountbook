import React from 'react';
import { ExpensesOutput } from '../components/ExpensesOutput/ExpensesOutput';

export const RecentExpenses: React.FC = () => {
  return <ExpensesOutput expensesPeriod="Last 7 Days" />;
};
