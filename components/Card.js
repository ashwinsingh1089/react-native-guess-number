import React from 'react';
import { View, StyleSheet } from 'react-native';

const Card = props => {
  return (
    <View style={{ ...styles.card, ...props.style }}>{props.children}</View>
  );
};

export default Card;
const styles = StyleSheet.create({
  card: {
    // width: 300,
    // maxWidth: '70%',
    width: '100%',
    padding: 30,
    alignItems: 'center',
    elevation: 5,
    backgroundColor: '#fff',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.26,
    shadowColor: 'black',
    shadowRadius: 6,
    borderRadius: 6
  }
});
