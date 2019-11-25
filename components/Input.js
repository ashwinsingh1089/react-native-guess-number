import React from 'react';
import { StyleSheet, TextInput } from 'react-native';

const Input = props => {
  return <TextInput {...props} style={{ ...styles.textInput, ...props.style }} />;
};

export default Input;
const styles = StyleSheet.create({
  textInput: {
    // width: '100%',
    marginTop: 5,
    marginBottom: 5,
    borderBottomWidth: 1,
    borderBottomColor: 'grey'
  }
});
