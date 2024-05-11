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
      <TouchableOpacity
        onPress={addGroupHandler}
        style={[styles.menuItem, styles.logoutButton]}
      >
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
  },
  menuText: {
    fontSize: 18,
    marginLeft: 10,
    textAlign: "center",
    alignSelf: "center",
  },
  logoutButton: {
    borderRadius: 8,
    marginTop: 10,
    alignSelf: "center",
    alignItems: "center",
    justifyContent: "center",
    marginBottom: 50,
    paddingTop: 50,
  },
  menuItem: {
    flexDirection: "row",
    alignItems: "center",
    padding: 15,
    textAlign: "center",
  },
});
