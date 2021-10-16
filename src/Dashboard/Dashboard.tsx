import { StatusBar } from 'expo-status-bar';
import React, { useCallback, useEffect, useState } from 'react';
import { StyleSheet, View, Dimensions, Text } from 'react-native';
import { Routes, StackNavigationProps } from '../Routes';
import { useDerivedValue, useSharedValue, withTiming, Easing } from 'react-native-reanimated';
import { ReText } from 'react-native-redash';
import { BACKGROUND_COLOR } from '../Constants/Constants';
import { VictoryPie, VictoryTheme } from 'victory-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
// const { width, height } = Dimensions.get('window');

const BALANCE_DURATION = 1500;

const BALANCE = 3312.73;

const wantedGraphicData = [{ y: 10 }, { y: 50 }, { y: 40 }, { y: 40 }, { y: 40 }]; // Data that we want to display
const defaultGraphicData = [{ y: 0 }, { y: 0 }, { y: 0 }, { y: 0 }, { y: 100 }]; // Data used to make the animate prop work

function getRandomInt(min: number, max: number): number {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

const Dashboard = ({ navigation }: StackNavigationProps<Routes, 'Dashboard'>): React.ReactElement => {
  const progress = useSharedValue(0);
  const balance = useSharedValue(BALANCE * 0.85);

  const [graphicData, setGraphicData] = useState(defaultGraphicData);

  useEffect(() => {
    setGraphicData(wantedGraphicData); // Setting the data that we want to display
  }, []);

  const randomizeChart = useCallback(() => {
    const temp = Array.from(new Array(9), (x) => {
      return { y: getRandomInt(10, 200) };
    });
    setGraphicData(temp);
  }, []);

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
      <VictoryPie
        data={graphicData}
        innerRadius={100}
        theme={VictoryTheme.material}
        padAngle={2}
        animate={{
          easing: 'exp',
          duration: 1500,
        }}
      />
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
  balanceText: {
    color: '#FFF',
    fontSize: 28,
    alignSelf: 'center',
    justifyContent: 'center',
    textAlign: 'center',
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
    color: 'white',
  },
});

export default Dashboard;
