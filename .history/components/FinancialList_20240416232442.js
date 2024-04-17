import React from "react";
import { View, Text, StyleSheet, FlatList } from "react-native";
import FinancialItem from "./FinancialItem";
import { useNavigation } from "@react-navigation/native";

export default function FinancialList({ data, type, userId }) {
  const navigation = useNavigation();

  return (
    <View>
      <Text style={styles.expenseHeader}>{type}</Text>
      <FlatList
        data={data}
        style={styles.list}
        keyExtractor={(item, index) => index.toString()}
        renderItem={({ item }) => (
          <View>
            <FinancialItem
              item={item}
              type={type}
              userId={userId}
              navigation={navigation}
            />
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
    textAlign: "center",
    marginTop: -13,
  },
});
