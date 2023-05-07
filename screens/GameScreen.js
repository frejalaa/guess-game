import { useState, useEffect } from "react";
import { View, StyleSheet, Alert, FlatList, Text } from "react-native";
import { Ionicons } from "@expo/vector-icons";

import Title from "../components/ui/Title";
import NumberContainer from "../components/game/NumberContainer";
import MainButton from "../components/ui/MainButton";
import Card from "../components/ui/Card";
import InstructionText from "../components/ui/InstructionText";
import GuessLogNumber from "../components/game/GuessLogNumber";

const generateRandomBetween = (min, max) => {
  return Math.floor(Math.random() * (max - min + 1) + min);
};

let currentLow = 1;
let currentHigh = 99;

const GameScreen = ({ pickedNumber, onChangeScreen }) => {
  const initialGuess = generateRandomBetween(1, 99);

  const [currentGuess, setCurrentGuess] = useState(initialGuess);
  const [guesses, setGuesses] = useState([initialGuess]);

  useEffect(() => {
    if (currentGuess === pickedNumber) {
      onChangeScreen(guesses.reverse());
    }
  }, [currentGuess]);

  useEffect(() => {
    currentLow = 1;
    currentHigh = 99;
  }, []);

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
    setGuesses((currentGuesses) => [nextNumber, ...currentGuesses]);
    console.log("guesses: ", guesses);
  };

  return (
    <View style={styles.screen}>
      <Title>Opponent's Guess</Title>
      <NumberContainer>{currentGuess}</NumberContainer>
      <Card>
        <InstructionText style={styles.instructionText}>
          Higher or lower?
        </InstructionText>
        <View style={styles.buttonsContainer}>
          <View style={styles.buttonContainer}>
            <MainButton onPress={nextGuessHandler.bind(this, "lower")}>
              <Ionicons name="md-remove" size={24} color="white" />
            </MainButton>
          </View>
          <View style={styles.buttonContainer}>
            <MainButton onPress={nextGuessHandler.bind(this, "greater")}>
              <Ionicons name="md-add" size={24} color="white" />
            </MainButton>
          </View>
        </View>
      </Card>
      <View style={styles.listContainer}>
        <FlatList
          data={guesses}
          renderItem={(itemData) => {
            return (
              <GuessLogNumber
                roundNumber={guesses.length - itemData.index}
                number={itemData.item}
              />
            );
          }}
          keyExtractor={(item) => item}
        />
      </View>
    </View>
  );
};

export default GameScreen;

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    padding: 24,
  },
  instructionText: {
    marginBottom: 16,
  },
  buttonsContainer: {
    flexDirection: "row",
  },
  buttonContainer: {
    flex: 1,
  },
  listContainer: {
    flex: 1,
  }
});
