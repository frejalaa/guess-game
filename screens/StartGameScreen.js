import {
  TextInput,
  View,
  StyleSheet,
  Alert,
  useWindowDimensions,
  KeyboardAvoidingView,
  ScrollView,
} from "react-native";
import { useState } from "react";

import MainButton from "../components/ui/MainButton";
import Title from "../components/ui/Title";
import Colors from "../constants/colors";
import Card from "../components/ui/Card";
import InstructionText from "../components/ui/InstructionText";

const StartGameScreen = ({ onPickNumber }) => {
  const [enteredNumber, setEnteredNumber] = useState("");

  const { width, height } = useWindowDimensions();

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

    onPickNumber(chosenNumber);
  };

  const resetInputHandler = () => {
    setEnteredNumber("");
  };

  const marginTopDistance = height < 600 ? 30 : 100;

  return (
    <ScrollView style={styles.rootContainer}>
      <KeyboardAvoidingView
        style={[styles.rootContainer]}
        behavior="padding"
      >
        <View style={[styles.rootContainer, { marginTop: marginTopDistance }]}>
          <Title>Start a New Game!</Title>
          <Card>
            <InstructionText>Enter a number</InstructionText>
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
          </Card>
        </View>
      </KeyboardAvoidingView>
    </ScrollView>
  );
};

export default StartGameScreen;

const styles = StyleSheet.create({
  rootContainer: {
    flex: 1,
    // marginTop: 100,
    // alignItems: "center",
  },
  textInput: {
    height: 50,
    width: 50,
    fontSize: 32,
    borderBottomColor: Colors.accent500,
    borderBottomWidth: 2,
    marginVertical: 8,
    color: Colors.accent500,
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
