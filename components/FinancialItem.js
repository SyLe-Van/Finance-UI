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
import { useNavigation } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

export default function FinancialItem({ type, item }) {
  const { updateData, setUpdateData, id } = useContext(AuthContext);
  const [backgroundColor, setBackgroundColor] = useState(null);
  const [userId, setUserId] = useState(null);
  const [expenseId, setExpenseId] = useState("");
  const Stack = createStackNavigator();
  const navigation = useNavigation();

  function handlePressIn() {
    const newColor = type === "Incomes" ? "#FDCEDF" : "#BEADFA";
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
          handleUpdateItem(type);
        },
      },
      {
        text: "Delete",
        onPress: () => {
          confirmDelete();
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
        setUserId(userId);
      })
      .catch((error) => console.log(error));
  }, [id]);

  //Confirm delete function
  function confirmDelete() {
    Alert.alert(
      "Confirm Deletion",
      "Are you sure you want to delete this item?",
      [
        {
          text: "Cancel",
          style: "cancel",
        },
        {
          text: "OK",
          onPress: () => {
            handleDeleteItem(item._id);
          },
          style: "destructive",
        },
      ],
      { cancelable: true }
    );
  }
  async function handleDeleteItem(itemId) {
    // get Id item
    const endpointId = type === "Incomes" ? "getIncome" : "getExpense";
    console.log("endpointId", endpointId);
    console.log("ItemId", itemId);
    try {
      const responseData = await axios.get(
        `https://finance-api-kgh1.onrender.com/api/${endpointId}/${id}/${itemId}`,
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      const ItemId = responseData.data._id;
      // delete item
      const endpointDelete =
        type === "Incomes" ? "deleteIncome" : "deleteExpenses";

      await axios.delete(
        `https://finance-api-kgh1.onrender.com/api/${endpointDelete}/${id}/${ItemId}`
      );
      console.log(`${type} deleted successfully`);
      setUpdateData((prevData) => !prevData);
    } catch (error) {
      console.error(`Error deleting ${type.toLowerCase()}: `, error);
    }
  }
  //handleUpdateItem
  async function handleUpdateItem(type) {
    if (type === "Incomes") {
      navigation.navigate("UpdateIncome", { itemId: item._id });
    } else {
      navigation.navigate("UpdateExpenses", { itemId: item._id });
    }
  }
  return (
    <TouchableHighlight
      onPressIn={handlePressIn}
      onPressOut={handlePressOut}
      onLongPress={handleLongPress}
      underlayColor={type === "Incomes" ? "#FDCEDF" : "#BEADFA"}
      style={[styles.container, { backgroundColor: backgroundColor }]}
    >
      <View style={styles.expenseRow}>
        <View style={styles.expenseCategory}>
          <Text
            style={{
              fontWeight: "bold",
              width: 120,
              paddingBottom: 5,
              paddingTop: 2,
              fontSize: 16,
            }}
          >
            {type === "Incomes"
              ? item.categoriesIncome
              : item.categoriesExpenses}
          </Text>
          <Text
            style={{ fontSize: 10, fontSize: 13, width: 110, marginBottom: 3 }}
          >
            {item.note}
          </Text>
        </View>
        <View style={styles.expenseDetails}>
          <Text
            style={{
              color: type === "Incomes" ? "#1F8A70" : "#D80032",
              fontWeight: "bold",
              fontSize: 17,
            }}
          >
            {type === "Incomes" ? "+ " : "- "} {parseFloat(item.value || 0)} $
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
    marginBottom: 2,
    borderRadius: 15,
    marginLeft: 15,
    marginRight: 10,
  },
});
