import { View, Text, Pressable, StyleSheet } from "react-native";

import Colors from "../../constants/colors";

const MainButton = ({ children, onPress }) => {
  return (
    <View style={styles.buttonOuterContainer}>
      <Pressable
        style={styles.buttonInnerContainer}
        onPress={onPress}
        android_ripple={{ color: Colors.primary50 }}
      >
        <Text style={styles.textContainer}>{children}</Text>
      </Pressable>
    </View>
  );
};

export default MainButton;

const styles = StyleSheet.create({
  buttonOuterContainer: {
    borderRadius: 28,
    margin: 4,
    overflow: "hidden",
  },
  buttonInnerContainer: {
    backgroundColor: Colors.primary600,
    paddingVertical: 8,
    paddingHorizontal: 16,
    elevation: 2,
  },
  textContainer: {
    color: Colors.colorWhite,
    textAlign: "center",
  },
});
