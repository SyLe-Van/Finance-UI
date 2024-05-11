import { LinearGradient } from "expo-linear-gradient";
import React, { useState } from "react";
import { View, StyleSheet, TouchableOpacity, FlatList } from "react-native";
import Input from "../components/Input";
import ButtonHandler from "../components/ButtonHandler";

export default function InfoGroup() {
  const [members, setMembers] = useState(["Member 1", "Member 2", "Member 3"]);

  const addMember = () => {
    const newMember = `Member ${members.length + 1}`;
    setMembers([...members, newMember]);
  };

  const renderMemberInput = ({ item, index }) => (
    <Input title={`Member ${index + 1}`} placeholder={`Enter name ${item}`} />
  );

  return (
    <LinearGradient
      colors={["#FDCEDF", "#BEADFA"]}
      style={styles.rootContainer}
    >
      <View style={styles.inputContainer}>
        <Input title="Group name" placeholder="Enter name group" />
        <FlatList
          data={members}
          renderItem={renderMemberInput}
          keyExtractor={(item, index) => index.toString()}
          style={styles.flatList}
        />
      </View>
      <View style={styles.buttonContainer}>
        <ButtonHandler style={styles.buttons} title="+" onPress={addMember} />
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
    // backgroundColor: "green",
    borderRadius: 10,
    alignItems: "center",
    // Remove fixed height
    alignSelf: "stretch", // Allow container to expand vertically
  },
  flatList: {
    flexGrow: 1, // Make sure FlatList fills the available space
  },
  buttonContainer: {
    width: 350,
    height: 70,
    justifyContent: "center",
    alignItems: "flex-end",
  },
  buttons: {},
});
