import React, { useState, useEffect } from "react";
import { View, Text, StyleSheet, FlatList } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import SpendingInfo from "../components/SpendingInfo";
import ButtonHandler from "../components/ButtonHandler";

export default function GroupSpending() {
  const [spendingList, setSpendingList] = useState([]);
  const [numSpending, setNumSpending] = useState(2);

  useEffect(() => {
    const initialSpendingList = Array.from(
      { length: numSpending },
      (_, index) => ({
        id: index,
      })
    );
    setSpendingList(initialSpendingList);
  }, [numSpending]);

  const addNewSpending = () => {
    setNumSpending(numSpending + 1);
  };

  const renderSpendingInfo = ({ item }) => <SpendingInfo key={item.id} />;

  return (
    <LinearGradient
      colors={["#FDCEDF", "#BEADFA"]}
      style={styles.rootContainer}
    >
      <FlatList
        data={spendingList}
        renderItem={renderSpendingInfo}
        keyExtractor={(item) => item.id.toString()}
        contentContainerStyle={styles.spendingInfoContainer}
      />
      <View style={styles.buttonContainer}>
        <ButtonHandler title="+" width={80} onPress={addNewSpending} />
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
    marginTop: 10,
    justifyContent: "center",
    alignItems: "flex-end",
  },
  spendingInfoContainer: {
    flexGrow: 1,
    marginTop: 30,
  },
  splitMoneyButton: {
    marginTop: 50,
  },
});
