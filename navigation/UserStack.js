import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import UserScreen from "../screens/User/UserScreen";

const Stack = createStackNavigator();

const UserStack = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerStyle: {
          backgroundColor: "#384259",
        },
      }}
    >
      <Stack.Screen name="user" component={UserScreen} />
    </Stack.Navigator>
  );
};

export default UserStack;
