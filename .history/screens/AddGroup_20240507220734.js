import React from "react";
import { View, StyleSheet, TouchableOpacity, Text } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { useNavigation } from "@react-navigation/native";

export default function AddGroup() {
  const navigation = useNavigation();
  function addGroupHandler() {
    navigation.navigate("InfoGroup");
  }
  return (
    <View style={styles.rootContainer}>
      <TouchableOpacity
        style={[styles.menuItem, styles.logoutButton]}
        onPress={addGroupHandler}
      >
        <LinearGradient
          colors={["#F875AA", "#BEADFA"]}
          style={[styles.menuItem, styles.logoutButton]}
        >
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
    marginTop: 400,
    marginRight: 20,
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
});
