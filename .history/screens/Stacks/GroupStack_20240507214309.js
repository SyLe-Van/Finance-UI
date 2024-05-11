import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import ManageMoneyTeam from "../ManageMoneyTeam";
import AddGroup from "../AddGroup";
const Stack = createStackNavigator();
const GroupsStack = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerTitle: "Group",
      }}
    >
      <Stack.Screen
        name="ManageMoneyTeam"
        component={ManageMoneyTeam}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="AddGroup"
        component={AddGroup}
        options={{ headerShown: false }}
      />
    </Stack.Navigator>
  );
};
export default GroupsStack;
