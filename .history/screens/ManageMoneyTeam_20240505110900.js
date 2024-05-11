import React from "react";
import { View, Text, StyleSheet, Button } from "react-native";

export default function ManageMoneyTeam() {
  return (
    <View style={styles.rootContainer}>
      <Button style={styles.button} title="Add group" onPress={() => {}} />
    </View>
  );
}

const styles = StyleSheet.create({
  rootContainer: {
    flex: 1,
    // backgroundColor: "#FDCEDF",
    padding: 15,
  },
  button: {
    backgroundColor: "#BEADFA",
    paddingTop: 50,
    height: 50,
    width: 100,
  },
});
