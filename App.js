/* global require */
import React, { useState } from 'react';
import { StyleSheet, SafeAreaView } from 'react-native';
import StartupScreen from './screens/StartupScreen';
import HeaderContainer from './components/HeaderContainer';
import GameScreen from './screens/GameScreen';
import GameOverScreen from './screens/GameOverScreen';
import * as Font from 'expo-font';
import { AppLoading } from 'expo';
const loadFonts = () => {
  return Font.loadAsync({
    'open-sans': require('./assets/fonts/OpenSans-Regular.ttf'),
    'open-sans-bold': require('./assets/fonts/OpenSans-Bold.ttf')
  });
};
export default function App() {
  const [guessRounds, setGuessRounds] = useState(null);
  const [userNumber, setUserNumber] = useState(0);
  const [dataLoaded, setDataLoaded] = useState(false);
  if (!dataLoaded) {
    return (
      <AppLoading
        startAsync={loadFonts}
        onFinish={() => setDataLoaded(true)}
        onError={err => console.log(err)}
      />
    );
  }
  const startGameHandler = selectedNumber => {
    setUserNumber(selectedNumber);
  };
  const gameOverHandler = guessRounds => {
    setGuessRounds(guessRounds);
  };
  const restartGameHandler = () => {
    setGuessRounds(null);
    setUserNumber(null);
  };
  let content = <StartupScreen startGame={startGameHandler} />;
  if (userNumber && !guessRounds) {
    content = (
      <GameScreen userNumber={userNumber} onGameOver={gameOverHandler} />
    );
  } else if (guessRounds) {
    content = (
      <GameOverScreen
        guessRounds={guessRounds}
        userNumber={userNumber}
        onRestartGame={restartGameHandler}
      />
    );
  }
  return (
    <SafeAreaView style={styles.safeScreen}>
      <HeaderContainer />
      {content}
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeScreen: {
    flex: 1,
    backgroundColor: '#fff'
  }
  // container: {
  //   flex: 1,
  //   backgroundColor: '#fff',
  //   alignItems: 'center',
  //   justifyContent: 'center'
  // }
});
