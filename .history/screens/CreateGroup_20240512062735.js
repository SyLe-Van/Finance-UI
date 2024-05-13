import { LinearGradient } from "expo-linear-gradient";
import React, { useState, useEffect, useRef, useContext } from "react";
import {
  View,
  StyleSheet,
  FlatList,
  TouchableHighlight,
  Alert,
} from "react-native";
import axios from "axios";
import { AuthContext } from "./AuthContext";
import Input from "../components/Input";
import ButtonHandler from "../components/ButtonHandler";
import { useNavigation } from "@react-navigation/native";
import { G } from "react-native-svg";

export default function CreateGroup() {
  const [members, setMembers] = useState(["Member 1", "Member 2", "Member 3"]);
  const [pressedIndexes, setPressedIndexes] = useState([]);
  const [memberInputs, setMemberInputs] = useState(
    Array(members.length).fill("")
  );
  const [groupName, setGroupName] = useState("");

  const [group, setGroup] = useState([]);
  const {
    id,
    updateData,
    setUpdateData,
    groupId,
    setGroupId,
    memberIds,
    setMemberIds,
  } = useContext(AuthContext);
  const flatListRef = useRef(null);
  const navigation = useNavigation();
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
    if (index >= 3) {
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
      onLongPress={() => handleLongPress(index)}
      underlayColor="#BEADFA"
      style={[styles.touch, pressedIndexes.includes(index) && styles.pressed]}
    >
      <Input
        title={`Member ${index + 1}`}
        placeholder={`Enter name ${item}`}
        width={300}
        onDelete={() => handleDeleteItem(index)}
        value={memberInputs[index]}
        onChangeText={(text) => {
          const updatedInputs = [...memberInputs];
          updatedInputs[index] = text;
          setMemberInputs(updatedInputs);
        }}
      />
    </TouchableHighlight>
  );

  const scrollToBottom = () => {
    if (flatListRef.current) {
      flatListRef.current.scrollToEnd({ animated: true });
    }
  };

  const handlerSubmitGroup = () => {
    if (groupName === "") {
      Alert.alert("Error", "Please enter a group name");
      return;
    } else {
      const membersData = memberInputs.map((memberName) => ({
        member_name: memberName,
      }));

      const objectGroup = {
        userId: id,
        name_group: groupName,
        member: membersData,
      };
      console.log(objectGroup);
      axios
        .post(
          `https://finance-api-kgh1.onrender.com/api/addGroup`,
          objectGroup,
          {
            headers: {
              "Content-Type": "application/json",
            },
          }
        )
        .then((response) => {
          setGroupId(response.data._id);
          const ids = response.data.member.map((member) => member._id);
          console.log(ids);
          // setMemberIds(ids);
          setUpdateData(!updateData);
          navigation.navigate("GroupSpending", {
            groupName: groupName,
            members: memberInputs,
          });
        })
        .catch((error) => console.log(error));
    }
  };

  return (
    <LinearGradient
      colors={["#FDCEDF", "#BEADFA"]}
      style={styles.rootContainer}
    >
      <View style={styles.inputContainer}>
        <Input
          title="Group name"
          placeholder="Enter name group"
          width={350}
          value={groupName}
          onChangeText={(groupName) => setGroupName(groupName)}
        />
        <FlatList
          ref={flatListRef}
          data={members}
          renderItem={renderMemberInput}
          keyExtractor={(item, index) => index.toString()}
          onContentSizeChange={scrollToBottom}
          ItemSeparatorComponent={() => <View style={{ height: 0.2 }} />}
          style={{ marginTop: 10, height: 400 }}
        />
      </View>
      <View style={styles.buttonContainer}>
        <ButtonHandler title="+" width={80} onPress={addMember} />
      </View>

      <View style={styles.createGroup}>
        <ButtonHandler
          title="Create group"
          width={250}
          onPress={handlerSubmitGroup}
        />
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
    marginTop: 60,
    flexDirection: "column",
    borderRadius: 10,
    alignItems: "center",
    height: 400,
    alignSelf: "stretch",
    // backgroundColor: "green",
  },
  buttonContainer: {
    width: 350,
    height: 70,
    justifyContent: "center",
    alignItems: "flex-end",
  },
  createGroup: {
    marginTop: 50,
  },
  touch: {
    borderRadius: 10,
    height: 52,
  },
  pressed: {
    backgroundColor: "#BEADFA",
  },
});
