import { StyleSheet, Text, View } from "react-native";
import React from "react";

const header = ({title}) =>(
  <View style={styles.headerContainer}>
    <Text style={styles.headerTitle}>{title}</Text>
  </View>
);


const styles = StyleSheet.create({
  headerContainer:{
    width: '100%',
    padding: 15,
    alignItems: 'center',
    justifyContent: 'center',
  },
  
  headerTitle: {
    color: "purple",
    fontSize: 20,
  },

});