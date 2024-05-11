import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import AddGroup from "../AddGroup";
import InfoGroup from "../InfoGroup";
const Stack = createStackNavigator();
const GroupsStack = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerTitle: "",
      }}
    >
      <Stack.Screen
        name="AddGroup"
        component={AddGroup}
        options={{
          headerTitle: "ADD GROUPS",
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
        name="InfoGroup"
        component={InfoGroup}
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
    </Stack.Navigator>
  );
};
export default GroupsStack;
