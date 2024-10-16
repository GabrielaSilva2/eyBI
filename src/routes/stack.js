import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import Home from "../screens/home";
import Local from "../screens/local";
import Foto from "../screens/foto";

const Stack = createNativeStackNavigator();

function StackNavigator() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Home"
        component={Home}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="Local"
        component={Local}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="Camera"
        component={Foto}
        options={{ headerShown: false }}
      />
    </Stack.Navigator>
  );
}

export default StackNavigator;