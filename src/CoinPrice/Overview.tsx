import React from 'react';
import { StyleSheet, View, Text } from 'react-native';
import { TEXT_COLOR, TEXT_COLOR_HIGHLIGHT } from '../Constants/Constants';

const MARGIN_OUTER = 24;

interface OverviewProps {
  abbreviation: string;
}

const Overview = ({ abbreviation }: OverviewProps): React.ReactElement => {
  return (
    <View style={styles.overviewCard}>
      <View style={styles.overviewContainer}>
        <Text style={styles.headerText}>Overview</Text>

        <Text style={styles.courseText}>$236.15</Text>
        <Text style={styles.coinText}>{`${abbreviation} 0.003871`}</Text>
        <View style={styles.overviewDetailsContainer}>
          <View style={styles.returnContainer}>
            <Text style={styles.smallHeaderText}>Total return</Text>
            <Text style={styles.pricesText}>+$24.30</Text>
            <View style={styles.marginTop}>
              <Text style={styles.smallHeaderText}>24h return</Text>
              <Text style={styles.pricesText}>+$3.24</Text>
            </View>
          </View>
          <View>
            <Text style={styles.smallHeaderText}>Total invested</Text>
            <Text style={[styles.pricesText, { color: TEXT_COLOR }]}>$210,85</Text>
            <View style={styles.marginTop}>
              <Text style={styles.smallHeaderText}>Avg. buy price</Text>
              <Text style={[styles.pricesText, { color: TEXT_COLOR }]}>$47,121.53</Text>
            </View>
          </View>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  overviewCard: {
    marginHorizontal: MARGIN_OUTER,
    marginTop: 30,
    backgroundColor: '#FFF',
    //Shadows for ios
    shadowColor: 'rgba(0,0,0, .4)',
    shadowOffset: { height: 1, width: 1 },
    shadowOpacity: 1,
    shadowRadius: 1,
    //Shadows for android
    elevation: 0.45,
    borderRadius: 20,
    marginBottom: 14,
  },
  overviewContainer: {
    marginHorizontal: MARGIN_OUTER,
    marginVertical: MARGIN_OUTER / 2,
  },
  headerText: {
    textAlign: 'left',
    fontFamily: 'SF-Pro-Text-Semibold',
    color: TEXT_COLOR,
    fontSize: 18,
    opacity: 0.9,
    marginBottom: 2,
  },
  courseText: {
    fontFamily: 'SF-Pro-Text-Bold',
    fontSize: 28,
    marginTop: 10,
    color: TEXT_COLOR_HIGHLIGHT,
  },
  coinText: {
    color: 'gray',
    fontFamily: 'SF-Pro-Text-Regular',
    fontSize: 20,
  },
  overviewDetailsContainer: {
    flexDirection: 'row',
    marginTop: 20,
  },
  smallHeaderText: {
    textAlign: 'left',
    fontFamily: 'SF-Pro-Text-Regular',
    color: 'gray',
    fontSize: 14,
  },
  returnContainer: {
    marginRight: 76,
  },
  pricesText: {
    fontFamily: 'SF-Pro-Text-Semibold',
    fontSize: 18,
    color: 'green',
    opacity: 0.9,
  },
  marginTop: {
    marginTop: 14,
  },
});

export default Overview;
