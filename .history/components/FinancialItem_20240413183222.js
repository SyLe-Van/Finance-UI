import React, { useState, useContext, useEffect, useRef } from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableHighlight,
  Alert,
} from "react-native";
import axios from "axios";
import { AuthContext } from "../screens/AuthContext";

export default function FinancialItem({ type, item }) {
  const { updateData, setUpdateData, id } = useContext(AuthContext);
  const [backgroundColor, setBackgroundColor] = useState(null);
  const [userId, setUserId] = useState(null);
  const [expenseId, setExpenseId] = useState(null);
  //   const [expenses, setExpenses] = useState([]);
  //   const [expenseData, setExpenseData] = useState(null);
  async function handleDelete() {
    // Send DELETE request to API
    // axios
    //   .delete(
    //     `https://finance-api-kgh1.onrender.com/api/deleteExpenses/${userId}/${item.expensesId}`
    //   )
    //   .then((response) => {
    //     console.log("Expense deleted successfully");
    //   })
    //   .catch((error) => {
    //     console.error("Error deleting expense:", error);
    //   });
  }
  function handlePressIn() {
    const newColor = type === "Income" ? "#FDCEDF" : "#BEADFA";
    setBackgroundColor(newColor);
  }

  function handlePressOut() {
    setBackgroundColor(null);
  }

  function handleLongPress() {
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
          handleDelete();
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

  useEffect(() => {
    //getUserId
    axios
      .get(`https://finance-api-kgh1.onrender.com/api/getUser/${id}`, {
        headers: {
          "Content-Type": "application/json",
        },
      })
      .then((response) => {
        const userId = response.data.data._id;
        console.log("User ID:", userId);
        setUserId(userId);
      })
      .catch((error) => console.log(error));
  }, [id]);
  useEffect(() => {
    axios
      .get(
        `https://finance-api-kgh1.onrender.com/api/getExpense/${userId}/${expenseId}`,
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      )
      .then((response) => {
        const expenseId = response.data._id;
        console.log("Expense ID:", expenseId);
        setExpenseId(expenseId);
      })
      .catch((error) => {
        console.error("Error fetching expense:", error);
      });
  }, [userId, expenseId]);

  return (
    <TouchableHighlight
      onPressIn={handlePressIn}
      onPressOut={handlePressOut}
      onLongPress={handleLongPress}
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
