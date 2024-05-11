import { LinearGradient } from "expo-linear-gradient";
import React, { useState } from "react";
import { View, Text, StyleSheet, TouchableOpacity, Button } from "react-native";
import { TextInput } from "react-native-gesture-handler";
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
  wrapper: {
    display: "flex",
    flexDirection: "row",
    height: 40,
    width: 350,
    alignItems: "center",
    margin: 7,
  },
  // logoutButton: {
  //   marginTop: 30,
  //   borderRadius: 8,
  //   width: 200,
  //   height: 70,
  // },
  // menuItem: {
  //   flexDirection: "row",
  //   alignItems: "center",
  //   padding: 15,
  //   textAlign: "center",
  //   justifyContent: "center",
  // },
});
