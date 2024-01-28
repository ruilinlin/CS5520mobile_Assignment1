import React, { useState } from 'react';
import { View } from 'react-native';
import StartScreen from './screens/StartScreen';
import GameScreen from './screens/GameScreen';
import FinalScreen from './screens/FinalScreen';

export default function App() {

  // 'start', 'game', 'final'
  const [currentScreen, setCurrentScreen] = useState('start'); 

  // default setting of this game
  const [userName, setUserName] = useState('');
  const [userGuess, setUserGuess] = useState(null);
  const goalNumber = Math.floor(Math.random() * 10) + 1020;
  const [attemptsLeft, setAttemptsLeft] = useState(3); 
  
  //trace game state
  const [gameOver, setGameOver] = useState(false);
  const [win, setWin] = useState(false);



const handleStart = (name, guess) => {
  setUserName(name);
  setUserGuess(parseInt(guess));
  setCurrentScreen('game');
};

const handleGame = (userWon) => {
  if (userWon || attemptsLeft <= 0) {
    setModalVisible(false); // Hide the game screen
    setCurrentScreen('final'); // Navigate to final screen
  } else {
    setUserGuess(null); // Reset guess for another attempt
    setAttemptsLeft(attemptsLeft - 1);
  }
};

const handleRestart = () => {
  setCurrentScreen('start');
  setUserName('');
  setUserGuess(null);
  setGameOver(false);
  setWin(false);
  setAttemptsLeft(3);
};


return (
  <View style={{ flex: 1 }}>
    {currentScreen === 'start' && <StartScreen onStart={handleStart} />}
    {currentScreen === 'game' && (
      <GameScreen
        userName={userName}
        userGuess={userGuess}
        onGameUpdate={handleGame}
        gameOver={gameOver}
        win={win}
        attemptsLeft={attemptsLeft}
        goalNumber={goalNumber}
      />
    )}
    {currentScreen === 'final' && (
      <FinalScreen onRestart={handleRestart} win={win} goalNumber={goalNumber} />
    )}
  </View>
);


}
