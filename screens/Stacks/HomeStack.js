import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import UpdateIncome from "../FinancialScreens/UpdateIncome";
import UpdateExpenses from "../FinancialScreens/UpdateExpenses";
import Home from "../Home";
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
        options={{
          headerTitle: "Update Expense",
          headerTitleStyle: {
            fontSize: 20,
            fontWeight: "bold",
          },
          headerStyle: {
            backgroundColor: "#FDCEDF",
          },
        }}
      />
      <Stack.Screen
        name="UpdateIncome"
        component={UpdateIncome}
        options={{
          headerTitle: "Update Income",
          headerTitleStyle: {
            fontSize: 20,
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

export default HomeStack;
