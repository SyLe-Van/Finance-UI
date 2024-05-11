import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import ManageMoneyTeam from "../ManageMoneyTeam";
import InformationTeam from "../InformationTeam";
const Stack = createStackNavigator();
const GroupsStack = () => {
  return (
    <Stack.Navigator screenOptions={{}}>
      <Stack.Screen
        name="ManageMoneyTeam"
        component={ManageMoneyTeam}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="InformationTeam"
        component={InformationTeam}
        options={{ headerShown: false }}
      />
    </Stack.Navigator>
  );
};
export default GroupsStack;
