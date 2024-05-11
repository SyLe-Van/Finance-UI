import { LinearGradient } from "expo-linear-gradient";
import { Text, StyleSheet, TouchableOpacity } from "react-native";

export default function ButtonHandler({ title, width, onPress }) {
  return (
    <TouchableOpacity onPress={onPress}>
      <LinearGradient
        style={[styles.button, { width: width }]}
        colors={["#F875AA", "#BEADFA"]}
      >
        <Text style={{ fontSize: 20, fontWeight: "bold" }}>{title}</Text>
      </LinearGradient>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  button: {
    borderRadius: 10,
    height: 50,
    alignItems: "center",
    justifyContent: "center",
  },
});
