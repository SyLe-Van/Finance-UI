import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableHighlight,
  Alert,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import { LongPressGestureHandler, State } from "react-native-gesture-handler";

export default function FinancialItem({ type, item }) {
  const [backgroundColor, setBackgroundColor] = useState(null);
  const navigation = useNavigation();

  function handleLongPressIn() {
    const newColor = type === "Income" ? "#FDCEDF" : "#BEADFA";
    setBackgroundColor(newColor);
  }

  function handleLongPressOut() {
    setBackgroundColor(null);
  }

  function handleExpensePress() {
    // Handle regular press here if needed
  }

  function showOptions() {
    const buttons = [
      {
        text: "Update",
        onPress: () => {
          console.log("Update Pressed");
        },
      },
      {
        text: "Delete",
        onPress: () => {
          console.log("Delete Pressed");
        },
        style: "destructive",
      },
      {
        text: "Cancel",
        onPress: () => console.log("Cancel Pressed"),
        style: "cancel",
      },
    ];

    Alert.alert("Options", "Choose an action", buttons, { cancelable: true });
  }

  function handleLongPressStateChange({ nativeEvent }) {
    if (nativeEvent.state === State.ACTIVE) {
      handleLongPressIn();
      showOptions();
    } else {
      handleLongPressOut();
    }
  }

  return (
    <LongPressGestureHandler
      onHandlerStateChange={handleLongPressStateChange}
      minDurationMs={800}
    >
      <TouchableHighlight
        onPress={handleExpensePress}
        underlayColor={type === "Income" ? "#FDCEDF" : "#BEADFA"}
        style={[styles.container, { backgroundColor: backgroundColor }]}
      >
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
            <Text style={{ fontSize: 12, marginTop: 5 }}>{item.date}</Text>
          </View>
        </View>
      </TouchableHighlight>
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