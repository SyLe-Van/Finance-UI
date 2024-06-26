import React, { useState, useEffect, useRef, useContext } from "react";
import {
  View,
  StyleSheet,
  FlatList,
  KeyboardAvoidingView,
  TouchableHighlight,
  Alert,
  Platform,
  ImageBackground,
} from "react-native";
import axios from "axios";
import Input from "../../components/Input";
import { LinearGradient } from "expo-linear-gradient";
import { useNavigation } from "@react-navigation/native";
import ButtonHandler from "../../components/ButtonHandler";
import Display from "../../components/Display";
import { AuthContext } from "../AuthContext";

export default function CalculateSpending({ route }) {
  const [spendingItems, setSpendingItems] = useState([]);
  const [pressedIndexes, setPressedIndexes] = useState([]);
  const [nameGroup, setNameGroup] = useState("");
  const [members, setMembers] = useState([]);
  const { id, updateData, setUpdateData } = useContext(AuthContext);
  const flatListRef = useRef(null);
  const navigation = useNavigation();
  const { groupId } = route.params;
  useEffect(() => {
    if (groupId) {
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
  }, [groupId, updateData]);
  const renderSpendingInfo = ({ item, index }) => (
    <TouchableHighlight
      underlayColor="#BEADFA"
      style={[styles.touch, pressedIndexes.includes(index) && styles.pressed]}
    >
      <ImageBackground
        source={require("../../assets/backgroud-component.png")}
        style={styles.infoContainer}
        imageStyle={{ borderRadius: 10 }}
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
      </ImageBackground>
    </TouchableHighlight>
  );
  const splitBillHandler = () => {
    navigation.navigate("PaymentResult", {
      groupId: groupId,
    });
  };

  // ----------------------------------------------------------------

  const updatePayListHandler = () => {
    setUpdateData(!updateData);
    navigation.navigate("UpdatePayList", {
      groupId: groupId,
    });
  };

  // -----------------------------------------------------------------
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
          <Display title={nameGroup} width={350} />
        </View>
        <FlatList
          ref={flatListRef}
          data={spendingItems}
          renderItem={renderSpendingInfo}
          keyExtractor={(item, index) => index.toString()}
          contentContainerStyle={[
            styles.spendingInfoContainer,
            {
              paddingBottom: 50,
              alignItems: "center",
            },
          ]}
        />
        <View style={styles.buttonHandler}>
          <ButtonHandler
            title="Update"
            width={170}
            onPress={updatePayListHandler}
          />
          <ButtonHandler
            title="Splitting the bill"
            width={170}
            onPress={splitBillHandler}
          />
        </View>
      </KeyboardAvoidingView>
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  buttonHandler: {
    width: 350,
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 80,
    marginLeft: 18,
    marginTop: 10,
  },
  rootContainer: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  spendingInfoContainer: {
    flexGrow: 1,
    marginTop: 20,
    alignSelf: "stretch",
  },
  nameGroup: {
    marginTop: 20,
  },
  infoContainer: {
    marginTop: 5,
    height: 150,
    width: 350,
    borderRadius: 10,
    justifyContent: "center",
    alignItems: "center",
  },
  name_cost: {
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
