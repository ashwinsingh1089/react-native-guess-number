import React from 'react';
import { Text, StyleSheet } from 'react-native';

const TitleText = props => {
  return <Text style={styles.title}>{props.children}</Text>;
};

export default TitleText;
const styles = StyleSheet.create({
  title: {
    fontFamily: 'open-sans',
    fontSize: 20
  }
});
