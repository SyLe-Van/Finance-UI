import { View, Text, StyleSheet, TouchableOpacity, Button } from "react-native";
export default function Input() {
  return (
    <View style={styles.wrapper}>
      <Text style={styles.text}>Group name:</Text>
      <TextInput style={styles.input} placeholder="Enter group name" />
    </View>
  );
}
const styles = StyleSheet.create({
  wrapper: {
    display: "flex",
    flexDirection: "row",
    height: 40,
    width: 350,
    alignItems: "center",
    margin: 7,
  },
  text: {
    marginRight: 20,
    fontSize: 16,
    fontWeight: "bold",
  },
  input: {},
});
