import React from 'react';
import { StyleSheet, View } from 'react-native';
import { GlobalStyles } from '../../constants/styles';
import { ExpensesList } from './ExpensesList';
import { ExpensesSummary } from './ExpensesSummary';

export const ExpensesOutput: React.FC<{
  expensesPeriod: string;
  expenses: {
    id: string;
    description: string;
    amount: number;
    date: Date;
  }[];
}> = (props) => {
  return (
    <View style={styles.container}>
      <ExpensesSummary expenses={props.expenses} periodName={props.expensesPeriod} />
      <ExpensesList expenses={props.expenses} />
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
