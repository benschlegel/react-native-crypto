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
  const textStyle = useAnimatedStyle(() => {
    return {
      opacity: isRefreshing ? withTiming(0.5) : withTiming(1),
    };
  }, [isRefreshing]);

  const animatedBalance = useDerivedValue(() => {
    return `${balance.value.toFixed(2) + ' $'}`;
  }, [balance.value]);

  return (
    <Animated.View style={textStyle}>
      <ReText style={styles.balanceText} text={animatedBalance} />
    </Animated.View>
  );
};

const styles = StyleSheet.create({
  balanceText: {
    color: TEXT_COLOR,
    fontSize: 38,
    alignSelf: 'center',
    justifyContent: 'center',
    textAlign: 'center',
    fontFamily: 'SF-Pro-Text-Bold',
  },
});

export default BalanceText;
