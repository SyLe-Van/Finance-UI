import { View, Text, StyleSheet } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import SpendingInfo from "../components/SpendingInfo";

export default function GroupSpending() {
  return (
    <LinearGradient
      colors={["#FDCEDF", "#BEADFA"]}
      style={styles.rootContainer}
    >
      <View style={styles.spendingInfoContainer}>
        <SpendingInfo style={styles.spendingInfo} />
        <View style={styles.spacing} />
        <SpendingInfo style={styles.spendingInfo} />
      </View>
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  rootContainer: {
    flex: 1,
    alignItems: "center",
  },
  buttonContainer: {
    width: 350,
    height: 70,
    marginTop: 20,
    justifyContent: "center",
    alignItems: "flex-end",
    backgroundColor: "green",
  },
  spendingInfoContainer: {
    display: "flex",
    flexDirection: "column",
  },
  spendingInfo: {
    marginTop: 10,
  },
  spacing: {
    height: -10,
  },
});
