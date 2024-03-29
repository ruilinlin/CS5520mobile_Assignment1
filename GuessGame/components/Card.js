import React from 'react';
import { View, StyleSheet } from 'react-native';

const CustomCard = ({ children, style }) => {
  return <View style={{ ...styles.card, ...style }}>{children}</View>;
};

const styles = StyleSheet.create({
  card: {
    shadowColor: 'black',
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 6,
    shadowOpacity: 0.26,
    elevation: 5,
    backgroundColor: 'gray',
    padding: 20,
    borderRadius: 10,
  },
});

export default CustomCard;
