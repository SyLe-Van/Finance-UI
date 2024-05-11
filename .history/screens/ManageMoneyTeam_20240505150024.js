import React from "react";
import { View, Text, StyleSheet, TouchableOpacity, Button } from "react-native";
// import LinearGradient from "react-native-linear-gradient";
import { LinearGradient } from "expo-linear-gradient";
import { useNavigation } from "@react-navigation/native";

export default function ManageMoneyTeam() {
  const navigation = useNavigation();
  function addGroupHandler() {
    console.log("Pressed");
  }
  return (
    <View style={styles.rootContainer}>
      <LinearGradient
        colors={["#F875AA", "#BEADFA"]}
        style={[styles.menuItem, styles.logoutButton]}
        onPress={addGroupHandler()}
      >
        <Button>
          <Text style={[styles.menuText, { color: "#ffffff" }]}>ADD GROUP</Text>
        </Button>
      </LinearGradient>
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
    padding: 15,
    width: 200,
    height: 50,
    marginBottom: 50,
    color: "#ffffff",
  },
});
