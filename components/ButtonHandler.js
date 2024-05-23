import { LinearGradient } from "expo-linear-gradient";
import { Text, StyleSheet, TouchableOpacity } from "react-native";

export default function ButtonHandler({ title, width, onPress, color }) {
  return (
    <TouchableOpacity onPress={onPress}>
      <LinearGradient
        style={[styles.button, { width: width, color: color }]}
        colors={["#ffffff", "#ffffff"]}
      >
        <Text style={{ fontSize: 17, fontWeight: "bold", color: "purple" }}>
          {title}
        </Text>
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
