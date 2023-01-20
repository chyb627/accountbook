import React from 'react';
import { NavigationContainer } from '@react-navigation/native';

// import ExpensesContextProvider from './src/store/expenses-context';
import { RootNavigation } from './src/navigation/RootNavigation';

const App = () => {
  return (
    // <ExpensesContextProvider>
    <NavigationContainer>
      <RootNavigation />
    </NavigationContainer>
    // </ExpensesContextProvider>
  );
};

export default App;
