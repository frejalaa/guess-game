import { View, Text, StyleSheet } from "react-native";

import Card from "../ui/Card";
import Colors from "../../constants/colors";

const GuessLogNumber = ({ roundNumber, number }) => {
  return (
    <Card style={styles.cardStyle}>
      <View style={styles.guessLogNumber}>
        <Text style={styles.guessText}>#{roundNumber}</Text>
        <Text style={styles.guessText}>Guess: {number}</Text>
      </View>
    </Card>
  );
};

export default GuessLogNumber;

const styles = StyleSheet.create({
	guessLogNumber: {
		width: "100%",
		flexDirection: "row",
		justifyContent: "space-between",
		alignItems: "center",
		paddingVertical: 4,
	},
	guessText: {
		fontSize: 16,
		color: Colors.colorWhite,
	},
	cardStyle: {
		backgroundColor: Colors.accent500,
		borderRadius: 35,
		borderColor: Colors.primary800,
		borderWidth: 1,
		marginTop: 20,
	},
});
