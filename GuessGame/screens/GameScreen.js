import React, { useState } from 'react';
import { View, Text, StyleSheet, Button } from 'react-native';
import Card from './components/Card';

export default function GameScreen({ name, guess, wonState,modalVisible ,goalNumber}) {
  const [isCorrectGuess, setIsCorrectGuess] = useState(false);
  const [chanceNumber,setChanceNumber] = useState(2);

  const evaluateGuess = () => {
    if (guess === goalNumber) {
      setIsCorrectGuess(true);
    } else {
      setChanceNumber(prevChances => prevChances - 1);
    }
  };


  function giveHint(){
    if (guess < goalNumber){
      hint = "higher";
    }else if(guess > goalNumber){
      hint = "lower";
    }

  }

  function endGame(){
    const onEndGame = true;
  }

  function guessAgain(){
    if (chanceNumber > 0){
      setChanceNumber(chanceNumber - 1);
    }else{
      endGame(false);
    }
  }
  

  return(
    <modal visible = {modalVisible} >
    <View>
      <Text>Hello {name} You have chosen {guess} That's not my number! Guess {giveHint}! You have {chanceNumber} attempts left!</Text>
    </View>
    <Button title='I am done' onPress={endGame}/>
    <Button title = "Let me Guess Again" onpress={guessAgain}/>
    </modal>
  )
  };



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