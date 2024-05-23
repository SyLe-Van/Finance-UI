import User from "../User";
import { createStackNavigator } from "@react-navigation/stack";
import ChangeMoney from "../AccountScreens/ChangeMoney";
import Premium from "../PaymentScreens/Premium";
import VnPayWebView from "../VnPayWebView";
import FailedPayment from "../PaymentScreens/FailedPayment";
import SucessPayment from "../PaymentScreens/SucessPayment";
import GroupStack from "./GroupStack";
const Stack = createStackNavigator();
const AccountStack = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        options={{
          headerStyle: {
            backgroundColor: "#FDCEDF",
          },
          headerTintColor: "purple",
          headerTitleStyle: {
            fontWeight: "bold",
            fontSize: 20,
          },
        }}
        name="User"
        component={User}
      />
      <Stack.Screen name="ChangeMoney" component={ChangeMoney} />
      <Stack.Screen name="Premium" component={Premium} />
      <Stack.Screen name="VnPayWebView" component={VnPayWebView} />
      <Stack.Screen name="SucessPayment" component={SucessPayment} />
      <Stack.Screen name="FailedPayment" component={FailedPayment} />
      <Stack.Screen
        name="GroupStack"
        component={GroupStack}
        options={{
          headerShown: false,
        }}
      />
    </Stack.Navigator>
  );
};
export default AccountStack;
