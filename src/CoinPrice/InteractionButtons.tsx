import React, { useCallback } from 'react';
import { StyleSheet, View, Text } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { MARGIN_OUTER, TEXT_COLOR_HIGHLIGHT, TINT_COLOR } from '../Constants/Constants';

interface BUTTON_INTERFACE {
  label: string;
  isActive: boolean;
}

const BUTTON_LABELS: BUTTON_INTERFACE[] = [
  { label: '1D', isActive: true },
  { label: '7D', isActive: false },
  { label: '1M', isActive: false },
  { label: '1Y', isActive: false },
  { label: 'All', isActive: false },
];

const InteractionButtons = (): React.ReactElement => {
  const changeActive = useCallback(
    (index: number) => () => {
      console.log('index:' + index);
    },
    [],
  );

  return (
    <View style={styles.container}>
      <View style={styles.dateSelectionContainer}>
        <View style={styles.buttonContainer}>
          {BUTTON_LABELS.map((button, index) => {
            return (
              <TouchableOpacity key={index} style={button.isActive ? styles.activeButton : styles.button} onPress={changeActive(index)}>
                <Text style={[styles.buttonText, { color: button.isActive ? '#FFF' : TEXT_COLOR_HIGHLIGHT }]}>{button.label}</Text>
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
    height: 60,
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
    height: 30,
    // marginHorizontal: MARGIN_OUTER / 2,
  },
  activeButton: {
    backgroundColor: TINT_COLOR,
    justifyContent: 'center',
    alignItems: 'center',
    // height: '60%',
    // width: '100%',
    height: 36,
    width: 56,
    borderRadius: 20,
    opacity: 0.9,
  },
  buttonText: { fontSize: 14, fontFamily: 'SF-Pro-Text-Semibold' },
});

export default InteractionButtons;
