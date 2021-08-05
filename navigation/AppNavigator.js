import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { MaterialIcons } from "@expo/vector-icons";

import Home from "../screens/HomeScreen";
import Map from "../screens/MapScreen";
import User from "../screens/UserScreen";
import Card from "../screens/Card";

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

function MainStackNavigator() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="Home"
        screenOptions={{
          gestureEnabled: true,
          headerStyle: {
            backgroudColor: "#1010101",
          },
          headerTitleStyle: {
            fontWeight: "bold",
          },
          headerTintColor: "ffd700",
          headerBackTitleVisible: false,
        }}
        headerMode="float"
      >
        <Stack.Screen
          name="Home"
          component={Home}
          options={{ title: "Home Screen" }}
        />
        <Stack.Screen
          name="User"
          component={User}
          options={{ title: "User screen" }}
        />
        <Stack.Screen name="Map" component={Map} options={{ title: "Map" }} />
        <Stack.Screen
          name="Card"
          component={Card}
          options={{ title: "Card Screen" }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default MainStackNavigator;
