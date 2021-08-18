import React from "react";
import { View, Text, Button, StyleSheet } from "react-native";

const LoginScreen = () => {
  return (
    <View>
      <Text>LoginScreen</Text>
      <Button title="click here" onPress={() => alert("Button Clicked")} />
    </View>
  );
};

export default LoginScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
});
