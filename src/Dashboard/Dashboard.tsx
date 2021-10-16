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

const BARS = 9;

interface PieData {
  y: number;
}

function getRandomInt(min: number, max: number): number {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

const Dashboard = ({ navigation }: StackNavigationProps<Routes, 'Dashboard'>): React.ReactElement => {
  const progress = useSharedValue(0);
  const balance = useSharedValue(BALANCE * 0.85);

  function calculateDefaultBar(): PieData[] {
    return Array.from(new Array(BARS), (i) => {
      if (i === BARS - 1) {
        return { y: 100 };
      } else {
        return { y: 0 };
      }
    });
  }

  const [graphicData, setGraphicData] = useState<PieData[]>(calculateDefaultBar());

  const randomizeChart = useCallback(() => {
    const temp = Array.from(new Array(BARS), () => {
      return { y: getRandomInt(10, 200) };
    });
    setGraphicData(temp);
  }, []);

  useEffect(() => {
    // TODO: figure out way to initialize graph and update it
    randomizeChart();
  }, [setGraphicData, randomizeChart]);

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
          easing: 'expOut',
          duration: 1100,
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
