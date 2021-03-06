import type { ParamListBase, RouteProp } from '@react-navigation/native';
import type { StackNavigationProp } from '@react-navigation/stack';
import { Coin } from './Constants/Constants';

export interface StackNavigationProps<ParamList extends ParamListBase, RouteName extends keyof ParamList = string> {
  navigation: StackNavigationProp<ParamList, RouteName>;
  route: RouteProp<ParamList, RouteName>;
}

export type DashboardRoutes = {
  Home: undefined;
  CoinPrice: { coin: Coin };
};
