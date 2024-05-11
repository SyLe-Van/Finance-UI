import { View, Text, StyleSheet } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import Input from "../components/Input";
import { Dropdown } from "react-native-element-dropdown";
import { useState } from "react";
import ButtonHandler from "../components/ButtonHandler";
import SpendingInfo from "../components/SpendingInfo";
export default function GroupSpending() {
  const data = [
    { label: "Sỹ", value: "0" },
    { label: "Thưởng", value: "0" },
    { label: "Tân", value: "0" },
    { label: "Hoà", value: "0" },
    { label: "Quang", value: "0" },
  ];
  const [selectedCategory, setSelectedCategory] = useState(data[0].label);
  return (
    <LinearGradient
      colors={["#FDCEDF", "#BEADFA"]}
      style={styles.rootContainer}
    >
      <SpendingInfo />
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  rootContainer: {
    flex: 1,
    alignItems: "center",
  },
  infoContainer: {
    marginTop: 30,
    height: 150,
    width: 350,
    borderRadius: 10,
    backgroundColor: "#EDA2DC",
    justifyContent: "center",
    alignItems: "center",
  },
  name_cost: {
    margin: 10,
    display: "flex",
    flexDirection: "row",
  },
  note: {},
  dropdown: {
    width: 150,
    height: 45,
    backgroundColor: "#CF89A5",
    borderRadius: 10,
    paddingHorizontal: 12,
    marginTop: 4,
  },
  iconStyle: {
    width: 20,
    height: 20,
  },
  buttonContainer: {
    width: 350,
    height: 70,
    marginTop: 20,
    justifyContent: "center",
    alignItems: "flex-end",
  },
});
