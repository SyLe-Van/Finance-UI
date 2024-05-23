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
}) {
  const [memberDropdownData, setMemberDropdownData] = useState([]);
  const [selectedMemberObject, setSelectedMemberObject] = useState(null);
  const [prevSelectedMember, setPrevSelectedMember] = useState(null);

  useEffect(() => {
    const data = members
      ? members.map((member) => ({
          label: member.member_name,
          value: member._id,
        }))
      : [];
    setMemberDropdownData(data);
    const selectedObject = data.find(
      (member) => member.value === selectedMember
    );
    setSelectedMemberObject(selectedObject);
  }, [members, selectedMember]);
  // console.log("members", members);
  console.log("selectedMember", selectedMember);
  console.log("MemberObject", selectedMemberObject);
  useEffect(() => {
    if (prevSelectedMember !== selectedMember) {
      setPrevSelectedMember(selectedMember);
    }
  }, [selectedMember]);

  return (
    <View style={styles.infoContainer}>
      <View style={styles.name_cost}>
        <Dropdown
          style={styles.dropdown}
          data={memberDropdownData}
          labelField="label"
          valueField="value"
          placeholder="Select member"
          value={selectedMemberObject ? selectedMemberObject.value : null}
          onChange={(item) => {
            if (item && onMemberChange) {
              onMemberChange(item.value);
            }
          }}
        />
        <Input
          title="Cost"
          placeholder="VND"
          width={150}
          widthText={90}
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
          placeholder="..."
          width={315}
          widthText={240}
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
    width: 200,
    borderRadius: 10,
    justifyContent: "center",
    alignItems: "center",
  },
  name_cost: {
    margin: 10,
    display: "flex",
    flexDirection: "row",
  },

  dropdown: {
    width: 150,
    height: 45,
    backgroundColor: "#ffffff",
    borderRadius: 10,
    paddingHorizontal: 12,
    marginTop: 4,
  },
  iconStyle: {
    width: 20,
    height: 20,
  },
});
