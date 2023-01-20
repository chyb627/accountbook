import React from 'react';
import { Text, View } from 'react-native';
import { useRootRoute } from '../navigation/RootNavigation';

export const ManageExpense: React.FC = () => {
  const route = useRootRoute();
  console.log('route', route.params);

  // const editedExpenseId = route.params?.expenseId;

  return (
    <View>
      <Text>ManageExpense</Text>
    </View>
  );
};
