import React from 'react';
import { NavigationContainer } from '@react-navigation/native';

import { RootNavigation } from './src/navigation/RootNavigation';
import { ExpensesContextProvider } from './src/store/expenses-context';

const App = () => {
  return (
    <ExpensesContextProvider>
      <NavigationContainer>
        <RootNavigation />
      </NavigationContainer>
    </ExpensesContextProvider>
  );
};

export default App;
