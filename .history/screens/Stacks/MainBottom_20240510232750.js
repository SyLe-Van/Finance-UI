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
    <IonIcon name={name} size={25} color={focused ? "#4390f7" : "#BEADFA"} />
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
          backgroundColor: "#",
          borderTopWidth: 0,
        },
      }}
    >
      <Bottom.Screen
        name="HomeStack"
        component={HomeStack}
        options={homeScreenOptions(false, "Home", "home-outline")}
      />
      <Bottom.Screen
        name="Chart"
        component={ChartStack}
        options={homeScreenOptions(false, "Chart", "cellular-outline")}
      />
      <Bottom.Screen
        name="Add"
        component={AddStack}
        options={homeScreenOptions(false, "Add", "add-circle-outline")}
      />
      <Bottom.Screen
        name="Account"
        component={AccountStack}
        options={homeScreenOptions(false, "Account", "person-outline")}
      />
    </Bottom.Navigator>
  );
};

export default MainBottom;