import { LinearGradient } from "expo-linear-gradient";
import { View, Text, StyleSheet, TouchableOpacity, Button } from "react-native";
export default function ButtonHandler({ title, event }) {
  return (
    <TouchableOpacity>
      <LinearGradient style={styles.button} colors={["#F875AA", "#BEADFA"]}>
        <Button title={title} color="#ffffff" />
      </LinearGradient>
    </TouchableOpacity>
  );
}
const styles = StyleSheet.create({
  button: {
    borderRadius: 10,
    width: 80,
    height: 50,
    flexDirection: "row",
    alignItems: "center",
    textAlign: "center",
    justifyContent: "center",
  },
});
