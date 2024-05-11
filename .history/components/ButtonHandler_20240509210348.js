import { LinearGradient } from "expo-linear-gradient";
import { Text, StyleSheet, TouchableOpacity } from "react-native";
export default function ButtonHandler({ title, width }) {
  return (
    <TouchableOpacity style={[styles.button, { width: width }]}>
      <LinearGradient colors={["#F875AA", "#BEADFA"]}>
        <Text style={{ fontSize: 20, fontWeight: "bold" }}>{title}</Text>
      </LinearGradient>
    </TouchableOpacity>
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