import React, { useEffect } from 'react';
import { StyleSheet, View } from 'react-native';
import Animated, { Easing, useDerivedValue, withTiming } from 'react-native-reanimated';
import { ReText } from 'react-native-redash';

interface BalanceTextProps {
  balance: Animated.SharedValue<number>;
}

const BalanceText = ({ balance }: BalanceTextProps): React.ReactElement => {
  const animatedBalance = useDerivedValue(() => {
    return `${balance.value.toFixed(2) + ' $'}`;
  });
  return <ReText style={styles.balanceText} text={animatedBalance} />;
};

const styles = StyleSheet.create({
  balanceText: {
    color: '#FFF',
    fontSize: 28,
    alignSelf: 'center',
    justifyContent: 'center',
    textAlign: 'center',
  },
});

export default BalanceText;
