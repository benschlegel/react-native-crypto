import React from 'react';
import { StyleSheet, View, Text } from 'react-native';
import { BACKGROUND_COLOR } from '../Constants/Constants';

const CoinPrice = (): React.ReactElement => {
  return (
    <View style={styles.container}>
      <Text>CoinPrice</Text>
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

export default CoinPrice;
