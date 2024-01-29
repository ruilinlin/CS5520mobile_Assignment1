import React, { useState ,useEffect} from 'react';
import { View, Text, StyleSheet, Button, Modal } from 'react-native';
import Card from '../components/Card';
import CustomButton from '../components/Button';

export default function GameScreen({ name, guess,attemptsLeft,onEndGame,onNewGuess, modalVisible ,goalNumber}) {
  const [isCorrectGuess, setIsCorrectGuess] = useState(false);

  useEffect(() => {
    if (parseInt(guess) === goalNumber) {
      setIsCorrectGuess(true);
    }
  }, [guess, goalNumber]);

  let hint = guess < goalNumber ? 'higher' : 'lower';


  return (
    <Modal visible={modalVisible} animationType="slide">
      <View style={styles.screen}>
        <Card style={styles.card}>
          {isCorrectGuess ? (
            <>
              <Text>Congrats {name}! You won!</Text>
              <CustomButton title="Thank you!" onPress={() => onEndGame(true)} />
            </>
          ) : (
            <>
              // Inside GameScreen component
              <Text>Hello {name}, You have chosen {guess}. That's not my number! Guess {hint}! You have {attemptsLeft} attempts left!</Text>
              <CustomButton title='I am done' onPress={() => onEndGame(true)} />
              <CustomButton 
              title="Let me Guess Again" 
              onPress={() => {onNewGuess}} 
              disabled={attemptsLeft <= 1}
              />
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