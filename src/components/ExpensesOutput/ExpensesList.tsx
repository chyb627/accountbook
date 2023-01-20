import React from 'react';
import { FlatList } from 'react-native';
import { ExpenseItem } from './ExpenseItem';

export const ExpensesList: React.FC<{
  expenses: {
    id: string;
    description: string;
    amount: number;
    date: Date;
  }[];
}> = (props) => {
  return (
    <FlatList<{
      id: string;
      description: string;
      amount: number;
      date: Date;
    }>
      keyExtractor={(item) => item.id}
      data={props.expenses}
      renderItem={(itemData) => {
        return <ExpenseItem {...itemData.item} />;
      }}
    />
  );
};
