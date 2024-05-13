import Input from "../components/Input";
import { View, Text, StyleSheet } from "react-native";
import { Dropdown } from "react-native-element-dropdown";
import { useState } from "react";

export default function SpendingInfo({ members }) {
  const data = [
    { label: "Food", value: "0" },
    { label: "Rent", value: "0" },
    { label: "Shopping", value: "0" },
    { label: "Entertainment", value: "0" },
    { label: "Transport", value: "0" },
  ];

  const [selectedCategory, setSelectedCategory] = useState(data[0].label);
  const [selectedMember, setSelectedMember] = useState(null);
  const dropdownData = members.map((member) => ({
    label: member.member_name,
    value: member._id,
  }));
  return (
    <View style={styles.infoContainer}>
      <View style={styles.name_cost}>
        <Dropdown
          style={styles.dropdown}
          data={dropdownData}
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
  );
}
///
const styles = StyleSheet.create({
  infoContainer: {
    marginTop: 5,
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
});
