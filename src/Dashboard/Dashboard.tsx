import { StatusBar } from 'expo-status-bar';
import React, { useCallback, useEffect, useState } from 'react';
import { StyleSheet, View, Text } from 'react-native';
import { Routes, StackNavigationProps } from '../Routes';
import { useSharedValue, withTiming, Easing } from 'react-native-reanimated';
import { BACKGROUND_COLOR, PieData, TEXT_COLOR } from '../Constants/Constants';
import { TouchableOpacity } from 'react-native-gesture-handler';
import BalancePie from './BalancePie';
import BalanceText from './BalanceText';

const BALANCE_DURATION = 1500;

const BALANCE = 3312.73;

const BARS = 5;

function getRandomInt(min: number, max: number): number {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

const Dashboard = ({ navigation }: StackNavigationProps<Routes, 'Dashboard'>): React.ReactElement => {
  const balance = useSharedValue(BALANCE * 0.85);
  const [graphicData, setGraphicData] = useState<PieData[]>();
  const [isRefreshing, setIsRefreshing] = useState(false);
  const [angle, setAngle] = useState(0);

  const randomizeChart = useCallback(() => {
    const temp = Array.from(new Array(BARS), () => {
      return { y: getRandomInt(10, 200) };
    });
    setGraphicData(temp);
  }, []);

  useEffect(() => {
    // use timeout to animate initial data update
    setAngle(0);
    setTimeout(() => {
      setAngle(360);
    }, 50);
    randomizeChart();
  }, [randomizeChart]);

  useEffect(() => {
    balance.value = withTiming(BALANCE, { duration: BALANCE_DURATION * 0.6, easing: Easing.out(Easing.exp) });
  }, [balance]);

  return (
    <View style={styles.container}>
      <StatusBar style="light" />
      <BalanceText balance={balance} isRefreshing={isRefreshing} />
      <BalancePie data={graphicData} angle={angle} />
      <TouchableOpacity style={styles.randomizeContainer} onPress={randomizeChart}>
        <Text style={styles.randomizeText}>Randomize</Text>
      </TouchableOpacity>
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
  randomizeContainer: {
    marginTop: 20,
    width: 200,
    height: 45,
    borderRadius: 26,
    backgroundColor: 'turquoise',
    opacity: 0.8,
    justifyContent: 'center',
    alignItems: 'center',
  },
  randomizeText: {
    color: TEXT_COLOR,
  },
});

export default Dashboard;
