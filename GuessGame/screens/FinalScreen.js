import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';
import Card from '../components/Card';
import CustomButton from '../components/Button';
import Header from "../components/Header";
import GradientBackground from '../components/Background';

export default function FinalScreen({ userWon, onRestart, goalNumber }) {

  return (
    <GradientBackground>
    <View style={styles.screen}>
    <Header title="Game is Over"/>
      <Card style={styles.card}>
        
      <Text>Here is your picture</Text>

        <Image
          source={userWon ? { uri: `https://picsum.photos/id/${goalNumber}/100/100` } : require('../img/Sad-Face-Emoji.png')}
          style={styles.image}
        />
        <CustomButton title="Start Again" onPress={onRestart} />
      </Card>
    </View>
    </GradientBackground>
  );
}

const styles = StyleSheet.create({
  screen: { 
    flex: 1, 
    alignItems: 'center', 
    justifyContent: 'center'
  },

  card: { 
    alignItems: 'center'
  },

  image: {
    width: 230,
    height: 230,
    margin: 10,
  }
});
