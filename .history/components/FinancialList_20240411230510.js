import React from "react";
import { View, Text, StyleSheet, FlatList } from "react-native";
import FinancialItem from "./FinancialItem";
export default function FinancialList({ data, type }) {
  return (
    <View>
      <Text style={styles.expenseHeader}>{type}</Text>
      <FlatList
        data={data}
        keyExtractor={(item, index) => index.toString()}
        renderItem={({ item }) => (
          <View>
            <FinancialItem item={item} type={type} />
          </View>
        )}
        ListEmptyComponent={() => (
          <Text style={{ textAlign: "center" }}>No {type.toLowerCase()}</Text>
        )}
      />
    </View>
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
});
