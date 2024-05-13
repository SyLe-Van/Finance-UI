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
import { useNavigation, useRoute } from "@react-navigation/native";
import Display from "../components/Display";
import { AuthContext } from "./AuthContext";

export default function CalculateSpending() {
  const [spendingItems, setSpendingItems] = useState([]);
  const [pressedIndexes, setPressedIndexes] = useState([]);
  const [nameGroup, setNameGroup] = useState("");
  const [members, setMembers] = useState([]);
  const { id, groupId, updateData, setUpdateData } = useContext(AuthContext);
  const flatListRef = useRef(null);
  useEffect(() => {
    console.log("members updatedd:", members);
  }, [members]);
  useEffect(() => {
    console.log("spendingItem:", spendingItems);
  }, [spendingItems]);
  useEffect(() => {
    if (id && groupId) {
      axios
        .get(
          `https://finance-api-kgh1.onrender.com/api/getOneGroupID/${id}/${groupId}`
        )
        .then((response) => {
          const data = response.data;
          console.log(data);
          setNameGroup(data.name_group);
          const Members = data.member;
          setMembers(Members);
          const payList = data.pay_list.map((item, index) => ({
            id: item._id,
            selectedMember: item.member_name,
            value: item.value,
            note: item.note.toString(),
          }));
          console.log("PAY_LIST", payList);
          setSpendingItems(payList);
        })
        .catch((error) => {
          console.error("Error fetching group information:", error);
        });
    }
  }, [id, groupId]);
  const renderSpendingInfo = ({ item, index }) => (
    <TouchableHighlight
      underlayColor="#BEADFA"
      style={[styles.touch, pressedIndexes.includes(index) && styles.pressed]}
    >
      <View style={styles.spendingInfoWrapper}>
        <SpendingInfo
          members={members}
          key={item.id}
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
        />
        <View style={styles.splitMoneyButton}>
          <ButtonHandler title="Splitting the bill" width={250} />
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
