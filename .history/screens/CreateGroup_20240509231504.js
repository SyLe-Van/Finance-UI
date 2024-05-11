import { LinearGradient } from "expo-linear-gradient";
import React, { useState, useRef } from "react";
import {
  View,
  StyleSheet,
  FlatList,
  TouchableHighlight,
  Alert,
} from "react-native";
import Input from "../components/Input";
import ButtonHandler from "../components/ButtonHandler";
import { useNavigation } from "@react-navigation/native";

export default function CreateGroup() {
  const [members, setMembers] = useState(["Member 1", "Member 2"]);
  const [pressedIndexes, setPressedIndexes] = useState([]);
  const flatListRef = useRef(null);

  const addMember = () => {
    const newMember = `Member ${members.length + 1}`;
    setMembers((prevMembers) => [...prevMembers, newMember]);
  };

  const handlePressIn = (index) => {
    setPressedIndexes((prevIndexes) => [...prevIndexes, index]);
  };

  const handlePressOut = (index) => {
    setPressedIndexes((prevIndexes) =>
      prevIndexes.filter((pressedIndex) => pressedIndex !== index)
    );
  };

  const deleteMember = (index) => {
    if (index >= 2) {
      setMembers((prevMembers) => prevMembers.filter((_, i) => i !== index));
    }
  };

  const handleDeleteItem = (index) => {
    deleteMember(index);
  };

  const handleLongPress = (index) => {
    const buttons = [
      {
        text: "Delete",
        onPress: () => {
          handleDeleteItem(index);
        },
        style: "destructive",
      },
      {
        text: "Cancel",
        onPress: () => console.log("Cancel Pressed"),
        style: "cancel",
      },
    ];

    Alert.alert("Options", "Choose an action", buttons, { cancelable: true });
  };

  const renderMemberInput = ({ item, index }) => (
    <TouchableHighlight
      onPressIn={() => handlePressIn(index)}
      onPressOut={() => handlePressOut(index)}
      onLongPress={() => handleLongPress(index)} // Sửa đổi ở đây
      underlayColor="#BEADFA"
      style={[styles.touch, pressedIndexes.includes(index) && styles.pressed]}
    >
      <Input
        title={`Member ${index + 1}`}
        placeholder={`Enter name ${item}`}
        onDelete={() => handleDeleteItem(index)}
      />
    </TouchableHighlight>
  );

  const scrollToBottom = () => {
    if (flatListRef.current) {
      flatListRef.current.scrollToEnd({ animated: true });
    }
  };

  return (
    <LinearGradient
      colors={["#FDCEDF", "#BEADFA"]}
      style={styles.rootContainer}
    >
      <View style={styles.inputContainer}>
        <Input title="Group name" placeholder="Enter name group" />
        <FlatList
          ref={flatListRef}
          data={members}
          renderItem={renderMemberInput}
          keyExtractor={(item, index) => index.toString()}
          onContentSizeChange={scrollToBottom}
          ItemSeparatorComponent={() => <View style={{ height: 0.2 }} />}
          style={{ marginTop: 10 }}
        />
      </View>
      <View style={styles.buttonContainer}>
        <ButtonHandler title="+" width={80} onPress={addMember} />
      </View>

      <View style={styles.createGroup}>
        <ButtonHandler title="Create group" width={250} />
      </View>
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  rootContainer: {
    flex: 1,
    alignItems: "center",
  },
  inputContainer: {
    margin: 20,
    flexDirection: "column",
    borderRadius: 10,
    alignItems: "center",
    height: 225,
    alignSelf: "stretch",
    // backgroundColor: "green",
  },
  buttonContainer: {
    width: 350,
    height: 70,
    marginTop: -25,
    justifyContent: "center",
    alignItems: "flex-end",
  },
  createGroup: {
    marginTop: 300,
  },
  touch: {
    borderRadius: 10,
    height: 52,
  },
  pressed: {
    backgroundColor: "#BEADFA",
  },
});
