import Input from "../components/Input";
import { View, Text, StyleSheet } from "react-native";
import { Dropdown } from "react-native-element-dropdown";
import { useState, useEffect } from "react";

export default function SpendingInfo({
  members,
  selectedMember,
  value,
  note,
  onValueChange,
  onNoteChange,
  onMemberChange,
  item,
}) {
  const memberDropdownData = members
    ? members.map((member) => ({
        label: member.member_name,
        value: member._id,
      }))
    : [];

  useEffect(() => {}, [value, note]);
  return (
    <View style={styles.infoContainer}>
      <View style={styles.name_cost}>
        <Dropdown
          style={styles.dropdown}
          data={memberDropdownData}
          labelField="label"
          valueField="value"
          placeholder={selectedMember ? selectedMember : "Select Member"}
          value={selectedMember}
          onChange={(item) => {
            if (item && onMemberChange) {
              onMemberChange(item.value);
            }
          }}
        />
        <Input
          title="Cost"
          placeholder="$"
          width={150}
          onChangeText={(text) => {
            if (onValueChange) {
              onValueChange(text ? text.toString() : "");
            }
          }}
          value={value ? value.toString() : value}
          keyboardType="numeric"
        />
      </View>
      <View style={styles.note}>
        <Input
          title="Notes"
          placeholder="A banana"
          width={315}
          onChangeText={(text) => {
            if (onNoteChange) {
              onNoteChange(text.toString());
            }
          }}
          value={note}
        />
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
