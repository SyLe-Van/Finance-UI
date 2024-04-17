import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import UpdateIncome from "./UpdateIncome";
import UpdateExpenses from "./UpdateExpenses";
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

export default HomeStack;
