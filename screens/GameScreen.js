import { useState, useEffect } from "react";
import { Text, View, StyleSheet, Alert } from "react-native";

import Title from "../components/ui/Title";
import NumberContainer from "../components/game/NumberContainer";
import MainButton from "../components/ui/MainButton";

const generateRandomBetween = (min, max) => {
  return Math.floor(Math.random() * (max - min + 1) + min);
};

let currentLow = 1;
let currentHigh = 99;

const GameScreen = ({ pickedNumber, onChangeScreen }) => {
  const initialGuess = generateRandomBetween(1, 99);

  const [currentGuess, setCurrentGuess] = useState(initialGuess);

  useEffect(() => {
    if (currentGuess === pickedNumber) {
      onChangeScreen();
    }
  }, [currentGuess]);

  const nextGuessHandler = (direction) => {
    if (
      (direction === "lower" && currentGuess < pickedNumber) ||
      (direction === "greater" && currentGuess > pickedNumber)
    ) {
      Alert.alert("Don't lie!", "You know that this is wrong...", [
        {
          text: "Sorry!",
          style: "cancel",
        },
      ]);
      return;
    }

    if (direction === "lower") {
      currentHigh = currentGuess - 1;
    } else if (direction === "greater") {
      currentLow = currentGuess + 1;
    }

    const nextNumber = generateRandomBetween(currentLow, currentHigh);
    setCurrentGuess(nextNumber);
  };

  return (
    <View style={styles.screen}>
      <Title>Opponent's Guess</Title>
      <NumberContainer>{currentGuess}</NumberContainer>
      <View>
        <Title>Higher or lower?</Title>
        <View style={styles.buttonsContainer}>
          <MainButton onPress={nextGuessHandler.bind(this, "lower")}>
            -
          </MainButton>
          <MainButton onPress={nextGuessHandler.bind(this, "greater")}>
            +
          </MainButton>
        </View>
      </View>
      <View></View>
    </View>
  );
};

export default GameScreen;

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    padding: 24,
  },
  buttonsContainer: {
    flexDirection: "row",
    justifyContent: "center",
  },
});
