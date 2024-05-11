import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import ManageMoneyTeam from "./ManageMoneyTeam";
const Stack = createStackNavigator();
const TeamStack = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="AddExpenses"
        component={AddExpenses}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="AddIncome"
        component={AddIncome}
        options={{ headerShown: false }}
      />
    </Stack.Navigator>
  );
};
export default TeamStack;
