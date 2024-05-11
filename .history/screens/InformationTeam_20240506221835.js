import { LinearGradient } from "expo-linear-gradient";
import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { TextInput } from "react-native-gesture-handler";

export default function InformationTeam() {
  return (
    <LinearGradient
      colors={["#FDCEDF", "#BEADFA"]}
      style={styles.rootContainer}
    >
      <View style={styles.inputContainer}>
        <TextInput
          placeholder="Name of group"
          style={[styles.TextInputContainer, { height: 40 }]}
        />
        <View>
          <TextInput placeholder="Member A" />
          <TextInput placeholder="Money" />
        </View>
      </View>
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  rootContainer: {
    flex: 1,
    alignItems: "center",

    // justifyContent: "center",
  },
  inputContainer: {
    marginTop: 30,
    flexDirection: "column",
    backgroundColor: "#ffffff",
    // backgroundColor: "black",
    borderRadius: 10,
    width: 370,
    height: 300,

    alignItems: "center",
    // justifyContent: "space-around",
  },
  TextInputContainer: {
    borderWidth: 1,
    borderColor: "#A5A5A5",
    textAlign: "center",
    fontSize: 18,
    borderRadius: 10,
    width: 220,
    height: 50,
    marginTop: 20,
  },
});
