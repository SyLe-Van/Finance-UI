import { createStackNavigator } from "@react-navigation/stack";
import ChartYear from "../ChartScreens/ChartYear";
import ChartMonth from "../ChartScreens/ChartMonth";

const Stack = createStackNavigator();
const ChartStack = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        options={{
          headerStyle: {
            backgroundColor: "#BEADFA",
          },
          headerTintColor: "#fff",
          headerTitle: "Chart Month",
          headerTitleStyle: {
            fontWeight: "bold",
            color: "purple",
            fontSize: 20,
          },
        }}
        name="ChartMonth"
        component={ChartMonth}
      />
      <Stack.Screen name="ChartYear" component={ChartYear} />
    </Stack.Navigator>
  );
};
export default ChartStack;
