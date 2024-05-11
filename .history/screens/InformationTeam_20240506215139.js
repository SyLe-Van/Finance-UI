import { LinearGradient } from "expo-linear-gradient";
import React from "react";
import { View, Text, StyleSheet } from "react-native";

export default function InformationTeam() {
  return (
    <LinearGradient colors={["#FDCEDF", "#BEADFA"]} style={styles.container}>
      <Text>This is information team</Text>
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
});
