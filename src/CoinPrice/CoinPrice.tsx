import React from 'react';
import { StyleSheet, View, Text } from 'react-native';
import { StackNavigationProps, DashboardRoutes } from '../DashboardRoutes';
const CoinPrice = ({ navigation }: StackNavigationProps<DashboardRoutes, 'CoinPrice'>): React.ReactElement => {
  return (
    <View style={styles.container}>
      <Text>CoinPrice</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'green',
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default CoinPrice;
