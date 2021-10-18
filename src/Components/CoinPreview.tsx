import React from 'react';
import { StyleSheet, TouchableOpacity, View, Text } from 'react-native';

interface CoinPreviewProps {
  course?: number;
  changePercentage?: number;
  image: string;
  abbreviation: string;
  fullname: string;
}

const CoinPreview = ({}: CoinPreviewProps): React.ReactElement => {
  return (
    <TouchableOpacity style={styles.container}>
      <View>
        <Text>Test</Text>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
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
});

export default CoinPreview;
