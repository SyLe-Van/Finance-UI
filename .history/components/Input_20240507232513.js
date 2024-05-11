import { View, Text, StyleSheet, TouchableOpacity, Button } from "react-native";
export default function Input() {
  return (
    <View style={styles.wrapper}>
      <Text style={styles.text}>Group name:</Text>
      <TextInput style={styles.input} placeholder="Enter group name" />
    </View>
  );
}
