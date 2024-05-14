import React from "react";
import { View, StyleSheet, TouchableOpacity, Text } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { useNavigation } from "@react-navigation/native";
import Display from "../components/Display";
export default function AllGroups() {
  const navigation = useNavigation();
  function addGroupHandler() {
    navigation.navigate("CreateGroup");
  }
  return (
    <LinearGradient
      colors={["#FDCEDF", "#BEADFA"]}
      style={styles.rootContainer}
    >
      <View style={styles.groupContainer}>
        <Display title="Dalat" width={300} />
        <Display title="Vung Tau" width={300} />
      </View>
      <View style={styles.addGroupButton}>
        {/* <Text
          style={{
            fontSize: 40,
            color: "#ffffff",
            textAlign: "center",
            justifyContent: "center",
            lineHeight: 44,
          }}
        >
          +
        </Text> */}
      </View>
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  rootContainer: {
    flex: 1,
    backgroundColor: "#FDCEDF",
    alignItems: "center",
  },
  menuText: {
    fontSize: 30,
    textAlign: "center",
  },
  logoutButton: {
    marginTop: 590,
    marginRight: 30,
    // borderRadius: 35,
    width: 70,
    height: 70,
  },
  menuItem: {
    flexDirection: "row",
    alignItems: "center",
    padding: 15,
    textAlign: "center",
    justifyContent: "center",
  },
  addGroupButton: {
    width: 70,
    height: 70,
    backgroundColor: "green",
    marginLeft: 50,
  },
  groupContainer: {
    height: 550,
    width: 400,
    margin: 30,
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    backgroundColor: "red",
  },
});
