import { LinearGradient } from "expo-linear-gradient";
import React, { useState, useRef } from "react";
import { View, StyleSheet, FlatList, TouchableHighlight } from "react-native";
import Input from "../components/Input";
import ButtonHandler from "../components/ButtonHandler";
export default function InfoGroup() {
  const [members, setMembers] = useState(["Member 1", "Member 2"]);
  const flatListRef = useRef(null);

  const addMember = () => {
    const newMember = `Member ${members.length + 1}`;
    setMembers((prevMembers) => [...prevMembers, newMember]);
  };
  function handlePressIn() {
    const newColor = type === "Income" ? "#FDCEDF" : "#BEADFA";
    setBackgroundColor(newColor);
  }

  const renderMemberInput = ({ item, index }) => (
    <TouchableHighlight
      onPressIn={handlePressIn}
      onPressOut={handlePressOut}
      onLongPress={handleLongPress}
    >
      <Input title={`Member ${index + 1}`} placeholder={`Enter name ${item}`} />
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
  button: {
    borderRadius: 10,
    width: 80,
    height: 50,
    flexDirection: "row",
    alignItems: "center",
    textAlign: "center",
    justifyContent: "center",
    backgroundColor: "green",
  },
  buttons: {
    borderRadius: 10,
    width: 300,
    height: 50,
    flexDirection: "row",
    alignItems: "center",
    textAlign: "center",
    justifyContent: "center",
    backgroundColor: "green",
  },
  createGroup: {
    marginTop: 300,
  },
  spendingInfo: {
    width: 350,
    height: 100,
  },
});
