import React, { useState, useEffect, useRef, useContext } from "react";
import {
  View,
  Text,
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
export default function GroupSpending() {
  const [spendingList, setSpendingList] = useState([]);
  const [numSpending, setNumSpending] = useState(2);
  const [nextId, setNextId] = useState(0);
  const [pressedIndexes, setPressedIndexes] = useState([]);
  const [uniqueId, setUniqueId] = useState(0);
  const [cost, setCost] = useState([]);
  const [costInputs, setCostInputs] = useState(Array(cost.length).fill(""));
  const [notes, setNotes] = useState([]);
  const [notesInputs, setNotesInputs] = useState(Array(notes.length).fill(""));
  const flatListRef = useRef(null);
  const route = useRoute();
  const navigation = useNavigation();
  const { groupName } = route.params;

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

  useEffect(() => {
    const initialSpendingList = Array.from(
      { length: numSpending },
      (_, index) => ({
        id: index,
      })
    );
    setSpendingList(initialSpendingList);
  }, [numSpending]);

  const addNewSpending = () => {
    setNextId(nextId + 1);
    setSpendingList((prevSpendingList) => [
      ...prevSpendingList,
      { id: nextId },
    ]);
  };

  const renderSpendingInfo = ({ item, index }) => (
    <TouchableHighlight
      onPressIn={() => handlePressIn(index)}
      onPressOut={() => handlePressOut(index)}
      onLongPress={() => handleLongPress(index)}
      underlayColor="#BEADFA"
      style={[styles.touch, pressedIndexes.includes(index) && styles.pressed]}
    >
      <View style={styles.spendingInfoWrapper}>
        <SpendingInfo key={item.id} />
      </View>
    </TouchableHighlight>
  );

  const scrollToNewestItem = () => {
    setTimeout(() => {
      if (flatListRef.current) {
        flatListRef.current.scrollToEnd({ animated: true });
      }
    }, 100);
  };
  const splitMoneyHandler = () => {
    navigation.navigate("PaymentResult");
  };
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
          <Display title={groupName} width={250} />
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
              addNewSpending();
              scrollToNewestItem();
            }}
          />
        </View>
        <View style={styles.splitMoneyButton}>
          <ButtonHandler
            title="Split the money"
            width={250}
            onPress={splitMoneyHandler}
          />
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
