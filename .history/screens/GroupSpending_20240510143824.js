import React, { useState, useEffect, useRef } from "react";
import { View, Text, StyleSheet, FlatList } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import SpendingInfo from "../components/SpendingInfo";
import ButtonHandler from "../components/ButtonHandler";

export default function GroupSpending() {
  const [spendingList, setSpendingList] = useState([]);
  const [numSpending, setNumSpending] = useState(2);
  const flatListRef = useRef(null);

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

  const scrollToNewestItem = () => {
    setTimeout(() => {
      if (flatListRef.current) {
        flatListRef.current.scrollToEnd({ animated: true });
      }
    }, 100); // Đợi 100 milliseconds trước khi cuộn
  };

  return (
    <LinearGradient
      colors={["#FDCEDF", "#BEADFA"]}
      style={styles.rootContainer}
    >
      <FlatList
        ref={flatListRef}
        data={spendingList}
        renderItem={renderSpendingInfo}
        keyExtractor={(item) => item.id.toString()}
        contentContainerStyle={styles.spendingInfoContainer}
      />
      <View style={styles.buttonContainer}>
        <ButtonHandler
          title="+"
          width={80}
          onPress={() => {
            addNewSpending();
            scrollToNewestItem();
          }}
        />
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
    justifyContent: "center",
    alignItems: "flex-end",
    marginBottom: 30,
  },
  spendingInfoContainer: {
    flexGrow: 1,
    marginTop: 20,
    alignSelf: "stretch",
  },
  splitMoneyButton: {
    marginTop: 50,
    marginBottom: 50,
  },
});
