import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import HomeScreen from "../screens/Home/HomeScreen";

const Stack = createStackNavigator();

const HomeStack = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerStyle: {
          backgroundColor: "#384259",
        },
      }}
    >
      <Stack.Screen
        name="home"
        component={HomeScreen}
        options={{
          headerTitle: "instant cloths logo",
        }}
      />
    </Stack.Navigator>
  );
};

export default HomeStack;
