import { TextInput, View, StyleSheet, Alert } from "react-native";
import { useState } from "react";

import MainButton from "../components/MainButton";

const StartGameScreen = () => {
  const [enteredNumber, setEnteredNumber] = useState("");

  const numberInputHandler = (inputText) => {
    setEnteredNumber(inputText);
  };

  const confirmInputHandler = () => {
    const chosenNumber = parseInt(enteredNumber);

    if (isNaN(chosenNumber) || chosenNumber <= 0 || chosenNumber > 99) {
      console.log("Is not a valid number");
      Alert.alert("Invalid number!", "Has to be between 1 and 99", [
        { text: "Ok", style: "destructive", onPress: resetInputHandler },
      ]);
      return;
    }
  };

  const resetInputHandler = () => {
    setEnteredNumber("");
  };

  return (
    <View style={styles.screen}>
      <TextInput
        value={enteredNumber}
        onChangeText={numberInputHandler}
        style={styles.textInput}
        maxLength={2}
        keyboardType="number-pad"
        inputType="number"
      />
      <View style={styles.buttonsContainer}>
        <View style={styles.buttonContainer}>
          <MainButton onPress={resetInputHandler}>Reset</MainButton>
        </View>
        <View style={styles.buttonContainer}>
          <MainButton onPress={confirmInputHandler}>Confirm</MainButton>
        </View>
      </View>
    </View>
  );
};

export default StartGameScreen;

const styles = StyleSheet.create({
  screen: {
    justifyContent: "center",
    alignItems: "center",
    marginTop: 100,
    marginHorizontal: 24,
    padding: 16,
    backgroundColor: "#4e0329",
    borderRadius: 8,
    // works on android only
    elevation: 2,
    // works on ios only
    // shadowColor: "black",
    // shadowOffset: { width: 0, height: 2 },
    // shadowRadius: 6,
  },
  textInput: {
    height: 50,
    width: 50,
    fontSize: 32,
    borderBottomColor: "#ddb52f",
    borderBottomWidth: 2,
    marginVertical: 8,
    color: "#ddb52f",
    fontWeight: "bold",
    textAlign: "center",
  },
  buttonsContainer: {
    flexDirection: "row",
  },
  buttonContainer: {
    flex: 1,
  },
});
