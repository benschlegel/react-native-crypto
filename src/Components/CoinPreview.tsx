import React from 'react';
import { StyleSheet, TouchableOpacity, View, Text } from 'react-native';

interface CoinPreviewProps {
  course?: number;
  changePercentage?: number;
  image: string;
  abbreviation: string;
  fullname: string;
}

const CoinPreview = ({ image, abbreviation, fullname, course, changePercentage }: CoinPreviewProps): React.ReactElement => {
  return (
    <TouchableOpacity style={styles.button}>
      <View style={styles.container}>
        <View style={styles.imageContainer}>
          <Text>Test</Text>
        </View>
        <View style={styles.nameContainer}>
          <Text style={styles.textFullname}>{fullname}</Text>
          <Text style={styles.textAbbreviation}>{abbreviation}</Text>
        </View>
        <View style={styles.changeContainer}>
          <Text style={styles.textDailyChange}>+3,65%</Text>
          <Text style={styles.textValueTotal}>$0.76</Text>
        </View>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    backgroundColor: '#FFF',
    //Shadows for ios
    shadowColor: 'rgba(0,0,0, .4)',
    shadowOffset: { height: 1, width: 1 },
    shadowOpacity: 1,
    shadowRadius: 1,
    //Shadows for android
    elevation: 0.35,
    borderRadius: 20,
    width: '90%',
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'center',
    height: 80,
    flexDirection: 'row',
    marginBottom: 10,
    marginTop: 5,
  },
  container: {
    flexDirection: 'row',
  },
  imageContainer: {
    alignItems: 'flex-start',
    alignSelf: 'flex-start',
    justifyContent: 'center',
    marginLeft: 10,
  },
  nameContainer: {
    alignItems: 'flex-start',
    alignSelf: 'flex-start',
    justifyContent: 'center',
    marginLeft: 10,
    flex: 1,
  },
  changeContainer: {
    alignItems: 'flex-end',
    alignSelf: 'flex-end',
    justifyContent: 'center',
    marginRight: 10,
  },
  textFullname: {
    textAlign: 'left',
  },
  textAbbreviation: {
    textAlign: 'left',
  },
  textDailyChange: {
    textAlign: 'right',
  },
  textValueTotal: {
    textAlign: 'right',
  },
});

export default CoinPreview;
