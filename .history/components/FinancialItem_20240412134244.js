import React from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableHighlight,
  Alert,
} from "react-native";
import { useState } from "react";
import { useNavigation } from "@react-navigation/native";
import { LongPressGestureHandler, State } from "react-native-gesture-handler";

export default function FinancialItem({ type, item }) {
  const [backgroundColor, setBackgroundColor] = useState(null);

  const navigation = useNavigation();
  function expensePressHandler() {}

  return (
    <LongPressGestureHandler
      onHandlerStateChange={({ nativeEvent }) => {
        if (nativeEvent.state === State.ACTIVE) {
          setBackgroundColor(type === "Income" ? "#FDCEDF" : "#BEADFA");
          Alert.alert(
            "Options",
            "Choose an action",
            [
              {
                text: "Update",
                onPress: () => {
                  console.log("Update Pressed");
                },
              },
              {
                text: "Delete",
                onPress: () => {
                  // Handle delete action
                },
                style: "destructive",
              },
              {
                text: "Cancel",
                onPress: () => console.log("Cancel Pressed"),
                style: "cancel",
              },
            ],
            { cancelable: true }
          );
        }
      }}
      minDurationMs={800}
    >
      {/* <TouchableHighlight
        onPress={expensePressHandler}
        underlayColor={type === "Income" ? "#FDCEDF" : "#BEADFA"} // Change the color according to the type
        style={styles.container}
      > */}
      <View style={styles.expenseRow}>
        <View style={styles.expenseCategory}>
          <Text
            style={{
              fontWeight: "bold",
              width: 110,
              paddingBottom: 5,
              fontSize: 15,
            }}
          >
            {type === "Income"
              ? item.categoriesIncome
              : item.categoriesExpenses}
          </Text>
          <Text style={{ fontSize: 10, fontSize: 13, width: 110 }}>
            {item.note}
          </Text>
        </View>
        <View style={styles.expenseDetails}>
          <Text
            style={{
              color: type === "Income" ? "#1F8A70" : "#D80032",
              fontWeight: "bold",
              fontSize: 17,
            }}
          >
            {type === "Income" ? "+ " : "- "} {parseFloat(item.value || 0)} $
          </Text>
          <Text sstyle={{ fontSize: 12, marginTop: 5 }}>{item.date}</Text>
        </View>
      </View>
      {/* </TouchableHighlight> */}
    </LongPressGestureHandler>
  );
}

const styles = StyleSheet.create({
  container: {
    borderRadius: 15,
    marginHorizontal: 10,
  },
  expenseCategory: {
    flex: 1,
  },
  expenseDetails: {
    flex: 1,
    alignItems: "flex-end",
  },
  pressed: {
    opacity: 0.5,
  },
  expenseRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 5,
    marginTop: 5,
    borderRadius: 15,
    marginLeft: 15,
    marginRight: 10,
  },
});