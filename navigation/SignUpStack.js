import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import HomeScreen from "../screens/signUp/SignUpScreen";
import signUpScreen from "../screens/signUp/SignUpScreen";

const Stack = createStackNavigator();

const SignUpStack = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerStyle: {
          backgroundColor: "#384259",
        },
      }}
    >
      <Stack.Screen name="signup" component={signUpScreen} />
    </Stack.Navigator>
  );
};

export default SignUpStack;
