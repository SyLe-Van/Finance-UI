import React from "react";
import { View, Text, StyleSheet } from "react-native";

export default function FinancialItem({ type, item }) {
  return (
    <View style={styles.expenseCategory}>
      <View style={styles.expenseCategory}>
        <Text
          style={{
            fontWeight: "bold",
            width: 110,
            paddingBottom: 5,
            fontSize: 15,
          }}
        >
          {type === "Income" ? item.categoriesIncome : item.categoriesExpenses}
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
            marginRight: -10,
          }}
        >
          {type === "Income" ? "+ " : "- "} {parseFloat(item.value || 0)} $
        </Text>
        <Text sstyle={{ fontSize: 12, marginTop: 5 }}>{item.date}</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  expenseCategory: {
    flex: 1,
  },
  expenseDetails: {
    flex: 1,
    alignItems: "flex-end",
  },
});
