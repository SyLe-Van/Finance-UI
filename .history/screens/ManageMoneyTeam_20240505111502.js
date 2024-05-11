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
  menuText: {
    fontSize: 18,
    marginLeft: 10,
    textAlign: "center",
    alignSelf: "center",
  },
});
