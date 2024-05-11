import { LinearGradient } from "expo-linear-gradient";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
export default function ButtonHandler({ title }) {
  return (
    <TouchableOpacity style={[styles.menuItem, styles.logoutButton]}>
      <LinearGradient
        colors={["#F875AA", "#BEADFA"]}
        style={[styles.menuItem, styles.logoutButton]}
      >
        <Button title={title} color="#ffffff" />
      </LinearGradient>
    </TouchableOpacity>
  );
}
const styles = StyleSheet.create({
  logoutButton: {
    marginTop: 30,
    borderRadius: 8,
    width: 200,
    height: 70,
  },
  menuItem: {
    flexDirection: "row",
    alignItems: "center",
    padding: 15,
    textAlign: "center",
    justifyContent: "center",
  },
});
