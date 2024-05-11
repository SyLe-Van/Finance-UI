import { View, Text, StyleSheet, TextInput } from "react-native";
export default function Input({ title, placeholder }) {
  return (
    <View style={styles.wrapper}>
      <Text style={styles.text}>{title}:</Text>
      <TextInput style={styles.input} placeholder={placeholder} />
    </View>
  );
}
const styles = StyleSheet.create({
  wrapper: {
    display: "flex",
    flexDirection: "row",
    height: 45,
    width: 350,
    alignItems: "center",
    justifyContent: "space-evenly",
    margin: 7,
    backgroundColor: "#ffffff",
    borderRadius: 10,
  },
  text: {
    fontSize: 16,
    fontWeight: "bold",
  },
  input: {},
});
