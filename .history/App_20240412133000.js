import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { AuthProvider } from "./screens/AuthContext";
import AppNavigator from "./screens/AppNavigator";
import { GestureHandlerRootView } from "react-native-gesture-handler";
export default function App() {
  return (
    <AuthProvider>
      <GestureHandlerRootView>
        <AppNavigator />
      </GestureHandlerRootView>
    </AuthProvider>
  );
}
