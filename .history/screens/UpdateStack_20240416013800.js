import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import UpdateIncome from "./UpdateIncome";
import UpdateExpenses from "./UpdateExpenses";
const Stack = createStackNavigator();
const UpdateStack = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="UpdateExpenses"
        component={UpdateExpenses}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="UpdateIncome"
        component={UpdateIncome}
        options={{ headerShown: false }}
      />
    </Stack.Navigator>
  );
};
export default UpdateStack;
