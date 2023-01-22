import React from 'react';
import { NavigationContainer } from '@react-navigation/native';

import { RootNavigation } from './src/navigation/RootNavigation';
import { ExpensesContextProvider } from './src/store/expenses-context';
import { StatusBar } from 'react-native';

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
