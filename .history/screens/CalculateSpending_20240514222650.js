import React, { useState, useEffect, useRef, useContext } from "react";
import {
  View,
  StyleSheet,
  FlatList,
  KeyboardAvoidingView,
  TouchableHighlight,
  Platform,
} from "react-native";
import axios from "axios";
import Input from "../components/Input";
import { LinearGradient } from "expo-linear-gradient";
import { useNavigation } from "@react-navigation/native";
import ButtonHandler from "../components/ButtonHandler";
import Display from "../components/Display";
import { AuthContext } from "./AuthContext";

export default function CalculateSpending({ route }) {
  const [spendingItems, setSpendingItems] = useState([]);
  const [pressedIndexes, setPressedIndexes] = useState([]);
  const [nameGroup, setNameGroup] = useState("");
  const [members, setMembers] = useState([]);
  const { id } = useContext(AuthContext);
  const flatListRef = useRef(null);
  const navigation = useNavigation();
  const { groupId } = route.params;

  // useEffect(() => {
  //   console.log("spendingItem:", spendingItems);
  // }, [spendingItems]);
  useEffect(() => {
    if (id && groupId) {
      axios
        .get(
          `https://finance-api-kgh1.onrender.com/api/getOneGroupID/${id}/${groupId}`
        )
        .then((response) => {
          const data = response.data;
          // console.log(data);
          setNameGroup(data.name_group);
          const Members = data.member;
          setMembers(Members);
          const payList = data.pay_list.map((item, index) => ({
            id: item._id,
            selectedMember: item.member_name,
            value: item.value,
            note: item.note.toString(),
          }));
          // console.log("PAY_LIST", payList);
          setSpendingItems(payList);
        })
        .catch((error) => {
          console.error("Error fetching group information:", error);
        });
    }
  }, [id, groupId]);

  // useEffect(() => {
  //   console.log("members updated:", members);
  // }, [members]);

  const renderSpendingInfo = ({ item, index }) => (
    <TouchableHighlight
      underlayColor="#BEADFA"
      style={[styles.touch, pressedIndexes.includes(index) && styles.pressed]}
    >
      <View style={styles.spendingInfoWrapper}>
        <View style={styles.infoContainer}>
          <View style={styles.name_cost}>
            <Input
              title="Name: "
              width={150}
              value={item.selectedMember}
              editable={false}
            />
            <Input
              title="Cost"
              width={150}
              value={item.value.toString()}
              editable={false}
            />
          </View>
          <View style={styles.note}>
            <Input
              title="Notes"
              width={315}
              value={item.note.toString()}
              editable={false}
            />
          </View>
        </View>
      </View>
    </TouchableHighlight>
  );
  const splitBillHandler = () => {
    navigation.navigate("PaymentResult", {
      groupId: groupId,
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
        />
        <View style={styles.buttonContainer}>
          <ButtonHandler
            title="Update Information"
            width={150}
            // onPress={splitBillHandler}
          />
          <ButtonHandler
            title="Splitting the bill"
            width={150}
            onPress={splitBillHandler}
          />
        </View>
      </KeyboardAvoidingView>
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  buttonContainer: {
    display: "flex",
    flexDirection: "row",
    backgroundColor: "green",
    marginBottom: 60,
  },
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
    marginBottom: 30,
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
