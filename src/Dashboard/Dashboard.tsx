import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, View, Text, Dimensions } from 'react-native';
import { Routes, StackNavigationProps } from '../Routes';
import Svg, { Circle } from 'react-native-svg';
import Animated, { useSharedValue } from 'react-native-reanimated';

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

  return (
    <View style={styles.container}>
      <StatusBar style="light" />
      <Svg>
        <Circle cx={width / 2} cy={height / 2} r={CIRCLE_RADIUS} stroke={BACKGROUND_COLOR_STROKE} strokeWidth={STROKE_WIDTH} />
        <AnimatedCircle
          cx={width / 2}
          cy={height / 2}
          r={CIRCLE_RADIUS}
          stroke={STROKE_COLOR}
          strokeWidth={STROKE_WIDTH_INNER}
          strokeDasharray={CIRCLE_LENGTH}
          strokeDashoffset={CIRCLE_LENGTH * 0.2}
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
});

export default Dashboard;
