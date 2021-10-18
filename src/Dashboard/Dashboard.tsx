import { StatusBar } from 'expo-status-bar';
import React, { useCallback, useEffect, useState } from 'react';
import { StyleSheet, View, Text, ScrollView, SafeAreaView, RefreshControl } from 'react-native';
import { Routes, StackNavigationProps } from '../Routes';
import { useSharedValue, withTiming, Easing } from 'react-native-reanimated';
import { BACKGROUND_COLOR, Coin, PieData, TEXT_COLOR, TINT_COLOR } from '../Constants/Constants';
import BalancePie from './BalancePie';
import BalanceText from './BalanceText';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import CoinPreview from '../Components/CoinPreview';

const BALANCE_DURATION = 1500;
const BALANCE = 3312.73;
const BARS = 6;

const MARGIN_SIDES = 30;

function getRandomInt(min: number, max: number): number {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
}
const wait = (timeout: number): Promise<number> => {
  return new Promise((resolve) => setTimeout(resolve, timeout));
};

const COINS: Coin[] = [
  { image: 'bitcoin-btc-logo.png', abbreviation: 'BTC', fullname: 'Bitcoin', course: 61863.84, changePercentage: 0.84 },
  { image: 'cardano-ada-logo.png', abbreviation: 'ADA', fullname: 'Cardano', course: 2.14, changePercentage: -2.03 },
  { image: 'ethereum-eth-logo.png', abbreviation: 'ETH', fullname: 'Ethereum', course: 3816.53, changePercentage: -1.94 },
  { image: 'polygon-matic-logo.png', abbreviation: 'MATIC', fullname: 'Polygon', course: 1.54, changePercentage: 1.49 },
  { image: 'solana-sol-logo.png', abbreviation: 'SOL', fullname: 'Solana', course: 156.81, changePercentage: -5.45 },
  { image: 'vechain-vet-logo.png', abbreviation: 'VET', fullname: 'Vechain', course: 0.1186, changePercentage: 0.06 },
];

const Dashboard = ({ navigation }: StackNavigationProps<Routes, 'Dashboard'>): React.ReactElement => {
  const insets = useSafeAreaInsets();
  const balance = useSharedValue(BALANCE * 0.85);
  const [graphicData, setGraphicData] = useState<PieData[]>();
  const [angle, setAngle] = useState(0);
  const [dailyChange, setDailyChange] = useState(1.4);
  const [refreshing, setRefreshing] = React.useState(false);

  const randomizeChart = useCallback(() => {
    const temp: PieData[] = Array.from(new Array(BARS), (el, i) => {
      return { y: getRandomInt(10, 200), label: COINS[i].abbreviation };
    });

    setGraphicData(temp);
  }, []);

  const onRefresh = React.useCallback(() => {
    setRefreshing(true);
    wait(1200).then(() => {
      setRefreshing(false);
      balance.value = withTiming(balance.value + 10, { duration: BALANCE_DURATION * 0.35, easing: Easing.out(Easing.exp) });
      randomizeChart();
      setDailyChange(Math.random() * 5 - 3);
    });
  }, [balance, randomizeChart]);

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
    <SafeAreaView style={[styles.container, { paddingTop: insets.top }]}>
      <StatusBar style="dark" />

      <ScrollView
        contentContainerStyle={styles.scrollView}
        refreshControl={
          <RefreshControl
            refreshing={refreshing}
            onRefresh={onRefresh}
            progressViewOffset={45}
            tintColor={TINT_COLOR}
            colors={[TINT_COLOR]}
          />
        }>
        <View style={styles.textNameContainer}>
          <Text style={styles.textWelcome}>Welcome,</Text>
          <Text style={styles.textName}>Ben</Text>
        </View>
        <View style={styles.balanceContainer}>
          <Text style={styles.balanceText}>Balance</Text>
        </View>
        <BalanceText balance={balance} isRefreshing={refreshing} dailyChange={dailyChange} />
        <BalancePie data={graphicData} isRefreshing={refreshing} angle={angle} />
        {/* <TouchableOpacity style={styles.randomizeContainer} onPress={randomizeChart}>
          <Text style={styles.randomizeText}>Randomize</Text>
        </TouchableOpacity> */}

        {/* Favs section */}
        <View style={styles.favsContainer}>
          {COINS.map((coin, index) => {
            return <CoinPreview image={coin.image} abbreviation={coin.abbreviation} fullname={coin.fullname} key={index} />;
          })}
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: BACKGROUND_COLOR,
    justifyContent: 'center',
    alignItems: 'center',
  },
  // randomizeContainer: {
  //   marginTop: 15,
  //   marginBottom: 5,
  //   width: 200,
  //   height: 45,
  //   borderRadius: 26,
  //   backgroundColor: 'turquoise',
  //   opacity: 0.8,
  //   justifyContent: 'center',
  //   alignItems: 'center',
  //   alignSelf: 'center',
  // },
  // randomizeText: {
  //   color: TEXT_COLOR,
  //   fontFamily: 'SF-Pro-Text-Semibold',
  // },
  scrollView: {
    paddingTop: 25,
  },
  textNameContainer: {
    paddingTop: 0,
    flexDirection: 'column',
    justifyContent: 'flex-start',
    alignSelf: 'flex-start',
    marginLeft: MARGIN_SIDES,
  },
  textWelcome: {
    textAlign: 'left',
    fontSize: 20,
    color: 'gray',
    fontFamily: 'SF-Pro-Text-Bold',
  },
  textName: {
    textAlign: 'left',
    fontSize: 26,
    fontFamily: 'SF-Pro-Text-Bold',
  },
  balanceText: {
    textAlign: 'center',
    fontSize: 24,
    fontFamily: 'SF-Pro-Text-Semibold',
    color: TEXT_COLOR,
  },
  balanceContainer: {
    opacity: 0.75,
    marginTop: 20,
    justifyContent: 'center',
    alignSelf: 'center',
    alignItems: 'center',
  },
  favsContainer: {
    marginTop: 26,
    // paddingTop: 26,
    // borderTopLeftRadius: 40,
    // borderTopRightRadius: 40,
    // backgroundColor: 'white',
  },
});

export default Dashboard;
