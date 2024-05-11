import { LinearGradient } from "expo-linear-gradient";
import React, { useState, useRef } from "react";
import { View, StyleSheet, TouchableOpacity, FlatList } from "react-native";
import Input from "../components/Input";
import ButtonHandler from "../components/ButtonHandler";

export default function InfoGroup() {
  const [members, setMembers] = useState(["Member 1", "Member 2", "Member 3"]);
  const flatListRef = useRef(null);

  const addMember = () => {
    const newMember = `Member ${members.length + 1}`;
    setMembers([...members, newMember]);
    flatListRef.current.scrollToEnd({ animated: true });
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
          ref={flatListRef}
          data={members}
          renderItem={renderMemberInput}
          keyExtractor={(item, index) => index.toString()}
          contentContainerStyle={{ flexGrow: 1 }}
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
    borderRadius: 10,
    alignItems: "center",
    alignSelf: "stretch",
    flex: 1,
  },
  buttonContainer: {
    width: 350,
    height: 70,
    justifyContent: "center",
    alignItems: "flex-end",
  },
  buttons: {},
});
