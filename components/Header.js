import { StyleSheet, Text, View } from "react-native";
import React from "react";

const Header = ({title}) =>(
  <View style={styles.headerContainer}>
    <Text style={styles.headerTitle}>{title}</Text>
  </View>
);


const styles = StyleSheet.create({
  headerContainer:{
    width: '100%',
    padding: 20,
    alignItems: 'center',
    justifyContent: 'flex-start',
  },
  
  headerTitle: {
    color: "purple",
    fontSize: 20,
  },

});

export default Header;