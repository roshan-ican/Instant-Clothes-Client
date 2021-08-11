import React from "react";
import styled from "styled-components/native";
import { StyleSheet, Text, Image, View, TouchableOpacity } from "react-native";

const UserScreen = () => {
  return (
    <View style={styles.container}>
      <View style={styles.header}></View>
      <View style={styles.body}>
        <Text>User Name</Text>
        <View>
          <Text>User Name</Text>
        </View>
        <View>
          <Text>Phone</Text>
        </View>
        <View>
          <Text>Email</Text>
        </View>
        <TouchableOpacity style={styles.infoContainer}>
          <Text>Orders</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  header: {
    backgroundColor: "#00BFFF",
    height: 200,
  },
  name: {
    fontSize: 22,
    color: "#FFFFFF",
    fontWeight: "600",
  },
  body: {
    marginTop: 40,
  },
  bodyContent: {
    flex: 1,
    alignItems: "center",
    padding: 30,
  },
  name: {
    fontSize: 28,
    color: "#696969",
    fontWeight: "600",
  },
  info: {
    fontSize: 16,
    color: "#00BFFF",
    marginTop: 10,
  },
  infoContainer: {
    marginTop: 10,
    height: 45,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 20,
    width: 250,
    borderRadius: 30,
    backgroundColor: "#00BFFF",
  },
  buttonContainer: {
    marginTop: 10,
    height: 45,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 20,
    width: 250,
    borderRadius: 30,
    backgroundColor: "#00BFFF",
  },
});
export default UserScreen;
