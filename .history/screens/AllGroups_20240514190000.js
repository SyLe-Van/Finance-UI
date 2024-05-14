import React from "react";
import {
  View,
  StyleSheet,
  TouchableOpacity,
  Text,
  FlatList,
} from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { useNavigation } from "@react-navigation/native";
import { useState, useEffect, useContext } from "react";
import Display from "../components/Display";
import ButtonHandler from "../components/ButtonHandler";
import { AuthContext } from "./AuthContext";
import axios from "axios";
export default function AllGroups() {
  const navigation = useNavigation();
  const { id, groupId } = useContext(AuthContext);
  const [groupNames, setGroupNames] = useState([]);

  useEffect(() => {
    console.log("members updated:", groupNames);
  }, [groupNames]);

  useEffect(() => {
    // Call API to get group names
    axios
      .get(
        `https://finance-api-kgh1.onrender.com/api/getOneGroupID/${id}/${groupId}`
      )
      .then((response) => {
        const data = response.data;
        console.log("DATA API:", data);
        const groups = data.name_group;
        setGroupNames(groups);
      })
      .catch((error) => {
        console.error("Error fetching user groups:", error);
      });
  }, [id]);
  function addGroupHandler() {
    navigation.navigate("CreateGroup");
  }
  return (
    <LinearGradient
      colors={["#FDCEDF", "#BEADFA"]}
      style={styles.rootContainer}
    >
      <View style={styles.groupContainer}>
        <FlatList />
      </View>
      <View style={styles.addGroupButton}>
        <ButtonHandler title="+" onPress={addGroupHandler} />
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
    // backgroundColor: "green",
    marginLeft: 250,
  },
  groupContainer: {
    height: 550,
    width: 400,
    margin: 30,
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
});
