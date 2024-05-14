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
  onChangeText,
  note,
  cost,
  editable,
  keyboardType,
}) {
  const formatNumber = (num) => {
    return num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");
  };

  const handleOnChangeText = (text) => {
    const cleanedValue = text.replace(/\./g, "");

    const intValue = parseInt(cleanedValue);

    onChangeText(formatNumber(intValue));
  };

  return (
    <View style={[styles.wrapper, { width: width }]}>
      <Text style={styles.text}>{title}:</Text>
      <TouchableOpacity onPress={onDelete}>
        <TextInput
          placeholder={placeholder}
          value={value}
          onChangeText={handleOnChangeText}
          note={note}
          style={[styles.TextInputContainer, { width: 150 }]}
          editable={editable}
          keyboardType={keyboardType}
        />
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
