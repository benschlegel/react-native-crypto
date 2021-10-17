/* eslint-disable @typescript-eslint/no-unsafe-assignment */
// import { StatusBar } from 'expo-status-bar';
import React from 'react';
import type { Routes } from './src/Routes';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { Dashboard } from './src/Dashboard';
import { View } from 'react-native';
import { Portfolio } from './src/Portfolio';
import { Prices } from './src/Prices';
import { Profile } from './src/Profile';
import { TINT_COLOR } from './src/Constants/Constants';
import { useFonts } from 'expo-font';

export const Tab = createBottomTabNavigator<Routes>();

export default function App(): React.ReactElement {
  const [loaded] = useFonts({
    'SF-Pro-Text-Bold': require('./assets/fonts/SF-Pro-Text-Regular.otf'),
    'SF-Pro-Text-Regular': require('./assets/fonts/SF-Pro-Text-Bold.otf'),
    'SF-Pro-Text-Semibold': require('./assets/fonts/SF-Pro-Text-Semibold.otf'),
  });

  if (!loaded) {
    return <View />;
  }

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
          tabBarActiveTintColor: TINT_COLOR,
          tabBarInactiveTintColor: 'gray',
          headerShown: false,
        })}>
        <Tab.Screen name="Dashboard" component={Dashboard} />
        <Tab.Screen name="Portfolio" component={Portfolio} />
        <Tab.Screen name="Prices" component={Prices} />
        <Tab.Screen name="Profile" component={Profile} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}
