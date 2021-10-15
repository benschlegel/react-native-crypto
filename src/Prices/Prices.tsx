import React from 'react';
import { StyleSheet, View, Text } from 'react-native';
import { Routes, StackNavigationProps } from '../Routes';

const Prices = ({ navigation }: StackNavigationProps<Routes, 'Prices'>): React.ReactElement => {
  return (
    <View style={styles.container}>
      <Text>Prices</Text>
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

export default Prices;
