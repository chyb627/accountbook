import React from 'react';
import { StyleSheet, View } from 'react-native';
import { GlobalStyles } from '../../constants/styles';
import { ExpensesList } from './ExpensesList';
import { ExpensesSummary } from './ExpensesSummary';

const DUMMY_EXPENSES = [
  {
    id: 'e1',
    description: 'A pair of shoes',
    amount: 59.99,
    date: new Date('2023-01-01'),
  },
  {
    id: 'e2',
    description: 'A pair of shoes',
    amount: 59.99,
    date: new Date('2023-01-15'),
  },
  {
    id: 'e3',
    description: 'A pair of shoes',
    amount: 59.99,
    date: new Date('2023-01-18'),
  },
  {
    id: 'e4',
    description: 'A pair of shoes',
    amount: 59.99,
    date: new Date('2023-01-19'),
  },
  {
    id: 'e5',
    description: 'A pair of shoes',
    amount: 59.99,
    date: new Date('2023-01-20'),
  },
];

export const ExpensesOutput: React.FC<{
  expensesPeriod: string;
  expenses?: {
    id: string;
    description: string;
    amount: number;
    date: Date;
  }[];
}> = (props) => {
  // const expensesSum = props.expenses.reduce((sum: number, expense: number) => {
  //   return sum + expense.amount;
  // }, 0);

  return (
    <View style={styles.container}>
      <ExpensesSummary expenses={DUMMY_EXPENSES} periodName={props.expensesPeriod} />
      <ExpensesList expenses={DUMMY_EXPENSES} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 24,
    paddingTop: 24,
    paddingBottom: 0,
    backgroundColor: GlobalStyles.colors.primary700,
  },
  infoText: {
    color: 'white',
    fontSize: 16,
    textAlign: 'center',
    marginTop: 32,
  },
});
