import React from 'react';
import { StyleSheet, View, Text } from 'react-native';
import { MARGIN_OUTER } from '../Constants/Constants';

const InteractionButtons = (): React.ReactElement => {
  return (
    <View style={styles.container}>
      <Text>InteractionButtons</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginHorizontal: MARGIN_OUTER,
  },
});

export default InteractionButtons;
