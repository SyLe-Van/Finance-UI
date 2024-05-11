import { LinearGradient } from "expo-linear-gradient";
import { View, Text, StyleSheet, TouchableOpacity, Button } from "react-native";
export default function Button({ title }) {
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
