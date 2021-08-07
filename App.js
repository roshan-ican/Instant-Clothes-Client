import { StatusBar } from "expo-status-bar";
import React, { useState } from "react";
import AppLoading from "expo-app-loading";
import MainStackNavigator from "./navigation/AppNavigator";
import * as Font from "expo-font";

const loadFonts = () => {
  return Font.loadAsync({
    PaletteMosaic: require("./assets/fonts/PaletteMosaic-Regular.ttf"),
  });
};

export default function App() {
  const [load, setLoad] = useState(true);

  if (load) {
    return (
      <AppLoading
        startAsync={loadFonts}
        onFinish={() => {
          setLoad(false);
        }}
        onError={() => {
          setLoad(false);
        }}
      />
    );
  }
  return <MainStackNavigator />;
}
