import React from 'react';
import { TextInput, StyleSheet } from 'react-native';

const Input = ({ style, ...rest }) => {
  return <TextInput style={{ ...styles.input, ...style }} {...rest} />;
};

const styles = StyleSheet.create({
  input: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    marginVertical: 10,
    borderRadius: 5,
    paddingHorizontal: 10,
  },
});

export default Input;
