import React from 'react';
import { StatusBar } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';

import ExpensesContextProvider from './src/store/expenses-context';
import { RootNavigation } from './src/navigation/RootNavigation';

const App = () => {
  return (
    <>
      <StatusBar barStyle="light-content" />
      <ExpensesContextProvider>
        <NavigationContainer>
          <RootNavigation />
        </NavigationContainer>
      </ExpensesContextProvider>
    </>
  );
};

export default App;
