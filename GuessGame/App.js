import React, { useState } from 'react';
import { StyleSheet, View } from 'react-native';
import StartScreen from './screens/StartScreen';
import GameScreen from './screens/GameScreen';
import FinalScreen from './screens/FinalScreen';

export default function App() {
  const [currentScreen, setCurrentScreen] = useState('start');


  const startGameHandler = () => {

    setCurrentScreen('game');
  };

  const gameOverHandler = (userWon) => {

    setCurrentScreen('final');
  };

  const restartGameHandler = () => {

    setCurrentScreen('start');
  };

  let content = <StartScreen onStartGame={startGameHandler} />;

  if (currentScreen === 'game') {
    content = <GameScreen onEndGame={gameOverHandler} />;
  } else if (currentScreen === 'final') {
    content = <FinalScreen onRestartGame={restartGameHandler} />;
  }

  return (
    <View style={styles.screen}>
      {content}
    </View>
  );
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
  },
});
