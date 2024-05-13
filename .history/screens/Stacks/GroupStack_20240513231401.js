import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import AllGroups from "../AllGroups";
import CreateGroup from "../CreateGroup";
import GroupSpending from "../GroupSpending";
import PaymentResult from "../PaymentResult";
import CalculateSpending from "../CalculateSpending";
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
          headerTitle: "GROUPS",
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
          headerTitle: "NEWS GROUP",
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
          headerTitle: "GROUP SPENDING",
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
    </Stack.Navigator>
  );
};
export default GroupsStack;
