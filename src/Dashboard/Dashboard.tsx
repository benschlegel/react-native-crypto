import { StatusBar } from 'expo-status-bar';
import React, { useEffect } from 'react';
import { StyleSheet, View, Text, Dimensions } from 'react-native';
import { Routes, StackNavigationProps } from '../Routes';
import Svg, { Circle } from 'react-native-svg';
import Animated, { useAnimatedProps, useSharedValue, withTiming } from 'react-native-reanimated';

const { width, height } = Dimensions.get('window');
const AnimatedCircle = Animated.createAnimatedComponent(Circle);

const BACKGROUND_COLOR = '#444B6F'; //old: '#2E2E47'
const BACKGROUND_COLOR_STROKE = '#303858';
const STROKE_COLOR = '#A6E1FA';
const STROKE_WIDTH = 30;
const STROKE_WIDTH_INNER = 15;

const CIRCLE_LENGTH = 850; //2PI*R
const CIRCLE_RADIUS = CIRCLE_LENGTH / (2 * Math.PI);

const Dashboard = ({ navigation }: StackNavigationProps<Routes, 'Dashboard'>): React.ReactElement => {
  const progress = useSharedValue(0);

  useEffect(() => {
    progress.value = withTiming(0.5, { duration: 1500 });
  }, [progress]);

  const animatedCircleProps = useAnimatedProps(() => ({
    strokeDashoffset: CIRCLE_LENGTH * (1 - progress.value),
  }));

  return (
    <View style={styles.container}>
      <StatusBar style="light" />
      <Text style={styles.balanceText}>3312.53$</Text>
      <Svg>
        <Circle cx={width / 2} cy={height / 2} r={CIRCLE_RADIUS} stroke={BACKGROUND_COLOR_STROKE} strokeWidth={STROKE_WIDTH} />
        <AnimatedCircle
          cx={width / 2}
          cy={height / 2}
          r={CIRCLE_RADIUS}
          stroke={STROKE_COLOR}
          strokeWidth={STROKE_WIDTH_INNER}
          strokeDasharray={CIRCLE_LENGTH}
          strokeOpacity={0.9}
          animatedProps={animatedCircleProps}
          strokeLinecap={'round'}
        />
      </Svg>
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
  balanceText: {
    color: '#FFF',
    fontSize: 28,
    alignSelf: 'center',
    justifyContent: 'center',
    textAlign: 'center',
  },
});

export default Dashboard;
