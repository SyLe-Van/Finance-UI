import { View, Text, StyleSheet } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import SpendingInfo from "../components/SpendingInfo";
import ButtonHandler from "../components/ButtonHandler";
export default function GroupSpending() {
  return (
    <LinearGradient
      colors={["#FDCEDF", "#BEADFA"]}
      style={styles.rootContainer}
    >
      <View style={styles.spendingInfoContainer}>
        <SpendingInfo style={styles.spendingInfo} />
        <SpendingInfo style={styles.spendingInfo} />
      </View>
      <View style={styles.buttonContainer}>
        <ButtonHandler title="+" width={80} />
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
  },
  spendingInfoContainer: {},
  spendingInfo: {},
  spacing: {},
});
