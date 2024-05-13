import Input from "../components/Input";
import { View, Text, StyleSheet } from "react-native";
import { Dropdown } from "react-native-element-dropdown";
import { useState } from "react";

export default function SpendingInfo({ members, memberIds, onChangeText }) {
  const data = members.map((member) => ({
    label: member,
    value: member,
  }));

  const [selectedCategory, setSelectedCategory] = useState(
    members.length > 0 ? members[0] : ""
  );
  const handleDropdownChange = (item) => {
    if (item && item.label) {
      setSelectedCategory(item.label);
      const selectedMemberIndex = members.indexOf(item.label);
      if (selectedMemberIndex !== -1) {
        const selectedMemberId = memberIds[selectedMemberIndex];
        // Thay đổi ở đây để truyền cả hai tham số cost và notes
        onChangeText(selectedMemberId, "");
      }
    }
  };

  return (
    <View style={styles.infoContainer}>
      <View style={styles.name_cost}>
        <Dropdown
          style={styles.dropdown}
          data={data}
          labelField="label"
          valueField="value"
          placeholder={selectedCategory}
          label={selectedCategory}
          onChange={handleDropdownChange}
        />
        <Input
          title="Cost"
          placeholder="10.90 $"
          width={150}
          onChangeText={(cost) => onChangeText(cost, "")}
        />
      </View>
      <View style={styles.note}>
        <Input
          title="Note"
          placeholder="A banana"
          width={315}
          onChangeText={(notes) => onChangeText(notes, "")}
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
