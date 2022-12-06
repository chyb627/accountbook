import React from 'react';
import { FlatList } from 'react-native';
import ExpenseItem from './ExpenseItem';

function renderExpenseItem(itemData) {
  return <ExpenseItem {...itemData.item} />;
}

function ExpensesList({ expense }) {
  return (
    <FlatList data={expense} renderItem={renderExpenseItem} keyExtractor={(item) => item.id} />
  );
}

export default ExpensesList;
