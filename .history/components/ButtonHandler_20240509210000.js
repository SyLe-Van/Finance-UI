import { width } from "deprecated-react-native-prop-types/DeprecatedImagePropType";
import { LinearGradient } from "expo-linear-gradient";
import { Text, StyleSheet } from "react-native";
export default function ButtonHandler({ title, width }) {
  return (
    <LinearGradient
      style={[styles.button, { width: width }]}
      colors={["#F875AA", "#BEADFA"]}
    >
      <Text style={{ fontSize: 20, fontWeight: "bold" }}>{title}</Text>
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
});
