import React from 'react';
import { View, Text, StyleSheet, Button, Image } from 'react-native';
import Card from '../components/Card';

export default function FinalScreen({ userWon, onRestartGame, goalNumber }) {
  const imageUrl = userWon ? `https://picsum.photos/id/${goalNumber}/100/100` : require('../img/Sad-Face-Emoji.png');

  return (
    <View style={styles.screen}>
      <Card style={styles.card}>
        {userWon ? (
          <Text>Here is your picture</Text>
        ) : (
          <Text>Sorry, better luck next time!</Text>
        )}
        <Image source={imageUrl} style={styles.image} />
        <Button title="Start Again" onPress={onRestartGame} />
      </Card>
    </View>
  );
}

const styles = StyleSheet.create({
  screen: { 
    flex: 1, 
    alignItems: 'center', 
    justifyContent: 'center'
  },
  card: { 
    padding: 20, 
    borderRadius: 10,
    alignItems: 'center'
  },
  image: {
    width: 100,
    height: 100,
    margin: 10,
  }
});
