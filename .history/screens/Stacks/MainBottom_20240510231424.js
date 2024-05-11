import React from "react";
import Ionicons from "@react-native-vector-icons/ionicons";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import ChartStack from "../ChartStack";
import AccountStack from "./AccountStack";
import AddStack from "./AddStack";
import HomeStack from "./HomeStack";

const Bottom = createBottomTabNavigator();

const TabIcon = ({ name, focused }) => {
  return (
    <Ionicons name={name} size={25} color={focused ? "#4390f7" : "#BEADFA"} />
  );
};

const homeScreenOptions = (headerShown, name, iconName) => {
  return {
    headerShown,
    tabBarLabel: name,
    tabBarIcon: ({ focused }) => <TabIcon name={iconName} focused={focused} />,
  };
};

const MainBottom = () => {
  return (
    <Bottom.Navigator
      screenOptions={{
        tabBarStyle: {
          backgroundColor: "#ffffff",
          borderTopWidth: 0,
        },
      }}
    >
      <Bottom.Screen
        name="HomeStack"
        component={HomeStack}
        options={homeScreenOptions(false, "Home", "call")}
      />
      <Bottom.Screen
        name="Chart"
        component={ChartStack}
        options={homeScreenOptions(false, "Chart", "call")}
      />
      <Bottom.Screen
        name="Add"
        component={AddStack}
        options={homeScreenOptions(false, "Add", "call")}
      />
      <Bottom.Screen
        name="Account"
        component={AccountStack}
        options={homeScreenOptions(false, "Account", "call")}
      />
    </Bottom.Navigator>
  );
};

export default MainBottom;
