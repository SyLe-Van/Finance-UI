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
  input: {
    marginTop: 10,
  },
});
