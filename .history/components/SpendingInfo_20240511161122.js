import Input from "../components/Input";
import { View, Text, StyleSheet } from "react-native";
import { Dropdown } from "react-native-element-dropdown";
import { useState } from "react";
import { useNavigation, useRoute } from "@react-navigation/native";

export default function SpendingInfo({ cost }) {
  const routes = useRoute();
  const { members } = routes.params;

  const [selectedCategory, setSelectedCategory] = useState(members[0]);
  return (
    <View style={styles.infoContainer}>
      <View style={styles.name_cost}>
        <Dropdown
          style={styles.dropdown}
          data={members.map((member) => ({ label: member, value: member }))}
          labelField="label"
          valueField="value"
          placeholder={selectedCategory}
          label={selectedCategory}
          onChange={(item) => {
            setSelectedCategory(item.label);
          }}
        />
        <Input title="Cost" placeholder="$" width={150} />
      </View>
      <View style={styles.note}>
        <Input title="Note" placeholder="..." width={315} />
      </View>
    </View>
  );
}
const styles = StyleSheet.create({
  infoContainer: {
    marginTop: 10,
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
