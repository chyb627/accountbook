import React from 'react';
import { FlatList } from 'react-native';
import { Expenses } from '../../store/expenses-context';
import { ExpenseItem } from './ExpenseItem';

export const ExpensesList: React.FC<{
  expenses: Expenses[];
}> = (props) => {
  return (
    <FlatList<Expenses>
      keyExtractor={(item) => item.id}
      data={props.expenses}
      renderItem={(itemData) => {
        return <ExpenseItem {...itemData.item} />;
      }}
    />
  );
};
