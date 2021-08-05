
import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { MaterialIcons } from "@expo/vector-icons";

import MainScreen from "../screens/MainScreen";
import Map from "../screens/MapScreen";
import User from "../screens/UserScreen";
import Card from "../screens/Card";

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

function MainStackNavigator() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={MainScreen} options={{title: "Home Screen"}}/>
        <Stack.Screen name="Map" component={Map} options={{title: "Map Screen"}}/>
        <Stack.Screen name="User" component={User} options={{title: "User Screen"}}/>
        <Stack.Screen name="Card" component={Card} options={{title: "Card Screen"}}/>
      </Stack.Navigator>
    </NavigationContainer>
  )
}

export default MainStackNavigator