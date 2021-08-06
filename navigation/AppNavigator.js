import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { MaterialIcons } from "@expo/vector-icons";

import Home from "../screens/Home/HomeScreen";
import Map from "../screens/Map/MapScreen";
import User from "../screens/User/UserScreen";

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
          headerTintColor: "#ffd700",
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
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default MainStackNavigator;
