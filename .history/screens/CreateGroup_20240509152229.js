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
import ButtonHandler from "../components/ButtonHandler";
export default function InfoGroup() {
  const [members, setMembers] = useState(["Member 1", "Member 2"]);
  const flatListRef = useRef(null);

  const addMember = () => {
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
        <TouchableOpacity onPress={addMember}>
          <LinearGradient style={styles.button} colors={["#F875AA", "#BEADFA"]}>
            <Text style={{ fontSize: 24 }}>+</Text>
          </LinearGradient>
        </TouchableOpacity>
      </View>
      <View style={styles.createGroup}>
        <TouchableOpacity>
          <LinearGradient
            style={styles.buttons}
            colors={["#F875AA", "#BEADFA"]}
          >
            <Text style={{ fontSize: 20, fontWeight: "bold", width: 150 }}>
              Create group
            </Text>
          </LinearGradient>
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
    // backgroundColor: "green",
  },
  buttonContainer: {
    width: 350,
    height: 70,
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
    marginTop: 50,
  },
});
