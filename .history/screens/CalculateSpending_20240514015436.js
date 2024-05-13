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
import { Dropdown } from "react-native-element-dropdown";
import Input from "../components/Input";
import { LinearGradient } from "expo-linear-gradient";
// import SpendingInfo from "../components/SpendingInfo";
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
  const [showDropdown, setShowDropdown] = useState(false);
  useEffect(() => {
    if (members.length > 0) {
      setShowDropdown(true);
    }
  }, [members]);
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
        <View style={styles.infoContainer}>
          <View style={styles.name_cost}>
            <Dropdown
              style={styles.dropdown}
              data={members.map((member) => ({
                label: member.member_name,
                value: member._id,
              }))}
              labelField="label"
              valueField="value"
              placeholder="Select Member"
              isVisible={showDropdown}
            />
            <Input
              title="Cost"
              placeholder="10.90 $"
              width={150}
              value={item.value.toString()}
            />
          </View>
          <View style={styles.note}>
            <Input
              title="Notes"
              placeholder="A banana"
              width={315}
              value={item.note}
            />
          </View>
        </View>
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
  spendingInfoContainer: {
    flexGrow: 1,
    marginTop: 20,
    alignSelf: "stretch",
  },
  splitMoneyButton: {
    marginBottom: 50,
    marginLeft: 50,
  },
  nameGroup: {
    marginTop: 20,
    marginLeft: 45,
  },
  infoContainer: {
    marginTop: 5,
    height: 150,
    width: 350,
    borderRadius: 10,
    backgroundColor: "#EDA2DC",
    justifyContent: "center",
    alignItems: "center",
  },
  name_cost: {
    margin: 10,
    display: "flex",
    flexDirection: "row",
  },
  dropdown: {
    width: 150,
    height: 45,
    backgroundColor: "#CF89A5",
    borderRadius: 10,
    paddingHorizontal: 12,
    marginTop: 4,
  },
});
