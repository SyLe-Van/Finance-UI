import { View, Text, StyleSheet } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import Display from "../components/Display";
import { useState, useEffect, useContext } from "react";
import axios from "axios";
import { AuthContext } from "./AuthContext";
import Input from "../components/Input";
export default function Result() {
  const { groupId } = useContext(AuthContext);
  useEffect(() => {
    axios
      .get(
        `https://finance-api-kgh1.onrender.com/api/calculateGroup/${groupId}`,
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      )
      .then((response) => {
        const data = response.data;
        console.log("Data: ", data);
      });
  }, []);
  return (
    <LinearGradient
      colors={["#FDCEDF", "#BEADFA"]}
      style={styles.rootContainer}
    >
      <View style={styles.totalSpedingDisplay}>
        <Input title="Total spending" width={250} />
      </View>
      <View style={styles.container}>
        <View style={styles.titleContainer}>
          <Text style={styles.text}>Payer</Text>
          <Text style={styles.text}>Money</Text>
          <Text style={styles.text}>Receiver</Text>
        </View>
        <View style={styles.info}>
          <Display title="Quang" width={95} />
          <Display title="29.9$" width={95} />
          <Display title="Thuong" width={95} />
        </View>
      </View>
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  rootContainer: {
    flex: 1,
    alignItems: "center",
  },
  titleContainer: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-around",
    height: 40,
    width: 350,
  },
  container: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    width: 350,
    borderRadius: 10,
    marginTop: 20,
    backgroundColor: "#EDA2DC",
    alignSelf: "center",
  },
  text: {
    fontSize: 18,
    fontWeight: "bold",
    marginTop: 20,
  },
  info: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-around",
    width: 350,
    marginTop: 20,
  },
  totalSpedingDisplay: {
    marginTop: 30,
  },
});
