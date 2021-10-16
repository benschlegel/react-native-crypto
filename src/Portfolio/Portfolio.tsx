import React from 'react';
import { StyleSheet, View, Text } from 'react-native';
import { Routes, StackNavigationProps } from '../Routes';
import { BACKGROUND_COLOR } from '../Constants/Constants';
const Portfolio = ({ navigation }: StackNavigationProps<Routes, 'Portfolio'>): React.ReactElement => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Portfolio</Text>
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
  text: {
    color: '#FFF',
    fontSize: 30,
  },
});

export default Portfolio;
