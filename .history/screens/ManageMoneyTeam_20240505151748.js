import React from "react";
import { View, StyleSheet, TouchableOpacity, Button } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { useNavigation } from "@react-navigation/native";

export default function ManageMoneyTeam() {
  const navigation = useNavigation();
  function addGroupHandler() {
    console.log("Pressed");
  }
  return (
    <View style={styles.rootContainer}>
      <TouchableOpacity style={[styles.menuItem, styles.logoutButton]}>
        <LinearGradient
          colors={["#F875AA", "#BEADFA"]}
          style={[styles.menuItem, styles.logoutButton]}
        >
          <Button title="ADD GROUP" onPress={addGroupHandler} color="#ffffff" />
        </LinearGradient>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  rootContainer: {
    flex: 1,
    backgroundColor: "#FDCEDF",
    padding: 15,
    alignItems: "center",
  },
  menuText: {
    fontSize: 18,
    textAlign: "center",
  },
  logoutButton: {
    paddingTop: 30
    borderRadius: 8,
    width: 200,
    height: 100,
  },
  menuItem: {
    flexDirection: "row",
    alignItems: "center",
    padding: 15,
    textAlign: "center",
    justifyContent: "center",
  },
});
