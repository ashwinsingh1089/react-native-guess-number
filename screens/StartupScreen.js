import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  Button,
  TouchableWithoutFeedback,
  Keyboard,
  Alert
} from "react-native";
import Card from "../components/Card";
import colors from "../constants/colors";
import Input from "../components/Input";
import NumberContainer from "../components/NumberContainer";
import MainButton from "../components/MainButton";

const StartupScreen = props => {
  const [enteredValue, setEnteredValue] = useState("");
  const [confirmed, setConfirmed] = useState(false);
  const [selectedNumber, setSelectedNumber] = useState("");
  const onInputChange = value => {
    setEnteredValue(value);
  };
  const onConfirmButtonClicked = () => {
    const value = parseInt(enteredValue);
    if (isNaN(enteredValue) || !enteredValue || enteredValue > 99) {
      Alert.alert(
        "Error!",
        "Number input should be a number between 0 and 99",
        [{ text: "Close", style: "destructive" }]
      );
      return;
    }
    setConfirmed(true);
    setSelectedNumber(value);
    setEnteredValue("");
    Keyboard.dismiss();
  };
  let confirmedText;
  if (confirmed) {
    confirmedText = (
      <Card style={styles.selectedContainer}>
        <Text>You selected:</Text>
        <NumberContainer>{selectedNumber}</NumberContainer>
        <MainButton onPress={props.startGame.bind(this, selectedNumber)}>
          Start Game
        </MainButton>
        {/* <Button
          title='Start Game'
          onPress={props.startGame.bind(this, selectedNumber)}
        /> */}
      </Card>
    );
  }
  return (
    <TouchableWithoutFeedback
      onPress={() => {
        Keyboard.dismiss();
      }}
    >
      <View style={styles.screen}>
        <Text style={styles.title}>Start a new Game</Text>
        <Card style={styles.cardContainer}>
          <Text>Select a number</Text>
          <Input
            autoCapitalize="none"
            autoCompleteType="off"
            autoCorrect={false}
            blurOnSubmit
            keyboardType="number-pad"
            maxLength={2}
            style={styles.textInput}
            value={enteredValue}
            onChangeText={onInputChange}
          />
          <View style={styles.cardButtons}>
            <View style={styles.actionButton}>
              <Button
                color={colors.accent}
                title="Reset"
                onPress={() => setEnteredValue("")}
              />
            </View>
            <View style={styles.actionButton}>
              <Button
                title="Confirm"
                color={colors.primary}
                onPress={onConfirmButtonClicked}
              />
            </View>
          </View>
        </Card>
        {confirmedText}
      </View>
    </TouchableWithoutFeedback>
  );
};

export default StartupScreen;
const styles = StyleSheet.create({
  title: {
    fontSize: 20,
    marginVertical: 10,
    fontFamily: "open-sans-bold"
  },
  screen: {
    flex: 1,
    alignItems: "center"
    // justifyContent: 'center'
  },
  cardContainer: {
    width: 300,
    maxWidth: "70%"
  },
  textInput: {
    width: "80%",
    maxWidth: 300,
    marginTop: 5,
    marginBottom: 5
  },
  cardButtons: {
    width: "100%",
    flexDirection: "row",
    justifyContent: "center"
    //alignItems: 'center'
  },
  actionButton: {
    margin: 5,
    width: "40%"
  },
  selectedContainer: {
    marginTop: 10
  }
});
