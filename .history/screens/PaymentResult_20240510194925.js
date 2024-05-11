import { View, Text } from "react-native";
import { LinearGradient } from "expo-linear-gradient";

export default function Result() {
  return (
    <LinearGradient
      colors={["#FDCEDF", "#BEADFA"]}
      style={styles.rootContainer}
    >
      <Text>This is result screen</Text>
    </LinearGradient>
  );
}
