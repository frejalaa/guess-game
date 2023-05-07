import {
  View,
  Image,
  Text,
  StyleSheet,
  Dimensions,
  useWindowDimensions,
  ScrollView,
} from "react-native";

import Title from "../components/ui/Title";
import Colors from "../constants/colors";
import MainButton from "../components/ui/MainButton";

const GameOverScreen = ({ onRestartGame, guessedNumbers }) => {
  const rounds = guessedNumbers.length;
  const guessedNumber = guessedNumbers[rounds - 1];

  const { width, height } = useWindowDimensions();

  let imageSize = 300;

  if (width < 360) {
    imageSize = 150;
  }

  if (height < 600) {
    imageSize = 100;
  }

  const imageStyle = {
    width: imageSize,
    height: imageSize,
    borderRadius: imageSize / 2,
  }

  return (
    <ScrollView style={styles.screen}>
    <View style={styles.rootContainer}>
      <Title>GAME OVER!</Title>
      <View style={[styles.imageContainer, imageStyle]}>
        <Image
          source={require("../assets/images/success.png")}
          style={styles.image}
        />
      </View>
      <Text style={styles.summaryText}>
        Your phone needed <Text style={styles.highlight}>{rounds}</Text> rounds
        to guess the number{" "}
        <Text style={styles.highlight}>{guessedNumber}</Text>.
      </Text>
      <MainButton onPress={onRestartGame}>Start New Game</MainButton>
    </View>
    </ScrollView>
  );
};

export default GameOverScreen;

// const deviceWidth = Dimensions.get("window").width;

const styles = StyleSheet.create({
  screen: {
    flex: 1,
  },
  rootContainer: {
    flex: 1,
    padding: 24,
    justifyContent: "center",
    alignItems: "center",
  },
  imageContainer: {
    // width: deviceWidth < 360 ? 200 : 300,
    // height: deviceWidth < 360 ? 200 : 300,
    // borderRadius: deviceWidth < 360 ? 100 : 200,
    borderWidth: 3,
    borderColor: Colors.primary800,
    overflow: "hidden",
    margin: 36,
  },
  image: {
    width: "100%",
    height: "100%",
  },
  summaryText: {
    fontFamily: "open-sans",
    fontSize: 24,
    textAlign: "center",
    marginVertical: 24,
  },
  highlight: {
    fontFamily: "open-sans-bold",
    color: Colors.primary500,
  },
});
