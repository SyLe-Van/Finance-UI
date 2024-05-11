import React from "react";
import { View, Text, StyleSheet } from "react-native";

export default function InformationTeam() {
  return (
    <View style={styles.container}>
      <Text>Information Team Screen</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
});
