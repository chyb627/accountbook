import React, { useCallback, useContext, useLayoutEffect } from 'react';
import { Pressable, StyleSheet, View } from 'react-native';
import { ExpenseButton } from '../components/UI/ExpenseButton';
import { Icon } from '../components/UI/Icons';
import { GlobalStyles } from '../constants/styles';
import { useRootRoute, useRootNavigation } from '../navigation/RootNavigation';
import { ExpensesContext } from '../store/expenses-context';

export const ManageExpense: React.FC = () => {
  const route = useRootRoute();
  const navigation = useRootNavigation();
  const expensesCtx = useContext(ExpensesContext);

  useLayoutEffect(() => {
    navigation.setOptions({
      title: route.params ? 'Edit Expense' : 'Add Expense',
    });
  });

  const deleteExpenseHandler = () => {
    expensesCtx.deleteExpense(route.params?.expenseId);
    navigation.goBack();
  };

  const cancelHandler = useCallback(() => {
    navigation.goBack();
  }, [navigation]);

  const confirmHandler = () => {
    if (route.params) {
      expensesCtx.updateExpense((editedExpenseId = route.params?.expenseId), {
        description: 'Update Test',
        amount: 39.99,
        date: new Date('2023-01-21'),
      });
    } else {
      expensesCtx.addExpense({
        description: 'Add Test',
        amount: 29.99,
        date: new Date('2023-01-21'),
      });
    }
    navigation.goBack();
  };

  return (
    <View style={styles.container}>
      <View style={styles.buttons}>
        <ExpenseButton mode="flat" style={styles.button} onPress={cancelHandler}>
          Cancel
        </ExpenseButton>
        <ExpenseButton style={styles.button} onPress={confirmHandler}>
          {route.params ? 'Update' : 'Add'}
        </ExpenseButton>
      </View>
      {route.params && (
        <View style={styles.deleteContainer}>
          <Pressable onPress={deleteExpenseHandler}>
            <Icon name="trash" color={GlobalStyles.colors.error500} size={36} />
          </Pressable>
        </View>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 24,
    backgroundColor: GlobalStyles.colors.primary800,
  },
  buttons: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  button: {
    minWidth: 120,
    marginHorizontal: 8,
  },
  deleteContainer: {
    marginTop: 16,
    paddingTop: 8,
    borderTopWidth: 2,
    borderTopColor: 'GlobalStyles.colors.primary200',
    alignItems: 'center',
  },
});
