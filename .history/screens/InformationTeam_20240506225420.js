import { LinearGradient } from "expo-linear-gradient";
import React from "react";
import { View, Text, StyleSheet, TouchableOpacity, Button } from "react-native";
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
        <TextInput
          placeholder="Nunber of group"
          style={[styles.TextInputContainer, { height: 40 }]}
        />
        <View style={styles.inforContainer}>
          <TextInput
            placeholder="Member A"
            style={[
              styles.TextInputContainer,
              { height: 40, width: 150, marginRight: 30 },
            ]}
          />
          <TextInput
            placeholder="Money"
            style={[styles.TextInputContainer, { height: 40, width: 100 }]}
          />
        </View>
        <View style={styles.inforContainer}>
          <TextInput
            placeholder="Member B"
            style={[
              styles.TextInputContainer,
              { height: 40, width: 150, marginRight: 30 },
            ]}
          />
          <TextInput
            placeholder="Money"
            style={[styles.TextInputContainer, { height: 40, width: 100 }]}
          />
        </View>
        <View style={styles.inforContainer}>
          <TextInput
            placeholder="Member C"
            style={[
              styles.TextInputContainer,
              { height: 40, width: 150, marginRight: 30 },
            ]}
          />
          <TextInput
            placeholder="Money"
            style={[styles.TextInputContainer, { height: 40, width: 100 }]}
          />
        </View>
      </View>
      <View>
        <TouchableOpacity style={[styles.menuItem, styles.logoutButton]}>
          <LinearGradient
            colors={["#F875AA", "#BEADFA"]}
            style={[styles.menuItem, styles.logoutButton]}
          >
            <Button title="Tinh tien" color="#ffffff" />
          </LinearGradient>
        </TouchableOpacity>
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
    marginTop: 20,
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
    marginTop: 15,
  },
  inforContainer: {
    display: "flex",
    flexDirection: "row",
  },
  logoutButton: {
    marginTop: 30,
    borderRadius: 8,
    width: 200,
    height: 70,
  },
  menuItem: {
    flexDirection: "row",
    alignItems: "center",
    padding: 15,
    textAlign: "center",
    justifyContent: "center",
  },
});
