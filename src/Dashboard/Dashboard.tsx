import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, View, Text } from 'react-native';
import { Routes, StackNavigationProps } from '../Routes';

const BACKGROUND_COLOR = '#444B6F'; //old: '#2E2E47'
const BACKGROUND_COLOR_STROKE = '#303858';
const STROKE_COLOR = '#A6E1FA';

const Dashboard = ({ navigation }: StackNavigationProps<Routes, 'Dashboard'>): React.ReactElement => {
  return (
    <View style={styles.container}>
      <StatusBar style="light" />
      <Text>Dashboard</Text>
      <Text>Dashboard</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: BACKGROUND_COLOR,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default Dashboard;
