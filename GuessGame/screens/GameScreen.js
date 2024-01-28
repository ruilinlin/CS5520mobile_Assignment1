import React, { useState } from 'react';
import { View, Text, StyleSheet, Button } from 'react-native';
import Card from './components/Card';

export default function GameScreen({ name, guess,onEndGame, modalVisible ,goalNumber}) {
  const [isCorrectGuess, setIsCorrectGuess] = useState(false);
  const [chanceNumber,setChanceNumber] = useState(2);

  const evaluateGuess = () => {
    if (guess === goalNumber) {
      setIsCorrectGuess(true);
    } else {
      setChanceNumber(prevChances => prevChances - 1);
    }
  };

//keep track the gues number change
  React.useEffect(() =>{
    evaluateGuess();
  },[guess]);

  function giveHint(){
    if (guess < goalNumber){
      hint = "higher";
    }else if(guess > goalNumber){
      hint = "lower";
    }
  }

// let hint = guess < goalNumber ? 'higher' : 'lower';
/*
  function endGame(){
    const onEndGame = true;
  }
*/


  return (
    <Modal visible={modalVisible} animationType="slide">
      <View style={styles.screen}>
        <Card style={styles.card}>
          {isCorrectGuess ? (
            <>
              <Text>Congratulations {name}, you have guessed the number correctly!</Text>
              <Button title="Thank you" onPress={() => onEndGame(true)} />
            </>
          ) : (
            <>
              <Text>Hello {name}, you have chosen {guess}. That's not my number! Guess {hint}! You have {chanceNumber} attempts left!</Text>
              <Button title='I am done' onPress={() => onEndGame(true)} />
              <Button title="Let me Guess Again" onPress={() => {/* back to the start screen and keep shown the pre guess number*/}} />
            </>
          )}
        </Card>
      </View>
    </Modal>
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
    }
  });