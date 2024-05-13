import React, {
  useState,
  useEffect,
  useRef,
  useContext,
  useCallback,
} from "react";
import {
  View,
  StyleSheet,
  FlatList,
  KeyboardAvoidingView,
  TouchableHighlight,
  Alert,
  Platform,
} from "react-native";
import axios from "axios";
import { LinearGradient } from "expo-linear-gradient";
import SpendingInfo from "../components/SpendingInfo";
import ButtonHandler from "../components/ButtonHandler";
import { useNavigation, useRoute } from "@react-navigation/native";
import Display from "../components/Display";
import { AuthContext } from "./AuthContext";
export default function GroupSpending({ onChangeText }) {
  const [spendingList, setSpendingList] = useState([]);
  const [numSpending, setNumSpending] = useState(2);
  const [nextId, setNextId] = useState(0);
  const [pressedIndexes, setPressedIndexes] = useState([]);
  const flatListRef = useRef(null);
  const route = useRoute();
  const navigation = useNavigation();
  const { id } = useContext(AuthContext);
  ////////////////////////////////////////////////////////////////
  // const [costInputs, setCostInputs] = useState(Array(numSpending).fill(""));
  // const [notesInputs, setNotesInputs] = useState(Array(numSpending).fill(""));

  const { groupId } = route.params;
  console.log(groupId);

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
      setSpendingList((prevSpendingList) =>
        prevSpendingList.filter((_, i) => i !== index)
      );
    }
  };

  const handleDeleteItem = (index) => {
    deleteMember(index);
  };
  const handleLongPress = (index) => {
    if (pressedIndexes.includes(index)) {
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
    }
  };

  // useEffect(() => {
  //   const initialSpendingList = Array.from(
  //     { length: numSpending },
  //     (_, index) => ({
  //       id: index,
  //     })
  //   );
  //   setSpendingList(initialSpendingList);
  // }, [numSpending]);

  // const addNewSpending = () => {
  //   setNextId(nextId + 1);
  //   setSpendingList((prevSpendingList) => [
  //     ...prevSpendingList,
  //     { id: nextId },
  //   ]);
  // };

  // const handleInputChange = useCallback();
  const renderSpendingInfo = ({ item, index }) => (
    <TouchableHighlight
      onPressIn={() => handlePressIn(index)}
      onPressOut={() => handlePressOut(index)}
      onLongPress={() => handleLongPress(index)}
      underlayColor="#BEADFA"
      style={[styles.touch, pressedIndexes.includes(index) && styles.pressed]}
    >
      <View style={styles.spendingInfoWrapper}>
        <SpendingInfo
          key={item.id}
          // cost={costInputs[index] || ""}
          // notes={notesInputs[index] || ""}
          // members={objectParams.members}
          // memberId={memberIds[index]}
        />
      </View>
    </TouchableHighlight>
  );

  // const scrollToNewestItem = () => {
  //   setTimeout(() => {
  //     if (flatListRef.current) {
  //       flatListRef.current.scrollToEnd({ animated: true });
  //     }
  //   }, 100);
  // };

  // const printSpendingList = () => {
  //   spendingList.forEach((item) => {
  //     const memberId = memberIds[item.id];
  //     const memberName = members[item.id];
  //     console.log("Member Id:", memberId);
  //     console.log("Member Name:", memberName);
  //     console.log("Cost:", costInputs[item.id]);
  //     console.log("Notes:", notesInputs[item.id]);
  //   });
  // };

  // const savePayListHandler = (memberId, value, note) => {
  //   if (cost === "" && notes === "") {
  //     Alert.alert("Error", "Please enter a data");
  //     return;
  //   } else {

  //     // const objectPayList = {
  //     //   groupId: groupId,
  //     //   memberIds: memberIds,
  //     //   memberName: members,
  //     //   // cost: costInputs,
  //     //   // notes: notesInputs,
  //     // };
  //     // console.log("objectPayList", objectPayList);
  //     // axios
  //     //   .put(
  //     //     `https://finance-api-kgh1.onrender.com/api/addPayList`,
  //     //     objectPayList,
  //     //     {
  //     //       headers: {
  //     //         "Content-Type": "application/json",
  //     //       },
  //     //     }
  //     //   )
  //     //   .then((response) => {
  //     //     console.log("Added payload");
  //     //   })
  //     //   .catch((error) => console.log(error));
  //   }
  // };
  return (
    <LinearGradient
      colors={["#FDCEDF", "#BEADFA"]}
      style={styles.rootContainer}
    >
      <KeyboardAvoidingView
        behavior={Platform.OS === "ios" ? "padding" : "height"}
        style={{ flex: 1 }}
      >
        <View style={styles.nameGroup}>
          <Display title="Vung Tau trip" width={250} />
        </View>
        <FlatList
          ref={flatListRef}
          data={spendingList}
          renderItem={renderSpendingInfo}
          keyExtractor={(item, index) => index.toString()}
          contentContainerStyle={[
            styles.spendingInfoContainer,
            { paddingBottom: 50 },
          ]}
        />
        <View style={styles.buttonContainer}>
          <ButtonHandler
            title="+"
            width={80}
            onPress={() => {
              // addNewSpending();
              // scrollToNewestItem();
            }}
          />
        </View>
        <View style={styles.splitMoneyButton}>
          <ButtonHandler title="Save" width={250} />
        </View>
      </KeyboardAvoidingView>
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  rootContainer: {
    flex: 1,
    alignItems: "center",
  },
  buttonContainer: {
    width: 350,
    height: 70,
    justifyContent: "center",
    alignItems: "flex-end",
    marginBottom: 30,
  },
  spendingInfoContainer: {
    flexGrow: 1,
    marginTop: 20,
    alignSelf: "stretch",
  },
  splitMoneyButton: {
    marginBottom: 50,
    marginLeft: 50,
  },
  touch: {
    borderRadius: 10,
    overflow: "hidden",
    width: 360,
    height: 160,
  },
  spendingInfoWrapper: {
    justifyContent: "center",
    alignItems: "center",
    flex: 1,
    marginBottom: 10,
  },
  pressed: {
    backgroundColor: "#BEADFA",
  },
  nameGroup: {
    marginTop: 20,
    marginLeft: 45,
  },
});
