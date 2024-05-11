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
      screenOptions={{
        // headerStyle: { backgroundColor: "#351401" },
        // headerTintColor: "white",
        // sceneContainerStyle: { backgroundColor: "#3f2f25" },
        headerBackTitle: "Back",
        // drawerContentStyle: { backgroundColor: "#351401" },
        // drawerInactiveTintColor: "white",
        // drawerActiveTintColor: "#351401",
        // drawerActiveBackgroundColor: "#e4baa1",
      }}
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
