import { View, Text, LinearGradient } from "react-native";
export default function () {
  return (
    <LinearGradient
      colors={["#FDCEDF", "#BEADFA"]}
      style={styles.rootContainer}
    >
      <Text>hi</Text>
    </LinearGradient>
  );
}
