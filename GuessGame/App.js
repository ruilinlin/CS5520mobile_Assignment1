import React, { useState } from 'react';
import { View } from 'react-native';
import StartScreen from './screens/StartScreen';
import GameScreen from './screens/GameScreen';
import FinalScreen from './screens/FinalScreen';

export default function App() {

  // 'start', 'game', 'final'
  const [currentScreen, setCurrentScreen] = useState('start'); 
  const [isGameModalVisible, setGameModalVisible] = useState(false);
  const [previousInput, setPreviousInput] = useState({ name: '', guess: null });

  // default setting of this game
  const [userName, setUserName] = useState('');
  const [userGuess, setUserGuess] = useState(null);
  const goalNumber = Math.floor(Math.random() * 10) + 1020;
  const [attemptsLeft, setAttemptsLeft] = useState(3); 
  
  
  //trace game state
  const [gameOver, setGameOver] = useState(false);
  const [win, setWin] = useState(false);

  const checkWin = (guess) => {
    return parseInt(guess) === goalNumber;
  };


  const handleStart = (name, guess) => {
    setUserName(name);
    setUserGuess(parseInt(guess));
    setGameModalVisible(true);
    setCurrentScreen('game'); 
  };

  const handleGameEnd = (winStatus) => {
    const userWon = checkWin(userGuess);    
    setWin(winStatus);
    setGameOver(true);    
    setGameModalVisible(false); 
    setCurrentScreen('final'); 
  };

  const handleNewGuess = (name, guess) => {
    if (attemptsLeft > 0) {
      setUserName(name);
      setUserGuess(guess);
      setPreviousInput({ name, guess });
      
      setAttemptsLeft(attemptsLeft-1);
      setUserGuess(null);
      setGameModalVisible(false); 
      setCurrentScreen('start');
    } else {
      setGameOver(true);
      setCurrentScreen('final');
      setGameModalVisible(false); 
    }
  };

  const handleRestart = () => {
    setCurrentScreen('start');
    setUserName('');
    setUserGuess(null);
    setGameOver(false);
    setWin(false);
    setAttemptsLeft(3);
    setGameModalVisible(false);
  };


  return (
    <View style={{ flex: 1 }}>
      {currentScreen === 'start' && <StartScreen 
      onStart={handleStart}
      userName={userName}
      userGuess={userGuess} />}
      {isGameModalVisible && (
        <GameScreen
          userName={userName}
          userGuess={userGuess}
          attemptsLeft={attemptsLeft}
          onEndGame={handleGameEnd}
          onNewGuess={handleNewGuess}
          modalVisible={isGameModalVisible}
          goalNumber={goalNumber}
          previousInput={previousInput}          
        />
      )}
      {currentScreen === 'final' && (
        <FinalScreen onRestart={handleRestart} userWon={win} goalNumber={goalNumber} />
      )}
    </View>
  );
}
