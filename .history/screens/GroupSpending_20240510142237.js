import { View, Text, StyleSheet } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import SpendingInfo from "../components/SpendingInfo";
import ButtonHandler from "../components/ButtonHandler";
import { useState } from "react";
export default function GroupSpending() {
  const [spendingList, setSpendingList] = useState([]);

  const addNewSpending = () => {
    setSpendingList([...spendingList, { id: spendingList.length }]);
  };
  const renderSpendingInfo = ({ item }) => <SpendingInfo key={item.id} />;

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
    marginTop: 30,
    justifyContent: "center",
    alignItems: "flex-end",
  },

  spendingInfoContainer: {
    marginTop: 30,
    height: 450,
    backgroundColor: "green",
  },
  spendingInfo: {},
  spacing: {},
  splitMoneyButton: {
    marginTop: 50,
  },
});