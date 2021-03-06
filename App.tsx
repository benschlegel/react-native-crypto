/* eslint-disable @typescript-eslint/no-unsafe-assignment */
// import { StatusBar } from 'expo-status-bar';
import React from 'react';
import type { Routes } from './src/Routes';
import type { DashboardRoutes } from './src/DashboardRoutes';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { Dashboard } from './src/Dashboard';
import { View, StyleSheet } from 'react-native';
import { Portfolio } from './src/Portfolio';
import { Prices } from './src/Prices';
import { Profile } from './src/Profile';
import { BACKGROUND_COLOR, TEXT_COLOR, TINT_COLOR } from './src/Constants/Constants';
import { useFonts } from 'expo-font';
import { createStackNavigator, StackNavigationOptions, TransitionPresets } from '@react-navigation/stack';
import { CoinPrice } from './src/CoinPrice';

// TODO: notification icon on dashboard
// TODO: heart icon on details/coinprice
const Tab = createBottomTabNavigator<Routes>();
const Stack = createStackNavigator<DashboardRoutes>();

const CoinPriceOptions: StackNavigationOptions = {
  headerShown: true,
  headerTitle: 'Price',
  headerStyle: { backgroundColor: BACKGROUND_COLOR },
  headerTitleStyle: { fontFamily: 'SF-Pro-Text-Semibold', color: TEXT_COLOR, fontSize: 22 },
  // TODO: pick transition
  ...TransitionPresets.ModalSlideFromBottomIOS,
};

function DashboardStack(): React.ReactElement {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false, animationTypeForReplace: 'pop' }}>
      <Stack.Screen name="Home" component={Dashboard} options={{ headerShown: false }} />
      <Stack.Screen name="CoinPrice" component={CoinPrice} options={CoinPriceOptions} />
    </Stack.Navigator>
  );
}

export default function App(): React.ReactElement {
  const [loaded] = useFonts({
    'SF-Pro-Text-Regular': require('./assets/fonts/SF-Pro-Text-Regular.otf'),
    'SF-Pro-Text-Bold': require('./assets/fonts/SF-Pro-Text-Bold.otf'),
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
            let iconName = '';
            switch (route.name) {
              case 'Dashboard':
                iconName = focused ? 'home-outline' : 'home';
                break;
              case 'Portfolio':
                iconName = focused ? 'wallet-outline' : 'wallet';
                break;
              case 'Prices':
                iconName = focused ? 'wallet-outline' : 'wallet';
                break;
              default:
                iconName = focused ? 'planet-outline' : 'planet';
            }

            return (
              <View style={styles.tabContainer}>
                <Ionicons name={iconName} size={size} color={color} />
              </View>
            );
          },
          tabBarActiveTintColor: TINT_COLOR,
          tabBarInactiveTintColor: 'gray',
          headerShown: false,
        })}>
        <Tab.Screen name="Dashboard" component={DashboardStack} />
        <Tab.Screen name="Portfolio" component={Portfolio} />
        <Tab.Screen name="Prices" component={Prices} />
        <Tab.Screen name="Profile" component={Profile} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  tabContainer: { marginTop: 5 },
});
