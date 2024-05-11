import { View, Text, StyleSheet } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import Input from "../components/Input";
import { Dropdown } from "react-native-element-dropdown";
import { useState } from "react";
export default function GroupSpending() {
  const data = [
    { label: "Food", value: "0" },
    { label: "Rent", value: "0" },
    { label: "Shopping", value: "0" },
    { label: "Entertainment", value: "0" },
    { label: "Transport", value: "0" },
  ];
  const [selectedCategory, setSelectedCategory] = useState(data[0].label);
  return (
    <LinearGradient
      colors={["#FDCEDF", "#BEADFA"]}
      style={styles.rootContainer}
    >
      <View style={styles.infoContainer}>
        <View style={styles.name_cost}>
          <Dropdown
            style={styles.dropdown}
            data={data}
            labelField="label"
            valueField="value"
            placeholder={selectedCategory}
            label={selectedCategory}
            onChange={(item) => {
              setSelectedCategory(item.label);
            }}
          />
          <Input title="Cost" placeholder="10.90 $" width={150} />
        </View>
        <View style={styles.note}>
          <Input title="Note" placeholder="A banana" width={315} />
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
  infoContainer: {
    marginTop: 70,
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
    height: 40,
    // borderColor: "gray",
    borderWidth: 0.5,
    borderRadius: 8,
    paddingHorizontal: 8,
    // marginTop: 10,
  },
});
