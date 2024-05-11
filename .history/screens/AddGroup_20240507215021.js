import React from "react";
import { View, StyleSheet, TouchableOpacity, Button } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { useNavigation } from "@react-navigation/native";

export default function AddGroup() {
  const navigation = useNavigation();
  function addGroupHandler() {
    navigation.navigate("AddGroup");
  }
  return (
    <View style={styles.rootContainer}>
      <TouchableOpacity style={[styles.menuItem, styles.logoutButton]}>
        <LinearGradient
          colors={["#F875AA", "#BEADFA"]}
          style={[styles.menuItem, styles.logoutButton]}
        >
          <Button title="+" onPress={addGroupHandler} color="#ffffff" />
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
    marginTop: 30,
    borderRadius: 30,
    width: 70,
    height: 70,
  },
  menuItem: {
    flexDirection: "row",
    alignItems: "center",
    padding: 15,
    textAlign: "center",
    justifyContent: "center",
  },
});
