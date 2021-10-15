import React from 'react';
import { StyleSheet, View, Text } from 'react-native';
import { Routes, StackNavigationProps } from '../Routes';

const Portfolio = ({ navigation }: StackNavigationProps<Routes, 'Portfolio'>): React.ReactElement => {
  return (
    <View style={styles.container}>
      <Text>Portfolio</Text>
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

export default Portfolio;
