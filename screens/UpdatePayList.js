import React, { useState, useEffect, useRef, useContext } from "react";
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
import { useNavigation } from "@react-navigation/native";
import Display from "../components/Display";
import { AuthContext } from "./AuthContext";

export default function UpdatePayList({ route }) {
  const [spendingItems, setSpendingItems] = useState([]);
  const [nextId, setNextId] = useState(0);
  const [nameGroup, setNameGroup] = useState("");
  const [members, setMembers] = useState([]);

  const [backgroundColor, setBackgroundColor] = useState(null);
  const flatListRef = useRef(null);
  const navigation = useNavigation();
  const { groupId } = route.params;
  const { id, updateData, setUpdateData } = useContext(AuthContext);

  // ----------------------------------------------------------------
  function handlePressIn() {
    const newColor = "#BEADFA";
    setBackgroundColor(newColor);
  }
  function handlePressOut() {
    setBackgroundColor(null);
  }
  function confirmDelete(itemId) {
    Alert.alert(
      "Confirm Deletion",
      "Are you sure you want to delete this spending item?",
      [
        {
          text: "Cancel",
          style: "cancel",
        },
        {
          text: "OK",
          onPress: () => {
            handleDeleteItem(itemId);
          },
          style: "destructive",
        },
      ],
      { cancelable: true }
    );
  }
  async function handleDeleteItem(itemId) {
    try {
      await axios.delete(
        `https://finance-api-kgh1.onrender.com/api/deletePayList/${groupId}/${itemId.id}`
      );
      console.log("Spending item deleted successfully");
      setSpendingItems((prevItems) =>
        prevItems.filter((item) => item.id !== itemId.id)
      );
      setUpdateData((prevData) => !prevData);
    } catch (error) {
      console.error(`Error deleting : `, error);
    }
  }
  const handleLongPress = (itemId) => {
    const buttons = [
      {
        text: "Delete",
        onPress: () => {
          confirmDelete(itemId);
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
  //   ----------------------------------------------------------------
  // get spending list from server
  useEffect(() => {
    if (id && groupId) {
      axios
        .get(
          `https://finance-api-kgh1.onrender.com/api/getOneGroupID/${id}/${groupId}`
        )
        .then((response) => {
          const data = response.data;
          // console.log("DATA", data);
          setNameGroup(data.name_group);
          const Members = data.member;
          // console.log("members", Members);
          setMembers(Members);
          const payList = data.pay_list.map((item, index) => ({
            id: item._id,
            selectedMember: item.member_id,
            value: item.value,
            note: item.note.toString(),
          }));
          //   console.log("PAY_LIST", payList);
          setSpendingItems(payList);
        })
        .catch((error) => {
          console.error("Error fetching group information:", error);
        });
    }
  }, [id, groupId]);
  useEffect(() => {
    spendingItems.forEach((item) => {
      console.log("Selected Item: ", item.selectedMember);
    });
  }, [spendingItems]);
  // ----------------------------------------------------------------
  //Create new spending Items and push into state
  const addNewSpendingItem = () => {
    const randomMember = members[Math.floor(Math.random() * members.length)];
    const newId = Date.now().toString();
    const newItem = {
      id: newId,
      member_id: randomMember._id,
      member_name: randomMember.member_name,
      value: "",
      note: "",
    };
    // console.log("New Spending Item", newItem);
    axios
      .put(`https://finance-api-kgh1.onrender.com/api/addPayList/${groupId}`, {
        payments: [newItem],
      })
      .then((response) => {
        const responseData = response.data;
        // console.log("Data from API:", responseData);
        const newSpendingItem = responseData.payments;
        // console.log("New Spending Item from API:", newSpendingItem);

        // Thêm mục mới vào state spendingItems sau khi nhận được dữ liệu từ API
        const configNewSpendingItems = {
          id: newSpendingItem._id,
          selectedMember: newSpendingItem.selectedMember,
          value: newSpendingItem.value,
          note: newSpendingItem.note,
        };
        // console.log("New ID:", configNewSpendingItems.id);
        setSpendingItems((prevItems) => [...prevItems, configNewSpendingItems]);
        setNextId((prevId) => prevId + 1);
        // console.log("New spending list:");
        // console.log([...spendingItems, newSpendingItem]);
      })
      .catch((error) => {
        console.error("Failed to add new spending item:", error);
      });
  };
  const scrollToNewestItem = () => {
    flatListRef.current.scrollToEnd({ animated: true });
  };
  //----------------------------------------------------------------
  const handleMemberChange = (index, selectedMember) => {
    const updatedItems = [...spendingItems];
    updatedItems[index].selectedMember = selectedMember;
    setSpendingItems(updatedItems); // This triggers a re-render
  };

  const renderSpendingInfo = ({ item, index }) => (
    <TouchableHighlight
      onPressIn={handlePressIn}
      onPressOut={handlePressOut}
      onLongPress={() => handleLongPress(item)}
      underlayColor="#BEADFA"
      style={[styles.touch]}
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
          onMemberChange={(selectedMember) =>
            handleMemberChange(index, selectedMember)
          }
        />
      </View>
    </TouchableHighlight>
  );
  // ----------------------------------------------------------------
  //Update spending list
  const saveSpendingInfo = () => {
    const spendingInfoList = spendingItems.map((item) => {
      const member = members.find(
        (member) => member._id === item.selectedMember
      );

      return {
        paylistId: item.id,
        member_id: item.selectedMember,
        member_name: member ? member.member_name : "Unknown",
        value: item.value,
        note: item.note,
      };
    });
    console.log("Spending Info List send to server: ", spendingInfoList);
    axios
      .put(
        `https://finance-api-kgh1.onrender.com/api/updatePayList/${groupId}`,
        {
          paylist_lst: spendingInfoList,
        }
      )
      .then((response) => {
        console.log("Response:", response.data);
        setUpdateData(!updateData);
        console.log("Update spending list successfully");
        navigation.navigate("CalculateSpending", {
          groupId: groupId,
        });
      })
      .catch((error) => {
        console.error("Failed to update spending list:", error);
      });
  };
  // ----------------------------------------------------------------
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
          <ButtonHandler
            title="Update"
            width={250}
            onPress={saveSpendingInfo}
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
