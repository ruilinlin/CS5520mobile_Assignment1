import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';
import Card from '../components/Card';
import CustomButton from '../components/Button';

export default function FinalScreen({ userWon, onRestart, goalNumber }) {

  console.log(userWon)
  return (
    <View style={styles.screen}>
      <Card style={styles.card}>
      <Text>Here is your picture</Text>

        <Image
          source={userWon ? { uri: `https://picsum.photos/id/${goalNumber}/100/100` } : require('../img/Sad-Face-Emoji.png')}
          style={styles.image}
        />
        <CustomButton title="Start Again" onPress={onRestart} />
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
    alignItems: 'center'
  },

  image: {
    width: 230,
    height: 230,
    margin: 10,
  }
});
