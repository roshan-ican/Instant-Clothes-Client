import React from "react";
import { StyleSheet, Text, View } from "react-native";
import MapView from "../../components/MapView";

const MapScreen = () => {
  return (
    <MapView
      initialRegion={{
        latitude: 32.51922279320279,
        longitude: 74.51706916093826,
        latitudeDelta: 0.007,
        longitudeDelta: 0.007,
      }}
    />
  );
};

export default MapScreen;

const styles = StyleSheet.create({});
