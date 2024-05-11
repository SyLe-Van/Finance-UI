import React from "react";
import { View, Text, StyleSheet, Button } from "react-native";

export default function ManageMoneyTeam() {
  return (
    <View style={styles.rootContainer}>
      <Button title="Add group" onPress={() => {}} style={styles.button} />
    </View>
  );
}

const styles = StyleSheet.create({
  rootContainer: {
    flex: 1,
    backgroundColor: "#FDCEDF",
    padding: 15,
    // justifyContent: "center",
    // alignItems: "center",
  },
  button: {
    width: 100,
    height: 50,
    borderRadius: 10,
    paddingTop: 200,
    backgroundColor: "#BEADFA",
    justifyContent: "center",
    alignItems: "center",
  },
});
