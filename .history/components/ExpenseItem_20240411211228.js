import React from "react";
import { View, Text, StyleSheet } from "react-native";

export default function ExpenseItem({ data, type }) {
  return (
    <View>
      <Text style={styles.expenseHeader}>{type}</Text>
      {data.length > 0 ? (
        data.map((item, index) => (
          <View key={index} style={styles.expenseRow}>
            <View style={styles.expenseCategory}>
              <Text
                style={{
                  fontWeight: "bold",
                  width: 110,
                  paddingBottom: 5,
                  fontSize: 15,
                }}
              >
                {item.expenseCategory}
              </Text>
              <Text style={{ fontSize: 10, fontSize: 13, width: 110 }}>
                {item.note}
              </Text>
            </View>
            <View style={styles.expenseDetails}>
              <Text
                style={{
                  color: "#1F8A70",
                  fontWeight: "bold",
                  fontSize: 17,
                  marginRight: -10,
                }}
              >
                {type === "Income" ? "+ " : "- "} {parseFloat(item.value || 0)}{" "}
                $
              </Text>
              <Text style={{ fontSize: 12, marginTop: 5 }}>{item.date}</Text>
            </View>
          </View>
        ))
      ) : (
        <Text>No {type.toLowerCase()}</Text>
      )}
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
    backgroundColor: "gray",
    marginLeft: 15,
    marginRight: 10,
  },
  expenseCategory: {
    flex: 1,
    // marginRight: 130,
    // justifyContent: 'space-between',
    // alignItems: 'center',
  },
});
