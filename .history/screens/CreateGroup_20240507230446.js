import { LinearGradient } from "expo-linear-gradient";
import React, { useState } from "react";
import { View, Text, StyleSheet, TouchableOpacity, Button } from "react-native";
import { TextInput } from "react-native-gesture-handler";

export default function InfoGroup() {
  const [memberName, setMemberName] = useState([]);
  const [money, setMoney] = useState([]);
  return (
    <LinearGradient
      colors={["#FDCEDF", "#BEADFA"]}
      style={styles.rootContainer}
    >
      <View style={styles.inputContainer}>
        <View>
          <TextInput placeholder="Enter" />
          <TextInput placeholder="Enter" />
          <TextInput placeholder="Enter" />
        </View>
      </View>
      {/* <View>
        <TouchableOpacity style={[styles.menuItem, styles.logoutButton]}>
          <LinearGradient
            colors={["#F875AA", "#BEADFA"]}
            style={[styles.menuItem, styles.logoutButton]}
          >
            <Button title="Tinh tien" color="#ffffff" />
          </LinearGradient>
        </TouchableOpacity>
      </View> */}
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
    backgroundColor: "#ffffff",
    borderRadius: 10,
    alignItems: "center",
    alignSelf: "stretch",
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
