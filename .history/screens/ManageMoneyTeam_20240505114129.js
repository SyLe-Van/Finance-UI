import React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
// import LinearGradient from "react-native-linear-gradient";
import { LinearGradient } from "expo-linear-gradient";
export default function ManageMoneyTeam() {
  return (
    <View style={styles.rootContainer}>
      <LinearGradient
        colors={["#F875AA", "#BEADFA"]}
        style={[styles.menuItem, styles.logoutButton]}
      >
        <TouchableOpacity
        // onPress={handleLogout}
        >
          <Text style={[styles.menuText, { color: "#ffffff" }]}>ADD GROUP</Text>
        </TouchableOpacity>
      </LinearGradient>
    </View>
  );
}

const styles = StyleSheet.create({
  rootContainer: {
    flex: 1,
    backgroundColor: "FFD8D8",
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
    padding: 15,
    width: 200,
    height: 50,
    marginBottom: 50,
    color: "#ffffff",
  },
});
