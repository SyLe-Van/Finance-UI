import { width } from "deprecated-react-native-prop-types/DeprecatedImagePropType";
import { LinearGradient } from "expo-linear-gradient";
import { Text, StyleSheet } from "react-native";
export default function ButtonHandler({ title }) {
  return (
    <LinearGradient style={styles.button} colors={["#F875AA", "#BEADFA"]}>
      <Text style={{ fontSize: 24 }}>{title}</Text>
    </LinearGradient>
  );
}
const styles = StyleSheet.create({
  button: {
    borderRadius: 10,
    width: 90,
    height: 50,
    flexDirection: "row",
    alignItems: "center",
    textAlign: "center",
    justifyContent: "center",
  },
});