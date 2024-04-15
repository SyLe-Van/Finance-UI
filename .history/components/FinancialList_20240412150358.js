import React from "react";
import { View, Text, StyleSheet, FlatList } from "react-native";
import FinancialItem from "./FinancialItem";
export default function FinancialList({ data, type, id }) {
  return (
    <View>
      <Text style={styles.expenseHeader}>{type}</Text>
      <FlatList
        data={data}
        keyExtractor={(item, index) => index.toString()}
        renderItem={({ item }) => (
          <View>
            <FinancialItem item={item} type={type} userId={id} />
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
});
