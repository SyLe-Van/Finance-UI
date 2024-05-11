import React from "react";
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity,
} from "react-native";

export default function Input({
  title,
  placeholder,
  onDelete,
  width,
  value,
  style,
}) {
  return (
    <View style={[styles.wrapper, { width: width }]}>
      <Text style={styles.text}>{title}:</Text>
      <TouchableOpacity onPress={onDelete}>
        <TextInput placeholder={placeholder} value={value} />
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  wrapper: {
    display: "flex",
    flexDirection: "row",
    height: 45,
    alignItems: "center",
    margin: 7,
    backgroundColor: "#CF89A5",
    borderRadius: 10,
    marginTop: 4,
  },
  text: {
    fontSize: 16,
    fontWeight: "bold",
    marginLeft: 12,
    marginRight: 20,
  },
});
