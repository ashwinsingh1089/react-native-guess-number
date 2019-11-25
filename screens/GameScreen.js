import React, { useState, useRef, useEffect } from 'react';
import {
  View,
  Text,
  StyleSheet,
  Button,
  Alert,
  ScrollView
} from 'react-native';
import Card from '../components/Card';
import NumberContainer from '../components/NumberContainer';
import MainButton from '../components/MainButton';
import { Ionicons } from '@expo/vector-icons';
const generateRandomNumber = (min, max, exclude) => {
  min = Math.ceil(min);
  max = Math.floor(max);
  const random = Math.floor(Math.random() * (max - min)) + min;
  if (random === exclude) {
    return generateRandomNumber(min, max, exclude);
  }
  return random;
};
const renderGuesstListItem = (guess, count) => {
  return (
    <View style={styles.listItem} key={count}>
      <Text>#{count}</Text>
      <Text>{guess}</Text>
    </View>
  );
};
const GameScreen = ({ userNumber, onGameOver }) => {
  const initialGuess = generateRandomNumber(0, 100, userNumber);
  const [numberGuessed, setNumberGuessed] = useState(initialGuess);
  // const [guessCount, setGuessCount] = useState(0);
  const [pastGuesses, setPastGuesses] = useState([initialGuess]);
  useEffect(() => {
    if (numberGuessed === userNumber) {
      onGameOver(initialGuess.length);
    }
  }, [userNumber, numberGuessed]);
  const maxNumber = useRef(100);
  const minNumber = useRef(0);
  const guessNumber = direction => {
    if (
      (direction === 'lower' && numberGuessed < userNumber) ||
      (direction === 'higher' && numberGuessed > userNumber)
    ) {
      Alert.alert('Wrong choice!', 'No cheating Please!', [
        { text: 'Okay', style: 'destructive' }
      ]);
      return;
    }
    if (direction === 'lower') {
      maxNumber.current = numberGuessed + 1;
    } else {
      minNumber.current = numberGuessed;
    }
    const nextNumber = generateRandomNumber(
      minNumber.current,
      maxNumber.current,
      numberGuessed
    );
    setNumberGuessed(nextNumber);
    setPastGuesses(curPastGuesses => [nextNumber, ...curPastGuesses]);
    //setGuessCount(guessCount + 1);
  };
  return (
    <View style={styles.screen}>
      <Card>
        <Text>Number guess is:</Text>
        <NumberContainer>{numberGuessed}</NumberContainer>
        <View style={styles.buttonContainer}>
          <MainButton onPress={guessNumber.bind(this, 'lower')}>
            <Ionicons name='md-remove' color='white' size={24}></Ionicons>
          </MainButton>
          {/* <Button
            style={styles.rangeButton}
            title='Lower'
            
          /> */}
          <MainButton onPress={guessNumber.bind(this, 'higher')}>
            <Ionicons name='md-add' color='white' size={24}></Ionicons>
          </MainButton>
          {/* <Button
            style={styles.rangeButton}
            title='Higher'
            onPress={guessNumber.bind(this, 'higher')}
          /> */}
        </View>
      </Card>
      <View style={styles.listContainer}>
        <ScrollView contentContainerStyle={styles.list}>
          {pastGuesses.map((pastGuess, index) =>
            renderGuesstListItem(pastGuess, pastGuesses.length - index)
          )}
        </ScrollView>
      </View>
    </View>
  );
};

export default GameScreen;
const styles = StyleSheet.create({
  screen: {
    flex: 1,
    padding: 20
  },
  buttonContainer: {
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'center'
  },
  rangeButton: {
    margin: 10,
    width: '100%'
  },
  listContainer: {
    flex: 1,
    width: '100%',
    marginVertical: 10
  },
  list: {
    flexGrow: 1,
    justifyContent: 'center'
  },
  listItem: {
    flexDirection: 'row',
    padding: 10,
    backgroundColor: '#fff',
    marginVertical: 10,
    width: '50%',
    justifyContent: 'space-between'
  }
});
