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

  // Function để cập nhật giá trị và chuyển đổi thành chuỗi có dấu phân tách
  const handleValueChange = (text) => {
    // Loại bỏ dấu phân tách để có thể chuyển đổi thành số nguyên
    const cleanedValue = text.replace(/\./g, "");
    // Chuyển đổi giá trị thành số nguyên
    const intValue = parseInt(cleanedValue);
    // Chuyển đổi số nguyên thành chuỗi có dấu phân tách và gán lại giá trị
    onChangeText(formatNumber(intValue));
  };

  return (
    <View style={[styles.wrapper, { width: width }]}>
      <Text style={styles.text}>{title}:</Text>
      <TouchableOpacity onPress={onDelete}>
        <TextInput
          placeholder={placeholder}
          value={value}
          onChangeText={handleValueChange}
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
