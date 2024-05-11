import { View, Text } from "react-native";
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
