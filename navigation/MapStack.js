import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import MapScreen from "../screens/Map/MapScreen";

const Stack = createStackNavigator();

const MapStack = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerStyle: {
          backgroundColor: "#384259",
        },
      }}
    >
      <Stack.Screen
        name="map"
        component={MapScreen}
        options={{
          headerTitle: "Shops On Map",
        }}
      />
    </Stack.Navigator>
  );
};

export default MapStack;
