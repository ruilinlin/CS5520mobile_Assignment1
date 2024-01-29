import React from 'react';
import { TouchableOpacity, Text, StyleSheet } from 'react-native';

const CustomButton = ({ title, onPress, disabled, style }) => {
  const buttonStyle = disabled ? styles.buttonDisabled : styles.button;

  return (
    <TouchableOpacity
      onPress={onPress}
      disabled={disabled}
      style={[buttonStyle, style]} // Combine button style with custom style
    >
      <Text style={styles.buttonText}>{title}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    padding: 5,
    alignItems: 'center',
    backgroundColor: 'purple', 
    borderRadius: 10,
  },
  buttonDisabled: {
    padding: 5,
    alignItems: 'center',
    backgroundColor: 'grey', 
  },
  buttonText: {
    color: 'white', 
    fontSize: 16, 
  },
});

export default CustomButton;
