import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import colors from '../constants/colors';

const HeaderContainer = () => {
  return (
    <View style={styles.headerContainer}>
      <Text style={styles.headerTitle}>Guess a number</Text>
    </View>
  );
};

export default HeaderContainer;
const styles = StyleSheet.create({
  headerContainer: {
    width: '100%',
    paddingTop: 40,
    padding: 30,
    alignItems: 'center',
    backgroundColor: colors.primary
  },
  headerTitle: {
    fontSize: 20,
    color: 'black'
  }
});
