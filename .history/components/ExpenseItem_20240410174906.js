import { Text, View, StyleSheet } from "react-native-paper";
export default function ExpenseList() {
  return (
    <View key={index} style={styles.expenseRow}>
      <View style={styles.expenseCategory}>
        <Text
          style={{
            fontWeight: "bold",
            // backgroundColor: "black",
            width: 110,
            paddingBottom: 5,
            fontSize: 15,
          }}
        >
          {income.categoriesIncome}
        </Text>
        <Text style={{ fontSize: 10, fontSize: 13, width: 110 }}>
          {income.note}
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
          + {parseFloat(income.value || 0)} $
        </Text>
        <Text style={{ fontSize: 12, marginTop: 5 }}>{income.date}</Text>
      </View>
      {index < income.length - 1 && <View style={styles.divider} />}
    </View>
  );
}
const styles = StyleSheet.create({
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
  expenseDetails: {
    flex: 1,
    // flexDirection: 'column',
    marginLeft: 170,
  },
  divider: {
    height: 1,
    backgroundColor: "#ccc",
    marginVertical: 5,
  },
});
