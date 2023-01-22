import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { GlobalStyles } from '../../constants/styles';
import { Expenses } from '../../store/expenses-context';
import { ExpensesList } from './ExpensesList';
import { ExpensesSummary } from './ExpensesSummary';

export const ExpensesOutput: React.FC<{
  expensesPeriod: string;
  expenses: Expenses[];
  fallbackText: string;
}> = (props) => {
  let content = <Text style={styles.infoText}>{props.fallbackText}</Text>;

  if (props.expenses.length > 0) {
    content = <ExpensesList expenses={props.expenses} />;
  }

  return (
    <View style={styles.container}>
      <ExpensesSummary expenses={props.expenses} periodName={props.expensesPeriod} />
      {content}
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
