import { useState } from "react";
import { Text, View, StyleSheet } from "react-native";

import Title from "../components/ui/Title";
import NumberContainer from "../components/game/NumberContainer";

const generateRandomBetween = (min, max) => {
  return Math.floor(Math.random() * (max - min)) + min + 1;
};

const GameScreen = () => {
  const initialGuess = generateRandomBetween(0, 100);

  const [currentGuess, setCurrentGuess] = useState(initialGuess);

  return (
    <View style={styles.screen}>
      <Title>Opponent's Guess</Title>
      <NumberContainer>{currentGuess}</NumberContainer>
      <View>
        <Text>Higher or lower?</Text>
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
});
