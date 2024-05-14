import React from "react";
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  value,
  TouchableOpacity,
} from "react-native";
import { useState } from "react";

export default function Display({ title, width, value }) {
  const [backgroundColor, setBackgroundColor] = useState(null);
  function handlePressIn() {
    const newColor = "#BEADFA";
    setBackgroundColor(newColor);
  }
  function handlePressOut() {
    setBackgroundColor(null);
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
  return (
    <TouchableOpacity
      onPressIn={handlePressIn}
      onPressOut={handlePressOut}
      onLongPress={handleLongPress}
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
