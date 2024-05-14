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
    <View style={styles.rootContainer}>
      <TouchableOpacity onPress={addGroupHandler}>
        <LinearGradient
          colors={["#F875AA", "#BEADFA"]}
          style={[styles.menuItem, styles.logoutButton]}
        >
          {/* <Display title=""/> */}
          <View style={styles.addGroupButton}>
            <Text
              style={{
                fontSize: 40,
                color: "#ffffff",
                textAlign: "center",
                lineHeight: 44,
              }}
            >
              +
            </Text>
          </View>
        </LinearGradient>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  rootContainer: {
    flex: 1,
    backgroundColor: "#FDCEDF",
    padding: 15,
    alignItems: "flex-end",
  },
  menuText: {
    fontSize: 30,
    textAlign: "center",
  },
  logoutButton: {
    marginTop: 590,
    marginRight: 30,
    borderRadius: 35,
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
    borderRadius: 35,
    overflow: "hidden",
    width: 70,
    height: 70,
    justifyContent: "center",
    alignItems: "center",
  },
});
