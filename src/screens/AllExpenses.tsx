import React from 'react';
import { ExpensesOutput } from '../components/ExpensesOutput/ExpensesOutput';

export const AllExpenses: React.FC = () => {
  return <ExpensesOutput expensesPeriod="Total" />;
};
