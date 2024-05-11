import React from "react";
import { View, Text, StyleSheet } from "react-native";
export default function ManageMoneyTeam() {
  return (
    <View style={styles.rootContainer}> 
      <Text>Enter your Money</Text>
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