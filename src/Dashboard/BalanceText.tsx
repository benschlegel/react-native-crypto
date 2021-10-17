import React, { useEffect, useState } from 'react';
import { StyleSheet, View } from 'react-native';
import Animated, { Easing, useAnimatedStyle, useDerivedValue, useSharedValue, withTiming } from 'react-native-reanimated';
import { ReText } from 'react-native-redash';
import { TEXT_COLOR } from '../Constants/Constants';

interface BalanceTextProps {
  balance: Animated.SharedValue<number>;
  isRefreshing: boolean;
}

const BalanceText = ({ balance, isRefreshing }: BalanceTextProps): React.ReactElement => {
  const animatedBalance = useDerivedValue(() => {
    return `${balance.value.toFixed(2) + ' $'}`;
  });

  return (
    <Animated.View>
      <ReText style={styles.balanceText} text={animatedBalance} />
    </Animated.View>
  );
};

const styles = StyleSheet.create({
  balanceText: {
    color: TEXT_COLOR,
    fontSize: 28,
    alignSelf: 'center',
    justifyContent: 'center',
    textAlign: 'center',
  },
});

export default BalanceText;
