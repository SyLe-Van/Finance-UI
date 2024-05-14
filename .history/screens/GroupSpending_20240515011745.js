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
export default function GroupSpending() {
  const [spendingList, setSpendingList] = useState([]);
  const [numSpending, setNumSpending] = useState(2);
  const [spendingItems, setSpendingItems] = useState([
    { id: 0, name: "Spending 1" },
    { id: 1, name: "Spending 2" },
  ]);
  const [nextId, setNextId] = useState(0);
  const [pressedIndexes, setPressedIndexes] = useState([]);
  const flatListRef = useRef(null);
  const route = useRoute();
  const navigation = useNavigation();
  const { id, groupId, updateData, setUpdateData } = useContext(AuthContext);
  ////////////////////////////////////////////////////////////////

  const [nameGroup, setNameGroup] = useState("");
  const [members, setMembers] = useState([]);

  const handlePressIn = (index) => {
    setPressedIndexes((prevIndexes) => [...prevIndexes, index]);
  };

  const handlePressOut = (index) => {
    setPressedIndexes((prevIndexes) =>
      prevIndexes.filter((pressedIndex) => pressedIndex !== index)
    );
  };

  const handleDeleteItem = (index) => {
    if (spendingItems.length <= 2) {
      return;
    }
    if (index < spendingItems.length) {
      setSpendingItems((prevSpendingItems) =>
        prevSpendingItems.filter((_, i) => i !== index)
      );
    }
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
    console.log("members updated:", members);
  }, [members]);

  useEffect(() => {
    if (id && groupId) {
      axios
        .get(
          `https://finance-api-kgh1.onrender.com/api/getOneGroupID/${id}/${groupId}`
        )
        .then((response) => {
          const data = response.data;
          setNameGroup(data.name_group);
          const Members = data.member;
          setMembers(Members);
        })
        .catch((error) => {
          console.error("Error fetching group information:", error);
        });
    }
  }, [id, groupId]);

  const addNewSpendingItem = () => {
    const newItem = {
      id: nextId,
      selectedMember: null,
      value: "",
      note: "",
      name: `Spending ${nextId + 1}`,
    };
    setSpendingItems((prevItems) => [...prevItems, newItem]);
    setNextId((prevId) => prevId + 1);
  };

  const scrollToNewestItem = () => {
    flatListRef.current.scrollToEnd({ animated: true });
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
        <SpendingInfo
          key={item.id}
          members={members}
          selectedMember={item.selectedMember}
          value={item.value}
          note={item.note}
          onValueChange={(text) => {
            const updatedItems = [...spendingItems];
            updatedItems[index].value = text;
            setSpendingItems(updatedItems);
          }}
          onNoteChange={(text) => {
            const updatedItems = [...spendingItems];
            updatedItems[index].note = text;
            setSpendingItems(updatedItems);
          }}
          onMemberChange={(selectedMember) => {
            const updatedItems = [...spendingItems];
            updatedItems[index].selectedMember = selectedMember;
            setSpendingItems(updatedItems);
          }}
        />
      </View>
    </TouchableHighlight>
  );

  const saveSpendingInfo = () => {
    const spendingInfoList = spendingItems.map((item) => {
      const member = members.find(
        (member) => member._id === item.selectedMember
      );

      return {
        member_id: item.selectedMember,
        member_name: member ? member.member_name : "Unknown",
        value: item.value,
        note: item.note,
      };
    });
    console.log("Spending Info List:", spendingInfoList);
    axios
      .put(`https://finance-api-kgh1.onrender.com/api/addPayList/${groupId}`, {
        payments: spendingInfoList,
      })
      .then((response) => {
        setUpdateData(!updateData);
        console.log("Payments added successfully");
        navigation.navigate("CalculateSpending", {
          groupId: groupId,
        });
      })
      .catch((error) => {
        console.error("Failed to add payments:", error);
      });
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
          <Display title={nameGroup} width={250} />
        </View>
        <FlatList
          ref={flatListRef}
          data={spendingItems}
          renderItem={renderSpendingInfo}
          keyExtractor={(item, index) => index.toString()}
          contentContainerStyle={[
            styles.spendingInfoContainer,
            { paddingBottom: 50 },
          ]}
          onContentSizeChange={() => scrollToNewestItem()}
        />
        <View style={styles.buttonContainer}>
          <ButtonHandler
            title="+"
            width={80}
            onPress={() => {
              addNewSpendingItem();
              scrollToNewestItem();
            }}
          />
        </View>
        <View style={styles.splitMoneyButton}>
          <ButtonHandler title="Save" width={250} onPress={saveSpendingInfo} />
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
