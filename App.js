import { StatusBar } from "expo-status-bar";
import React, { useState } from "react";
import AppLoading from "expo-app-loading";
import MainStackNavigator from "./navigation/AppNavigator";
import * as Font from "expo-font";
import { NativeBaseProvider } from "native-base";
import { name as appName } from "./app.json";
import { Provider } from "react-redux";
import {connect} from 'react-redux'
import { changeCount } from "./redux/actions/counts";
import {bindActionCreators} from 'redux';

import configureStore from "./redux/store";
const store = configureStore();

const RNRedux = () => (
  <Provider store={store}>
    <App />
  </Provider>
);

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
  return (
    <NativeBaseProvider>
      <MainStackNavigator />
    </NativeBaseProvider>
  );
}

AppRegistry.registerComponent(appName, () => RNRedux);
