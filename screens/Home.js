import {
  View,
  Text,
  StyleSheet,
  SafeAreaView,
  FlatList,
  ScrollView,
} from "react-native";
import React, { useState, useEffect, useContext } from "react";
import { AuthContext } from "./AuthContext";
import axios from "axios";
import { LinearGradient } from "expo-linear-gradient";
import FinancialList from "../components/FinancialList";
const Home = ({ route }) => {
  const { updateData, setUpdateData, id, setIsPremium } =
    useContext(AuthContext);
  const [selectedtDate, setSelectedDate] = useState(new Date());
  const [expenses, setExpenses] = useState([]);
  const [income, setIncome] = useState([]);
  useEffect(() => {
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

  const totalSalary = calculateTotalIncomeByCategory("Salary");
  const totalBonus = calculateTotalIncomeByCategory("Bonus");
  const totalAllowance = calculateTotalIncomeByCategory("Allowance");
  const totalInvestment = calculateTotalIncomeByCategory("Investment");

  const calculateTotalIncome = () => {
    let totalIncome = 0;
    income.forEach((income) => {
      const numberIncome = parseFloat(income.value || 0);
      totalIncome += numberIncome;
    });
    return totalIncome;
  };
  useEffect(() => {
    if (route.params && route.params.income) {
      setIncome(route.params.income);
    }
  }, [route.params]);

  //Tinh tong tien tung expense
  const calculateTotalExpenseByCategory = (category) => {
    let totalExpense = 0;
    expenses.forEach((expense) => {
      if (expense.categoriesExpenses === category) {
        const number = parseFloat(expense.value || 0);
        totalExpense += number;
      }
    });
    return totalExpense;
  };

  const totalFoodExpense = calculateTotalExpenseByCategory("Food");
  const totalRentExpense = calculateTotalExpenseByCategory("Rent");
  const totalShoppingExpense = calculateTotalExpenseByCategory("Shopping");
  const totalEntertainmentExpense =
    calculateTotalExpenseByCategory("Entertainment");
  const totalTransportExpense = calculateTotalExpenseByCategory("Transport");

  const calculateTotalExpense = () => {
    let totalExpense = 0;
    expenses.forEach((expense) => {
      const number = parseFloat(expense.value || 0);
      totalExpense += number;
    });
    return totalExpense;
  };
  return (
    <SafeAreaView style={styles.container}>
      <LinearGradient colors={["#FDCEDF", "#BEADFA"]} style={styles.header}>
        <Text
          style={[
            styles.titleStyle,
            {
              marginBottom: 10,
              fontWeight: "bold",
              color: "#674188",
              fontSize: 23,
            },
          ]}
        >
          {" "}
          Statistic Results
        </Text>
        <View style={styles.textheader}>
          <View style={styles.rowContainer}>
            <Text style={styles.label}>Income:</Text>
            <Text style={styles.value}>{calculateTotalIncome()} $</Text>
          </View>

          <View style={styles.rowContainer}>
            <Text style={styles.label}>Expenses:</Text>
            <Text style={styles.value}>{calculateTotalExpense()} $</Text>
          </View>

          <View style={styles.rowContainer}>
            <Text style={styles.label}>Residual amount:</Text>
            <Text style={styles.value}>
              {calculateTotalIncome() - calculateTotalExpense()} $
            </Text>
          </View>
        </View>
      </LinearGradient>
      <LinearGradient colors={["#BEADFA", "#FDCEDF"]} style={styles.body}>
        <View style={styles.incomeDetail}>
          <FinancialList data={income} type="Incomes" />
        </View>
        <View style={styles.expenseDetail}>
          <FinancialList data={expenses} type="Expenses" />
        </View>
      </LinearGradient>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FDCEDF",
    padding: 15,
    borderTopLeftRadius: 50,
    borderTopRightRadius: 50,
  },
  header: {
    borderTopLeftRadius: 50,
    borderTopRightRadius: 50,
    paddingHorizontal: 20,
    paddingVertical: 20,
    paddingBottom: 20,
    maxHeight: 500,
    paddingTop: 40,
  },
  textheader: {
    backgroundColor: "#ffffff",
    borderRadius: 15,
    paddingHorizontal: 20,
    paddingVertical: 20,
  },
  titleStyle: {
    textAlign: "center",
    fontSize: 20,
    marginBottom: 20,
  },
  horizontalLine: {
    height: 1,
    backgroundColor: "#ccc",
    marginVertical: 10,
  },
  body: {
    borderBottomLeftRadius: 10,
    borderBottomRightRadius: 10,
    // borderRadius: 20,
  },
  rowContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 10,
    marginLeft: 6,
  },
  label: {
    fontWeight: "bold",
    textAlign: "center",
    marginLeft: 15,
    fontSize: 16,
  },
  value: {
    color: "green",
    marginRight: 15,
    fontSize: 16,
  },
  expenseDetail: {
    margin: 18,
    marginTop: 3,
    backgroundColor: "#ffffff",
    height: 400,
    padding: 20,
    borderRadius: 20,
    maxHeight: 300,
  },
  incomeDetail: {
    margin: 18,
    backgroundColor: "#ffffff",
    padding: 20,
    borderRadius: 20,
    maxHeight: 200,
    marginTop: 3,
  },
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
  },
  expenseDetails: {
    flex: 1,

    marginLeft: 170,
  },
  divider: {
    height: 1,
    backgroundColor: "#ccc",
    marginVertical: 5,
  },
  chartContainer: {
    marginTop: 10,
    backgroundColor: "white",
    borderRadius: 10,
    width: "100%",
    alignSelf: "center",
  },
});
export default Home;
