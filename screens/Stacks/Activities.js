import { createStackNavigator } from "@react-navigation/stack";
import ChartYear from "../ChartScreens/ChartYear";
import ChartMonth from "../ChartScreens/ChartMonth";

const Stack = createStackNavigator();
const Activities = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="ChartMonth" component={ChartMonth} />
      <Stack.Screen name="ChartYear" component={ChartYear} />
    </Stack.Navigator>
  );
};
export default Activities;
