import React, { useEffect, useState } from 'react';
import { StyleSheet, View, Text } from 'react-native';
import Animated, { Easing, useAnimatedStyle, useDerivedValue, useSharedValue, withTiming } from 'react-native-reanimated';
import { ReText } from 'react-native-redash';
import { TEXT_COLOR } from '../Constants/Constants';

interface BalanceTextProps {
  balance: Animated.SharedValue<number>;
  isRefreshing: boolean;
  dailyChange: number;
}

const BalanceText = ({ balance, isRefreshing, dailyChange }: BalanceTextProps): React.ReactElement => {
  const textStyle = useAnimatedStyle(() => {
    return {
      opacity: isRefreshing ? withTiming(0.5) : withTiming(1),
      width: '100%',
    };
  }, [isRefreshing]);

  const animatedBalance = useDerivedValue(() => {
    return `${balance.value.toFixed(2) + ' $'}`;
  }, [balance.value]);

  const dailyChangeColor = useAnimatedStyle(() => {
    return {
      color: dailyChange >= 0 ? 'green' : 'red',
    };
  }, [dailyChange]);

  return (
    <Animated.View style={textStyle}>
      <ReText style={styles.balanceText} text={animatedBalance} />
      <Animated.Text style={[styles.dailyChange, dailyChangeColor]}>{`${dailyChange.toFixed(2)}% (1D)`}</Animated.Text>
    </Animated.View>
  );
};

const styles = StyleSheet.create({
  balanceText: {
    color: TEXT_COLOR,
    fontSize: 34,
    alignSelf: 'center',
    justifyContent: 'center',
    textAlign: 'center',
    width: '100%',
    fontFamily: 'SF-Pro-Text-Bold',
  },
  dailyChange: {
    textAlign: 'center',
    fontFamily: 'SF-Pro-Text-Bold',
    fontSize: 16,
    opacity: 0.6,
  },
});

export default BalanceText;
