import { LinearGradient } from "expo-linear-gradient";
import React, { useState } from "react";
import { View, StyleSheet, TouchableOpacity } from "react-native";
import Input from "../components/Input";
import ButtonHandler from "../components/ButtonHandler";
export default function InfoGroup() {
  return (
    <LinearGradient
      colors={["#FDCEDF", "#BEADFA"]}
      style={styles.rootContainer}
    >
      <View style={styles.inputContainer}>
        <Input title="Group name" placeholder="Enter name group" />
        <Input title="Member 1" />
        <Input title="Member 2" />
        <Input title="Member 3" />
      </View>
      <View></View>
      <View style={styles.buttonContainer}>
        <ButtonHandler style={styles.buttons} title="+" />
      </View>
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  rootContainer: {
    flex: 1,
    alignItems: "center",
  },
  inputContainer: {
    margin: 20,
    flexDirection: "column",
    // backgroundColor: "green",
    borderRadius: 10,
    alignItems: "center",
    alignSelf: "stretch",
  },
  buttonContainer: {
    width: 350,
    height: 70,
    justifyContent: "center",
    alignItems: "flex-end",
  },
  buttons: {},
});
