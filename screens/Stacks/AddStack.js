import React from "react";
import {
  createStackNavigator,
  CardStyleInterpolators,
} from "@react-navigation/stack";
import AddExpenses from "../FinancialScreens/AddExpenses";
import AddIncome from "../FinancialScreens/AddIncome";

const Stack = createStackNavigator();
const AddStack = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        gestureEnabled: true,
        gestureDirection: "horizontal",
        cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS,
      }}
    >
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
export default AddStack;
