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
        <SpendingInfo />
        <SpendingInfo />
        <SpendingInfo />
      </View>
      <View style={styles.buttonContainer}>
        <ButtonHandler title="+" width={80} />
      </View>
      <View style={styles.splitMoneyButton}>
        <ButtonHandler title="Split the money" width={250} />
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

  spendingInfoContainer: {
    marginTop: 30,
    height: 450,
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "space-between",
    backgroundColor: "green",
  },
  spendingInfo: {},
  spacing: {},
  splitMoneyButton: {
    marginTop: 100,
  },
});
