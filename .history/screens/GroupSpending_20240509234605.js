import { View, Text, StyleSheet } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
export default function GroupSpending() {
  return (
    <LinearGradient
      colors={["#FDCEDF", "#BEADFA"]}
      style={styles.rootContainer}
    >
      <View style={styles.infoContainer}>
        <Text>Hi</Text>
      </View>
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  rootContainer: {
    flex: 1,
    alignItems: "center",
  },
  infoContainer: {
    marginTop: 200,

    height: 100,
    width: 100,
    backgroundColor: "green",
  },
});
