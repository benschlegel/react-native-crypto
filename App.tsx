// import { StatusBar } from 'expo-status-bar';
import React from 'react';
import type { Routes } from './src/Routes';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { Dashboard } from './src/Dashboard';
import { View } from 'react-native';

export const Tab = createBottomTabNavigator<Routes>();

export default function App(): React.ReactElement {
  return (
    <NavigationContainer>
      <Tab.Navigator
        initialRouteName={'Dashboard'}
        screenOptions={({ route }) => ({
          tabBarIcon: ({ focused, color, size }) => {
            // TODO: Refactor
            let iconName = '';
            if (route.name === 'Dashboard') {
              iconName = focused ? 'fitness-outline' : 'fitness';
            } else if (route.name === 'Portfolio') {
              iconName = focused ? 'wallet-outline' : 'wallet';
            } else if (route.name === 'Prices') {
              iconName = focused ? 'stats-chart-outline' : 'stats-chart';
            } else {
              //if no icon specified, default to planet
              iconName = focused ? 'planet-outline' : 'planet';
            }

            return (
              <View>
                <Ionicons name={iconName} size={size} color={color} />
              </View>
            );
          },
          // TODO: change colors to match scheme
          tabBarActiveTintColor: '#FC5185',
          tabBarInactiveTintColor: 'gray',
          headerShown: false,
        })}>
        <Tab.Screen name="Dashboard" component={Dashboard} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}
