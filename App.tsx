import React from 'react';
import { StatusBar } from 'react-native';
import { BottomTabNavigationProp, createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import {
  NavigationContainer,
  NavigatorScreenParams,
  RouteProp,
  useNavigation,
  useRoute,
} from '@react-navigation/native';
import {
  createNativeStackNavigator,
  NativeStackNavigationProp,
} from '@react-navigation/native-stack';

import AllExpenses from './src/screens/AllExpenses';
import ManageExpense from './src/screens/ManageExpense';
import RecentExpenses from './src/screens/RecentExpenses';
import { GlobalStyles } from './src/constants/styles';
import Icon from 'react-native-vector-icons/AntDesign';
import IconButton from './src/components/UI/IconButton';
import ExpensesContextProvider from './src/store/expenses-context';

type TypeBottomTabsScreenParams = {
  RecentExpenses: { id: string };
  AllExpenses: { id: string };
};

type ScreenParams = {
  ExpensesOverview: NavigatorScreenParams<TypeBottomTabsScreenParams>;
  ManageExpense: undefined;
};

const Stack = createNativeStackNavigator<ScreenParams>();
const BottomTabs = createBottomTabNavigator<TypeBottomTabsScreenParams>();

function ExpensesOverview() {
  return (
    <BottomTabs.Navigator
      screenOptions={({ navigation }) => ({
        headerStyle: { backgroundColor: GlobalStyles.colors.primary500 },
        headerTintColor: 'white',
        tabBarStyle: { backgroundColor: GlobalStyles.colors.primary500 },
        tabBarActiveTintColor: GlobalStyles.colors.accent500,
        headerRight: ({ tintColor }) => (
          <IconButton
            icon="add"
            size={24}
            color={tintColor}
            onPress={() => {
              navigation.navigate('ManageExpense');
            }}
          />
        ),
      })}>
      <BottomTabs.Screen
        name="RecentExpenses"
        component={RecentExpenses}
        options={{
          title: 'Recent Expenses',
          tabBarLabel: 'Recent',
          tabBarIcon: ({ color, size }) => <Icon name="hourglass" size={size} color={color} />,
        }}
      />
      <BottomTabs.Screen
        name="AllExpenses"
        component={AllExpenses}
        options={{
          title: 'All Expenses',
          tabBarLabel: 'All Expenses',
          tabBarIcon: ({ color, size }) => <Icon name="calendar" size={size} color={color} />,
        }}
      />
    </BottomTabs.Navigator>
  );
}

function App() {
  return (
    <>
      <StatusBar barStyle="light-content" />
      <ExpensesContextProvider>
        <NavigationContainer>
          <Stack.Navigator
            screenOptions={{
              headerStyle: { backgroundColor: GlobalStyles.colors.primary500 },
              headerTintColor: 'white',
            }}>
            <Stack.Screen
              name="ExpensesOverview"
              component={ExpensesOverview}
              options={{
                headerShown: false,
              }}
            />
            <Stack.Screen
              name="ManageExpense"
              component={ManageExpense}
              options={{
                presentation: 'modal', // ios에서만 적용.
              }}
            />
          </Stack.Navigator>
        </NavigationContainer>
      </ExpensesContextProvider>
    </>
  );
}

export default App;

export const useRootNavigation = <RouteName extends keyof ScreenParams>() =>
  useNavigation<NativeStackNavigationProp<ScreenParams, RouteName>>();

export const useRootRoute = <RouteName extends keyof ScreenParams>() =>
  useRoute<RouteProp<ScreenParams, RouteName>>();

export const useBotomTabNavigation = <RouteName extends keyof TypeBottomTabsScreenParams>() =>
  useNavigation<BottomTabNavigationProp<TypeBottomTabsScreenParams, RouteName>>();

export const useBottomTabRoute = <RouteName extends keyof TypeBottomTabsScreenParams>() =>
  useRoute<RouteProp<TypeBottomTabsScreenParams, RouteName>>();
