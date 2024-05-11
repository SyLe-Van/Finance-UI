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
    margin: 7,
    backgroundColor: "#ffffff",
    borderRadius: 10,
    marginTop: 30,
  },
  text: {
    fontSize: 16,
    fontWeight: "bold",
    marginLeft: 12,
    marginRight: 20,
  },
  input: {},
});