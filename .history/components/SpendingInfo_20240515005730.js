import Input from "../components/Input";
import { View, Text, StyleSheet } from "react-native";
import { Dropdown } from "react-native-element-dropdown";
import { useState, useEffect } from "react";

export default function SpendingInfo({
  members,
  onMemberChange,
  onValueChange,
  onNoteChange,
}) {
  const [selectedMember, setSelectedMember] = useState(null);
  const [value, setValues] = useState(0);
  const [note, setNotes] = useState("");

  const dropdownData = members
    ? members.map((member) => ({
        label: member.member_name,
        value: member._id,
      }))
    : [];
  useEffect(() => {
    setValues(value);
  }, [value]);

  useEffect(() => {
    setNotes(note);
  }, [note]);
  const handleValueChange = (text) => {
    // Loại bỏ dấu phẩy từ chuỗi giá trị nhập vào
    const numericValue = parseFloat(text.replace(/,/g, ""));
    setValues(numericValue);
    if (onValueChange) onValueChange(numericValue);
  };
  return (
    <View style={styles.infoContainer}>
      <View style={styles.name_cost}>
        <Dropdown
          style={styles.dropdown}
          data={dropdownData}
          labelField="label"
          valueField="value"
          placeholder="Select Member"
          value={selectedMember}
          onChange={(item) => {
            setSelectedMember(item.value);
            if (onMemberChange) onMemberChange(item.value);
          }}
        />
        <Input
          title="Cost"
          placeholder="10.90 $"
          width={150}
          onChangeText={handleValueChange}
          keyboardType="numeric"
          value={value ? value.toString() : ""}
        />
      </View>
      <View style={styles.note}>
        <Input
          title="Notes"
          placeholder="A banana"
          width={315}
          onChangeText={(text) => {
            setNotes(text);
            if (onNoteChange) onNoteChange(text);
          }}
          note={note}
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
