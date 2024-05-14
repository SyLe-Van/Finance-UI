import React from "react";
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  value,
  Alert,
  TouchableOpacity,
} from "react-native";
import axios from "axios";
import { useState, useContext, useEffect } from "react";
import { useNavigation } from "@react-navigation/native";

import { AuthContext } from "../screens/AuthContext";
export default function Display({ title, width, value, item, onPress }) {
  const { updateData, setUpdateData, id } = useContext(AuthContext);
  const [backgroundColor, setBackgroundColor] = useState(null);
  const navigation = useNavigation()
  function handlePressIn() {
    const newColor = "#BEADFA";
    setBackgroundColor(newColor);
  }
  function handlePressOut() {
    setBackgroundColor(null);
  }
  function confirmDelete() {
    Alert.alert(
      "Confirm Deletion",
      "Are you sure you want to delete this group?",
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
    try {
      await axios.delete(
        `https://finance-api-kgh1.onrender.com/api/deleteGroup/${id}/${itemId}`
      );
      console.log("Group deleted successfully");
      setUpdateData((prevData) => !prevData);
    } catch (error) {
      console.error(`Error deleting ${type.toLowerCase()}: `, error);
    }
  }
  function handleLongPress() {
    const buttons = [
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
  const calculateSpendingHandler = () {
      navigation.navigate("CalculateSpending");
  }
  return (
    <TouchableOpacity
      onPressIn={handlePressIn}
      onPressOut={handlePressOut}
      onLongPress={handleLongPress}
      onPress={calculateSpendingHandler}
      underlayColor="#BEADFA"
      style={[styles.container, { backgroundColor: backgroundColor }]}
    >
      <View style={[styles.wrapper, { width: width }]}>
        <Text style={styles.text}>{title}</Text>
        <Text style={styles.text}>{value}</Text>
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    borderRadius: 15,
    marginHorizontal: 10,
  },
  wrapper: {
    display: "flex",
    flexDirection: "row",
    height: 45,
    alignItems: "center",
    justifyContent: "center",
    margin: 7,
    backgroundColor: "#CF89A5",
    borderRadius: 10,
    marginTop: 4,
  },
  text: {
    fontSize: 16,
    fontWeight: "bold",
    marginLeft: 5,
  },
});
