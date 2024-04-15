import React from "react";
import { View, Text, StyleSheet, FlatList } from "react-native";

export default function FinancialList({ data, type }) {
  return (
    <FlatList
      data={data}
      keyExtractor={(item, index) => index.toString()}
      ListHeaderComponent={<Text style={styles.expenseHeader}>{type}</Text>}
      renderItem={({ item }) => (
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
                marginRight: -10,
              }}
            >
              {type === "Income" ? "+ " : "- "} {parseFloat(item.value || 0)} $
            </Text>
            <Text style={{ fontSize: 12, marginTop: 5 }}>{item.date}</Text>
          </View>
        </View>
      )}
      ListEmptyComponent={() => (
        <Text style={{ textAlign: "center" }}>No {type.toLowerCase()}</Text>
      )}
      contentContainerStyle={{ padding: 15 }} // Optional: add padding to the list
    />
  );
}

const styles = StyleSheet.create({
  expenseHeader: {
    fontWeight: "bold",
    fontSize: 20,
    marginBottom: 10,
    textAlign: "center",
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
  expenseCategory: {
    flex: 1,
  },
  expenseDetails: {
    flex: 1,
  },
});
