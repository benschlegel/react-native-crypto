import React, { useCallback, useState } from 'react';
import { StyleSheet, View, Text, SafeAreaView, ScrollView, RefreshControl, Image } from 'react-native';
import Animated, { useAnimatedStyle, withTiming } from 'react-native-reanimated';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { BACKGROUND_COLOR, currencyFormat, TEXT_COLOR, TEXT_COLOR_HIGHLIGHT, TINT_COLOR } from '../Constants/Constants';
import { wait } from '../Dashboard/Dashboard';
import { DashboardRoutes, StackNavigationProps } from '../DashboardRoutes';
import Overview from './Overview';

const MARGIN_OUTER = 24;

const CoinPrice = ({ route }: StackNavigationProps<DashboardRoutes, 'CoinPrice'>): React.ReactElement => {
  const { image, abbreviation, course, changePercentage, fullname } = route.params?.coin;
  const [refreshing, setRefreshing] = useState(false);
  const insets = useSafeAreaInsets();
  const color = changePercentage >= 0 ? 'green' : 'rgba(255, 85, 114, 0.95)';

  const onRefresh = useCallback(() => {
    setRefreshing(true);
    wait(1200).then(() => {
      setRefreshing(false);
      //add logic, callback needed for refreshcontrol to work
    });
  }, []);

  const animatedOpacity = useAnimatedStyle(() => {
    return {
      opacity: refreshing ? withTiming(0.65) : withTiming(1),
    };
  }, [refreshing]);

  return (
    <SafeAreaView style={[styles.container, { paddingTop: insets.top }]}>
      <ScrollView
        style={styles.scrollView}
        refreshControl={
          <RefreshControl
            refreshing={refreshing}
            onRefresh={onRefresh}
            progressViewOffset={62}
            tintColor={TINT_COLOR}
            colors={[TINT_COLOR]}
          />
        }>
        {/* Header */}
        <View style={styles.header}>
          <View style={styles.info}>
            <Text style={styles.fullnameText}>{fullname}</Text>
            <Animated.View style={animatedOpacity}>
              <Text style={styles.courseText}>{currencyFormat(course)}</Text>
              <Text style={[{ color }, styles.changeText]}>{`${changePercentage >= 0 ? '+' : ''}${(
                course *
                (changePercentage / 100)
              ).toFixed(2)}$ / ${changePercentage.toFixed(2)}% (1D)`}</Text>
            </Animated.View>
          </View>
          <View style={styles.imageContainer}>
            <Image style={styles.icon} source={image} />
          </View>
        </View>

        {/* Overview */}
        <Overview />
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
  scrollView: {
    // flex: 1,
    width: '100%',
    // paddingTop: 10,
  },
  header: {
    flexDirection: 'row',
    marginTop: 10,
  },
  info: {
    marginLeft: MARGIN_OUTER,
    flex: 1,
  },
  imageContainer: {
    justifyContent: 'center',
    alignItems: 'flex-end',
    marginRight: MARGIN_OUTER,
  },
  icon: {
    width: 70,
    height: 70,
  },
  changeText: {
    fontSize: 17,
    fontFamily: 'SF-Pro-Text-Regular',
    opacity: 0.95,
  },
  courseText: {
    fontFamily: 'SF-Pro-Text-Bold',
    fontSize: 28,
    marginBottom: 2,
    color: TEXT_COLOR_HIGHLIGHT,
  },
  fullnameText: {
    textAlign: 'left',
    fontFamily: 'SF-Pro-Text-Semibold',
    color: TEXT_COLOR,
    fontSize: 18,
    opacity: 0.95,
    marginBottom: 4,
  },
});

export default CoinPrice;
