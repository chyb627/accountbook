import React from 'react';
import { createBottomTabNavigator, BottomTabNavigationProp } from '@react-navigation/bottom-tabs';

import { AllExpenses } from '../screens/AllExpenses';
import { RecentExpenses } from '../screens/RecentExpenses';
import { GlobalStyles } from '../constants/styles';
import { RouteProp, useNavigation, useRoute } from '@react-navigation/native';
import { Icon } from '../components/UI/Icons';
import { Pressable } from 'react-native';

export type TypeBottomTabsScreenParams = {
  RecentExpenses: { id: string };
  AllExpenses: { id: string };
};

const BottomTabs = createBottomTabNavigator<TypeBottomTabsScreenParams>();

export const BottomTabNavigation = () => {
  return (
    <BottomTabs.Navigator
      screenOptions={({ navigation }) => ({
        headerStyle: { backgroundColor: GlobalStyles.colors.primary500 },
        headerTintColor: 'white',
        tabBarStyle: { backgroundColor: GlobalStyles.colors.primary500 },
        tabBarActiveTintColor: GlobalStyles.colors.accent500,
        headerRight: ({ tintColor }) => (
          <Pressable
            onPress={() => {
              navigation.navigate('ManageExpense');
            }}>
            <Icon name="add" size={24} color={tintColor} />
          </Pressable>
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
};

export const useBotomTabNavigation = <RouteName extends keyof TypeBottomTabsScreenParams>() =>
  useNavigation<BottomTabNavigationProp<TypeBottomTabsScreenParams, RouteName>>();

export const useBottomTabRoute = <RouteName extends keyof TypeBottomTabsScreenParams>() =>
  useRoute<RouteProp<TypeBottomTabsScreenParams, RouteName>>();
