import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import ManageMoneyTeam from "../ManageMoneyTeam";
import InfoGroup from "../InfoGroup";
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
        name="InfoGroup"
        component={InfoGroup}
        options={{ headerShown: false }}
      />
    </Stack.Navigator>
  );
};
export default GroupsStack;
