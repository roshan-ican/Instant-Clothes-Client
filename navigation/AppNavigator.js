import React from "react";
import { NavigationContainer } from "@react-navigation/native";

import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { ProductList } from "../screens/shop/productsList";
import { ProductDetails } from "../screens/shop/ProductDetailsScreen";
import { Cart } from "../screens/shop/Cart";
import { CartProvider } from "../screens/shop/CartContext";
import Icon from "react-native-vector-icons/FontAwesome5";

import HomeStack from "./HomeStack";
import UserStack from "./UserStack";
import MapStack from "./MapStack";
import { styles } from "styled-system";

const Stack = createNativeStackNavigator();
function App() {
  return (
    <CartProvider>
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen
            name="Products"
            component={ProductList}
            options={({ navigation }) => ({
              title: "Products",
              headerTitleStyle: styles.headerTitle,
              headerRight: () => <CartIcon navigation={navigation} />,
            })}
          />
          <Stack.Screen
            name="ProductDetails"
            component={ProductDetails}
            options={({ navigation }) => ({
              title: "Product Details",
              headerTitleStyle: styles.headerTitle,
              headerRight: () => <CartIcon navigation={navigation} />,
            })}
          />
          <Stack.Screen
            name="Cart"
            component={Cart}
            options={({ navigation }) => ({
              title: "My Cart",
              headerTitleStyle: styles.headerTitle,
              headerRight: () => <CartIcon navigation={navigation} />,
            })}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </CartProvider>
  );
}

const Tab = createBottomTabNavigator();

function MainStackNavigator() {
  return (
    <NavigationContainer>
      <Tab.Navigator
        tabBarOptions={{
          showLabel: false,
          keyboardHidesTabBar: true,
          tabStyle: {
            backgroundColor: "#384259",
          },
          activeTintColor: "#CCA8E9",
          inactiveTintColor: "#CADEFC",
        }}
      >
        <Tab.Screen
          name="homeStack"
          component={HomeStack}
          options={{
            tabBarIcon: ({ color }) => (
              <Icon name="tshirt" color={color} size={30} />
            ),
          }}
        />
        <Tab.Screen
          name="mapStack"
          component={MapStack}
          options={{
            tabBarIcon: ({ color }) => (
              <Icon name="map" color={color} size={30} />
            ),
          }}
        />
        <Tab.Screen
          name="userStack"
          component={UserStack}
          options={{
            tabBarIcon: ({ color }) => (
              <Icon name="user" color={color} size={30} />
            ),
          }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
}
const styles = StyleSheet.create({
  headerTitle: {
    fontSize: 20,
  },
});

export default MainStackNavigator;
