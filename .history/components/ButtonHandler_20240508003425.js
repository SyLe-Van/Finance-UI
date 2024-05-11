import { LinearGradient } from "expo-linear-gradient";
import { View, Text, StyleSheet, TouchableOpacity, Button } from "react-native";
export default function ButtonHandler({ title }) {
  return (
    <TouchableOpacity style={[styles.menuItem, styles.logoutButton]}>
      <LinearGradient colors={["#F875AA", "#BEADFA"]}>
        <Button title={title} color="#ffffff" />
      </LinearGradient>
    </TouchableOpacity>
  );
}
const styles = StyleSheet.create({
  logoutButton: {
    marginTop: 30,
    borderRadius: 10,
    width: 200,
    height: 100,
  },
  menuItem: {
    marginTop: 30,
    borderRadius: 10,
    width: 200,
    height: 100,
    flexDirection: "row",
    alignItems: "center",
    padding: 15,
    textAlign: "center",
    justifyContent: "center",
  },
});
