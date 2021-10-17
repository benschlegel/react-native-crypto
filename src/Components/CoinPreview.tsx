import React from 'react';
import { StyleSheet, TouchableOpacity, View, Text } from 'react-native';

interface CoinPreviewProps {
  course?: number;
  changePercentage?: number;
  isPositive?: boolean;
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
    elevation: 3,
    borderRadius: 20,
    width: '90%',
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'center',
    height: 70,
    flexDirection: 'row',
    marginBottom: 10,
  },
});

export default CoinPreview;
