import React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";

export default function ManageMoneyTeam() {
  return (
    <View style={styles.rootContainer}>
      <TouchableOpacity
      //style={[styles.menuItem, styles.logoutButton]}
      >
        <Text style={[styles.menuText, { color: "#ffffff" }]}>LOG OUT</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  rootContainer: {
    flex: 1,
    backgroundColor: "#FDCEDF",
    padding: 15,
  },
  button: {
    width: 100,
    height: 50,
    borderRadius: 10,
    borderColor: "black",
    // backgroundColor: "#BEADFA",
    justifyContent: "center",
    alignItems: "center",
  },
});
