import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import AddGroup from "../AddGroup";
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
        name="AddGroup"
        component={AddGroup}
        options={{ headerShown: false }}
      />
      <Stack.Screen name="InfoGroup" component={InfoGroup} />
    </Stack.Navigator>
  );
};
export default GroupsStack;
