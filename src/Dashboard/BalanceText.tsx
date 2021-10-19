import React from 'react';
import { StyleSheet } from 'react-native';
import Animated, { useAnimatedStyle, useDerivedValue, withTiming } from 'react-native-reanimated';
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

  const dailyChangeColor = dailyChange >= 0 ? 'green' : 'red';

  return (
    <Animated.View style={textStyle}>
      <ReText style={styles.balanceText} text={animatedBalance} />
      <Animated.Text style={[styles.dailyChange, { color: dailyChangeColor }]}>{`${dailyChange.toFixed(2)}% (1D)`}</Animated.Text>
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
    fontFamily: 'SF-Pro-Text-Regular',
  },
  dailyChange: {
    textAlign: 'center',
    fontFamily: 'SF-Pro-Text-Regular',
    fontSize: 16,
    opacity: 0.6,
  },
});

export default React.memo(BalanceText);
