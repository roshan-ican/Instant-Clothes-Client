import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import CartScreen from "../screens/Cart/CartScreen";

const Stack = createStackNavigator();

const CartStack = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerStyle: {
          backgroundColor: "#384259",
        },
      }}
    >
      <Stack.Screen name="cart" component={CartScreen} />
    </Stack.Navigator>
  );
};

export default CartStack;
