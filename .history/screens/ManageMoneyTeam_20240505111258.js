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
  },
  button: {
    width: 100,
    height: 50,
    borderRadius: 10,
    borderColor: "black",
    backgroundColor: "#BEADFA",
    justifyContent: "center",
    alignItems: "center",
  },
});
