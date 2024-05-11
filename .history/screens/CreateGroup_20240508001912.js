import { LinearGradient } from "expo-linear-gradient";
import React, { useState } from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import { TextInput } from "react-native-gesture-handler";
import Button from "../components/Button";
import Input from "../components/Input";
export default function InfoGroup() {
  const [memberName, setMemberName] = useState([]);
  const [money, setMoney] = useState([]);
  return (
    <LinearGradient
      colors={["#FDCEDF", "#BEADFA"]}
      style={styles.rootContainer}
    >
      <View style={styles.inputContainer}>
        <Input title="Group name" placeholder="Enter group name" />
        <Input title="Member 1" />
        <Input title="Member 2" />
        <Input title="Member 3" />
      </View>
      <View></View>
      <View>
        <Button title="Add member" />
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
