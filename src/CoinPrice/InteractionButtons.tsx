import React from 'react';
import { StyleSheet, View, Text } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { MARGIN_OUTER } from '../Constants/Constants';

const BUTTON_LABELS = ['1D', '7D', '1M', '1Y', 'All'];

const InteractionButtons = (): React.ReactElement => {
  return (
    <View style={styles.container}>
      <View style={styles.dateSelectionContainer}>
        <View style={styles.buttonContainer}>
          {BUTTON_LABELS.map((button, index) => {
            return (
              <TouchableOpacity key={index} style={styles.button}>
                <Text>{button}</Text>
              </TouchableOpacity>
            );
          })}
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginHorizontal: MARGIN_OUTER,
    flexDirection: 'row',
  },
  dateSelectionContainer: {
    height: 50,
    backgroundColor: '#FFF',
    //Shadows for ios
    shadowColor: 'rgba(0,0,0, .4)',
    shadowOffset: { height: 1, width: 1 },
    shadowOpacity: 1,
    shadowRadius: 1,
    //Shadows for android
    elevation: 0.35,
    borderRadius: 20,
    width: '100%',
  },
  buttonContainer: {
    justifyContent: 'space-between',
    alignItems: 'center',
    // backgroundColor: 'red',
    flex: 1,
    marginHorizontal: MARGIN_OUTER,
    flexDirection: 'row',
  },
  button: {
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'center',
    // marginHorizontal: MARGIN_OUTER / 2,
  },
});

export default InteractionButtons;
