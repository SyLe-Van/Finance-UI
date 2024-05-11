import { width } from "deprecated-react-native-prop-types/DeprecatedImagePropType";
import { LinearGradient } from "expo-linear-gradient";
import { Text, StyleSheet } from "react-native";
export default function ButtonHandler({ title }) {
  return (
    <LinearGradient style={styles.button} colors={["#F875AA", "#BEADFA"]}>
      <Text style={styles.text}>{title}</Text>
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  button: {
    borderRadius: 10,
    height: 50,
    width: 80,
    alignItems: "center",
    justifyContent: "center",
  },
  text: {
    fontSize: 24,
  },
});
