import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { AuthProvider } from "./screens/AuthContext";
import AppNavigator from "./screens/AppNavigator";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import * as SplashScreen from "expo-splash-screen";
import { useState } from "react";
SplashScreen.preventAutoHideAsync();
export default function App() {
  const [appIsReady, setAppIsReady] = useState(false);
  return (
    <AuthProvider>
      <AppNavigator />
    </AuthProvider>
  );
}
