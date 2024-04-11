import { Text, View, StyleSheet } from "react-native";
import { useState, useEffect, useContext } from "react";
import { AuthContext } from "../screens/AuthContext";
import axios from "axios";

export default function ExpenseItem({ route }) {
  const { updateData, setUpdateData, id, setIsPremium } =
    useContext(AuthContext);
  const [expenses, setExpenses] = useState([]);
  const [income, setIncome] = useState([]);
  const [selectedtDate, setSelectedDate] = useState(new Date());
  useEffect(() => {
    // console.log(id);
    axios
      .get(`https://finance-api-kgh1.onrender.com/api/getUser/${id}`, {
        headers: {
          "Content-Type": "application/json",
        },
      })

      .then((response) => {
        console.log("premium", response.data.data.premium);
        setIsPremium(response.data.data.premium);
      })
      .catch((error) => console.log(error));

    axios
      .get(`https://finance-api-kgh1.onrender.com/api/getExpenses/${id}`, {
        headers: {
          "Content-Type": "application/json",
        },
      })
      .then((response) => {
        const reversedExpenses = response.data.reverse();
        setExpenses(reversedExpenses);
      })
      .catch((error) => {
        console.log(error);
        // hien thi o da
      });
  }, [updateData]);

  useEffect(() => {
    console.log(id);
    axios
      .get(`https://finance-api-kgh1.onrender.com/api/getIncomes/${id}`, {
        headers: {
          "Content-Type": "application/json",
        },
      })
      .then((response) => {
        const reversedIncome = response.data.reverse();
        setIncome(reversedIncome);
      })
      .catch((error) => {
        console.log(error);
      });
  }, [updateData]);

  useEffect(() => {
    if (route.params && route.params.expenses) {
      setExpenses(route.params.expenses);
    }
  }, [route.params]);

  useEffect(() => {
    setSelectedDate(new Date());
  }, []);
  // income

  const calculateTotalIncomeByCategory = (category) => {
    let totalIncome = 0;
    income.forEach((income) => {
      if (income.categoriesIncome === category) {
        const number = parseFloat(income.value || 0);
        totalIncome += number;
      }
    });
    return totalIncome;
  };
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
