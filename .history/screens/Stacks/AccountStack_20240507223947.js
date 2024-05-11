import User from "../User";
import { createStackNavigator } from "@react-navigation/stack";
import ChangeMoney from "../ChangeMoney";
import Premium from "../Premium";
import VnPayWebView from "../VnPayWebView";
import FailedPayment from "../FailedPayment";
import SucessPayment from "../SucessPayment";
// import ManageMoneyTeam from "./ManageMoneyTeam";
import GroupStack from "./GroupStack";
const Stack = createStackNavigator();
const AccountStack = () => {
  return (
    <Stack.Navigator
    // screenOptions={{
    //   headerBackTitle: "",
    // }}
    >
      <Stack.Screen name="User" component={User} />
      <Stack.Screen name="ChangeMoney" component={ChangeMoney} />
      <Stack.Screen name="Premium" component={Premium} />
      <Stack.Screen name="VnPayWebView" component={VnPayWebView} />
      <Stack.Screen name="SucessPayment" component={SucessPayment} />
      <Stack.Screen name="FailedPayment" component={FailedPayment} />
      <Stack.Screen
        name="GroupStack"
        component={GroupStack}
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
export default AccountStack;
