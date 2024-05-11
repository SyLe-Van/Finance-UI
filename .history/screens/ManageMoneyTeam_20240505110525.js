import React from "react";
import { View, Text, StyleSheet, Button } from "react-native";

export default function ManageMoneyTeam() {
  return (
    <View style={styles.rootContainer}>
      <Button title="Add group" onPress={() => {}} />
    </View>
  );
}

const styles = StyleSheet.create({
  rootContainer: {
    flex: 1,
    backgroundColor: "#FDCEDF",
    padding: 15,
  },
});
