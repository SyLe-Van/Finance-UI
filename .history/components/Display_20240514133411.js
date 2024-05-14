import React from "react";
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  value,
  TouchableOpacity,
} from "react-native";

export default function Display({ title, width }) {
  return (
    <View style={[styles.wrapper, { width: width }]}>
      <Text style={styles.text}>{title}</Text>
      <Text style={styles.text}>{value}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
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
