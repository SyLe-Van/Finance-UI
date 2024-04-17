import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import UpdateIncome from "./UpdateIncome";
import UpdateExpenses from "../screens/UpdateExpenses";
import Home from "./Home";
const Stack = createStackNavigator();

const HomeStack = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Home"
        component={Home}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="Update Expenses"
        component={UpdateExpenses}
        options={{ headerShown: true }}
      />
      <Stack.Screen
        name="Update Income"
        component={UpdateIncome}
        options={{ headerShown: true }}
      />
    </Stack.Navigator>
  );
};

export default HomeStack;
