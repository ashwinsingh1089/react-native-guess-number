import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import colors from '../constants/colors';

const NumberContainer = props => {
  return (
    <View style={styles.numberContainer}>
      <Text style={styles.number}>{props.children}</Text>
    </View>
  );
};

export default NumberContainer;
const styles = StyleSheet.create({
  numberContainer: {
    padding: 10,
    borderWidth: 2,
    borderColor: colors.accent,
    borderRadius: 5,
    margin: 5
  },
  number: {
    color: colors.accent,
    fontSize: 20
  }
});
