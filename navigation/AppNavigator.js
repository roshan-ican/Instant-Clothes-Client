import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Icon from "react-native-vector-icons/FontAwesome5";

import HomeStack from "./HomeStack";
import UserStack from "./UserStack";
import MapStack from "./MapStack";
import SignUpStack from "./SignUpStack";

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
        <Tab.Screen name="SignUpStack" component={SignUpStack} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}

export default MainStackNavigator;
