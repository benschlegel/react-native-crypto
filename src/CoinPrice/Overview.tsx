import React from 'react';
import { StyleSheet, View, Text } from 'react-native';
import { TEXT_COLOR, TEXT_COLOR_HIGHLIGHT } from '../Constants/Constants';

const MARGIN_OUTER = 24;

const Overview = (): React.ReactElement => {
  return (
    <View style={styles.overviewCard}>
      <View style={styles.overviewContainer}>
        <Text style={styles.headerText}>You own</Text>

        <Text style={[styles.courseText, { marginTop: 10 }]}>$236.15</Text>
        <View style={styles.overviewDetailsContainer}>
          <Text style={styles.smallHeaderText}>Total return</Text>
          <Text style={styles.smallHeaderText}>24h return</Text>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  overviewCard: {
    marginHorizontal: MARGIN_OUTER,
    marginTop: 10,
    backgroundColor: '#FFF',
    //Shadows for ios
    shadowColor: 'rgba(0,0,0, .4)',
    shadowOffset: { height: 1, width: 1 },
    shadowOpacity: 1,
    shadowRadius: 1,
    //Shadows for android
    elevation: 0.45,
    borderRadius: 20,
    height: 200,
  },
  overviewContainer: {
    marginHorizontal: MARGIN_OUTER,
    marginVertical: MARGIN_OUTER / 2,
  },
  headerText: {
    textAlign: 'left',
    fontFamily: 'SF-Pro-Text-Semibold',
    color: TEXT_COLOR,
    fontSize: 16,
    opacity: 0.9,
    marginBottom: 4,
  },
  courseText: {
    fontFamily: 'SF-Pro-Text-Bold',
    fontSize: 28,
    marginBottom: 2,
    color: TEXT_COLOR_HIGHLIGHT,
  },
  overviewDetailsContainer: {
    marginTop: 10,
  },
  smallHeaderText: {
    textAlign: 'left',
    fontFamily: 'SF-Pro-Text-Regular',
    fontSize: 14,
    opacity: 0.9,
  },
});

export default Overview;
