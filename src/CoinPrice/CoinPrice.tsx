import React, { useCallback, useState } from 'react';
import { StyleSheet, View, Text, SafeAreaView, ScrollView, RefreshControl } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { BACKGROUND_COLOR, TINT_COLOR } from '../Constants/Constants';
import { wait } from '../Dashboard/Dashboard';
import { DashboardRoutes, StackNavigationProps } from '../DashboardRoutes';

const CoinPrice = ({ route }: StackNavigationProps<DashboardRoutes, 'CoinPrice'>): React.ReactElement => {
  const [refreshing, setRefreshing] = useState(false);
  const insets = useSafeAreaInsets();
  const onRefresh = useCallback(() => {
    setRefreshing(true);
    wait(1200).then(() => {
      setRefreshing(false);
      console.log('refresh');
    });
  }, []);
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
        <Text>{route.params?.coin.fullname}</Text>
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
    flex: 1,
    // paddingTop: 10,
  },
});

export default CoinPrice;
