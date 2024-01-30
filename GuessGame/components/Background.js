import React from 'react';
import { View, StyleSheet } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';

const GradientBackground = ({ children, style }) => {
  return (
    <LinearGradient
      colors={['#DA70D6',  '#FFC0CB']} 
      start={{ x: 0, y: 0 }} // Start point (0, 0) is top-left
      end={{ x: 1, y: 1 }}   // End point (1, 1) is bottom-right
      style={{ ...styles.card, ...style }}
    >
      {children}
    </LinearGradient>
  );
};

const styles = StyleSheet.create({
  card: {
    flex: 1, 
  },
});

export default GradientBackground;
