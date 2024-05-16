import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import AllGroups from "../AllGroups";
import CreateGroup from "../CreateGroup";
import GroupSpending from "../GroupSpending";
import PaymentResult from "../PaymentResult";
import CalculateSpending from "../CalculateSpending";
import UpdatePayList from "../UpdatePayList";
const Stack = createStackNavigator();
const GroupsStack = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerBackTitle: "",
      }}
    >
      <Stack.Screen
        name="AllGroups"
        component={AllGroups}
        options={{
          headerTitle: "Groups",
          headerTitleStyle: {
            fontSize: 18,
            fontWeight: "bold",
          },
          headerStyle: {
            backgroundColor: "#FDCEDF",
          },
        }}
      />
      <Stack.Screen
        name="CreateGroup"
        component={CreateGroup}
        options={{
          headerTitle: "News Group",
          headerTitleStyle: {
            fontSize: 18,
            fontWeight: "bold",
          },
          headerStyle: {
            backgroundColor: "#FDCEDF",
          },
        }}
      />
      <Stack.Screen
        name="GroupSpending"
        component={GroupSpending}
        options={{
          headerTitle: "Group Spending",
          headerTitleStyle: {
            fontSize: 18,
            fontWeight: "bold",
          },
          headerStyle: {
            backgroundColor: "#FDCEDF",
          },
        }}
      />
      <Stack.Screen
        name="PaymentResult"
        component={PaymentResult}
        options={{
          headerTitle: "Payment Result",
          headerTitleStyle: {
            fontSize: 18,
            fontWeight: "bold",
          },
          headerStyle: {
            backgroundColor: "#FDCEDF",
          },
        }}
      />
      <Stack.Screen
        name="CalculateSpending"
        component={CalculateSpending}
        options={{
          headerTitle: "Calculate Spending",
          headerTitleStyle: {
            fontSize: 18,
            fontWeight: "bold",
          },
          headerStyle: {
            backgroundColor: "#FDCEDF",
          },
        }}
      />
      <Stack.Screen
        name="UpdatePayList"
        component={UpdatePayList}
        options={{
          headerTitle: "Group Spending",
          headerTitleStyle: {
            fontSize: 18,
            fontWeight: "bold",
          },
          headerStyle: {
            backgroundColor: "#FDCEDF",
          },
        }}
      />
    </Stack.Navigator>
  );
};
export default GroupsStack;
