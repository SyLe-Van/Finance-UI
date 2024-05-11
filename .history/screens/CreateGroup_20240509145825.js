import { LinearGradient } from "expo-linear-gradient";
import React, { useState, useRef } from "react";
import {
  View,
  StyleSheet,
  TouchableOpacity,
  FlatList,
  Text,
} from "react-native";
import Input from "../components/Input";

export default function InfoGroup() {
  const [members, setMembers] = useState(["Member 1", "Member 2"]);
  const flatListRef = useRef(null);

  const addMember = () => {
    console.log("Add member");
    const newMember = `Member ${members.length + 1}`;
    setMembers((prevMembers) => [...prevMembers, newMember]);
  };

  const renderMemberInput = ({ item, index }) => (
    <Input title={`Member ${index + 1}`} placeholder={`Enter name ${item}`} />
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
        />
      </View>
      <View style={styles.buttonContainer}>
        <TouchableOpacity style={styles.buttons} onPress={addMember}>
          <Text style={{ fontSize: 24 }}>+</Text>
        </TouchableOpacity>
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
    backgroundColor: "green",
  },
  buttonContainer: {
    width: 350,
    height: 70,
    justifyContent: "center",
    alignItems: "flex-end",
  },
  buttons: {},
});
