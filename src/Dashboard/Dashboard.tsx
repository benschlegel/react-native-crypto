import { StatusBar } from 'expo-status-bar';
import React, { useEffect } from 'react';
import { StyleSheet, View, Dimensions } from 'react-native';
import { Routes, StackNavigationProps } from '../Routes';
import { useDerivedValue, useSharedValue, withTiming, Easing } from 'react-native-reanimated';
import { ReText } from 'react-native-redash';
import { BACKGROUND_COLOR } from '../Constants/Constants';
import { VictoryBar, VictoryChart, VictoryPie, VictoryTheme } from 'victory-native';
const { height } = Dimensions.get('window');

const BALANCE_DURATION = 1500;

const BALANCE = 3312.73;

const data = [
  { x: 'Cats', y: 35 },
  { x: 'Dogs', y: 40 },
  { x: 'Birds', y: 55 },
];

const Dashboard = ({ navigation }: StackNavigationProps<Routes, 'Dashboard'>): React.ReactElement => {
  const progress = useSharedValue(0);
  const balance = useSharedValue(BALANCE * 0.85);
  useEffect(() => {
    progress.value = withTiming(0.5, { duration: BALANCE_DURATION });
  }, [progress]);

  useEffect(() => {
    balance.value = withTiming(BALANCE, { duration: BALANCE_DURATION * 0.6, easing: Easing.out(Easing.exp) });
  }, [balance]);

  const animatedBalance = useDerivedValue(() => {
    return `${balance.value.toFixed(2) + ' $'}`;
  });

  return (
    <View style={styles.container}>
      <StatusBar style="light" />
      <ReText style={styles.balanceText} text={animatedBalance} />
      {/* cornerRadius={30} */}
      <VictoryPie data={data} innerRadius={100} theme={VictoryTheme.material} padAngle={2} />
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
