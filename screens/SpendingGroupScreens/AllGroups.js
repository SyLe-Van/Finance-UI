import React from "react";
import { View, StyleSheet, FlatList } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { useNavigation } from "@react-navigation/native";
import { useState, useEffect, useContext } from "react";
import Display from "../../components/Display";
import ButtonHandler from "../../components/ButtonHandler";
import { AuthContext } from "../AuthContext";
import axios from "axios";
export default function AllGroups() {
  const navigation = useNavigation();
  const { id, updateData } = useContext(AuthContext);
  const [groupNames, setGroupNames] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          `https://finance-api-kgh1.onrender.com/api/getAllGroups/${id}`
        );
        const data = response.data;
        data.reverse();
        setGroupNames(data);
      } catch (error) {
        console.error("Error fetching user groups:", error);
      }
    };

    fetchData();
  }, [updateData]);

  function addGroupHandler() {
    navigation.navigate("CreateGroup");
  }
  return (
    <LinearGradient
      colors={["#FDCEDF", "#BEADFA"]}
      style={styles.rootContainer}
    >
      <View style={styles.groupContainer}>
        <FlatList
          data={groupNames}
          renderItem={({ item }) => (
            <Display title={item.name} width={360} item={item} />
          )}
          keyExtractor={(item) => item._id}
        />
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
