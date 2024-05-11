import React, { useState } from "react";
import { View, StyleSheet, TouchableOpacity, FlatList } from "react-native";
import Input from "../components/Input";
import ButtonHandler from "../components/ButtonHandler";
import { LinearGradient } from "expo-linear-gradient";

export default function InfoGroup() {
  const [members, setMembers] = useState(["Member 1"]);

  const addMember = () => {
    const newMember = `Member ${members.length + 1}`;
    setMembers([...members, newMember]);
  };

  const renderMemberInput = ({ item }) => (
    <Input title={item} placeholder={`Enter ${item}`} />
  );

  return (
    <LinearGradient
      colors={["#FDCEDF", "#BEADFA"]}
      style={styles.rootContainer}
    >
      <View style={styles.inputContainer}>
        <FlatList
          data={members}
          renderItem={renderMemberInput}
          keyExtractor={(item, index) => index.toString()}
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
    alignSelf: "stretch",
  },
  buttonContainer: {
    width: 350,
    height: 70,
    justifyContent: "center",
    alignItems: "flex-end",
  },
  buttons: {},
});
