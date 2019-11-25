import React from 'react';
import { View, Text, StyleSheet, Button, Image } from 'react-native';
import BodyText from '../components/BodyText';
import TitleText from '../components/TitleText';
import colors from '../constants/colors';
//var require;
const GameOverScreen = ({ guessRounds, userNumber, onRestartGame }) => {
  return (
    <View style={styles.screen}>
      <TitleText>The Game is Over!</TitleText>
      <View style={styles.imageContainer}>
        <Image
          style={styles.image}
          //source={require('../assets/success.png')}
          source={{
            uri:
              'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQy28NtLEXuc1R4iSFELIn22irSRf5NmwMRzXv5enj_zatvVVF7'
          }}
        />
      </View>
      <View style={styles.resultContainer}>
        <BodyText style={styles.resultText}>
          Your Phone needed{' '}
          <Text style={styles.highlightText}>{guessRounds}</Text> rounds to
          guess the number{' '}
          <Text style={styles.highlightText}>{userNumber}</Text>
        </BodyText>
      </View>

      <Button onPress={onRestartGame} title='Restart Game' />
    </View>
  );
};

export default GameOverScreen;
const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  imageContainer: {
    width: 300,
    height: 300,
    borderRadius: 150,
    borderWidth: 1,
    overflow: 'hidden',
    marginVertical: 30
  },
  image: {
    width: '100%',
    height: '100%'
  },
  resultContainer: {
    width: '80%'
  },
  resultText: {
    fontWeight: 'bold',
    margin: 10,
    textAlign: 'center'
  },
  highlightText: {
    color: colors.primary
  }
});
