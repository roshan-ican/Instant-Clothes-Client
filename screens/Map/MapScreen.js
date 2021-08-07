import React from "react";
import {
  StyleSheet,
  Text,
  View,
  Dimensions,
  Platform,
  Image,
} from "react-native";
import MapView from "../../components/MapView";
import { Marker, Callout } from "react-native-maps";
import { WebView } from "react-native-webview";

const { width, height } = Dimensions.get("window");

let Im;

Platform.OS == "android" ? (Im = WebView) : (Im = Image);

const MapScreen = () => {
  return (
    <MapView
      initialRegion={{
        latitude: 32.51922279320279,
        longitude: 74.51706916093826,
        latitudeDelta: 0.007,
        longitudeDelta: 0.007,
      }}
    >
      <Marker
        icon={require("../../assets/marker.png")}
        coordinate={{
          latitude: 32.51922279320279,
          longitude: 74.51706916093826,
        }}
      >
        <Callout>
          <View style={{ width: width / 4, height: height / 6 }}>
            <Text>Bata</Text>
            <Im
              style={{ width: width / 3, height: height / 10 }}
              resizeMode="contain"
              source={{ uri: "https://static.toiimg.com/photo/54996872.cms" }}
            />
          </View>
        </Callout>
      </Marker>
    </MapView>
  );
};

export default MapScreen;

const styles = StyleSheet.create({});
