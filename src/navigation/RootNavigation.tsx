import React from 'react';
import {
  NavigatorScreenParams,
  RouteProp,
  useNavigation,
  useRoute,
} from '@react-navigation/native';
import {
  createNativeStackNavigator,
  NativeStackNavigationProp,
} from '@react-navigation/native-stack';

import ManageExpense from '../screens/ManageExpense';
import { GlobalStyles } from '../constants/styles';
import { BottomTabNavigation, TypeBottomTabsScreenParams } from './BottomTabNavigation';

type ScreenParams = {
  ExpensesOverview: NavigatorScreenParams<TypeBottomTabsScreenParams>;
  ManageExpense: undefined;
};

const Stack = createNativeStackNavigator<ScreenParams>();

export const RootNavigation = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerStyle: { backgroundColor: GlobalStyles.colors.primary500 },
        headerTintColor: 'white',
      }}>
      <Stack.Screen
        name="ExpensesOverview"
        component={BottomTabNavigation}
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
  );
};

export const useRootNavigation = <RouteName extends keyof ScreenParams>() =>
  useNavigation<NativeStackNavigationProp<ScreenParams, RouteName>>();

export const useRootRoute = <RouteName extends keyof ScreenParams>() =>
  useRoute<RouteProp<ScreenParams, RouteName>>();
