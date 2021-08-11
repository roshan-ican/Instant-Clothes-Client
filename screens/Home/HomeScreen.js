import React from "react";
import {
  StyleSheet,
  Text,
  View,
  Dimensions,
  ImageBackground,
  ScrollView,
} from "react-native";
import { Input, Icon } from "native-base";
import { Ionicons } from "@expo/vector-icons";

const { height, width } = Dimensions.get("window");
import styled from "styled-components/native";
const Search = styled.View`
  width: 85%;
  font-weight: bold;
  align-self: center;
  padding-top: 35px;
  font-size: 25px;
`;

const HomeScreen = () => {
  return (
    <ImageBackground
      style={{ flex: 1 }}
      source={require("../../assets/imageBackground.jpg")}
    >
      <ScrollView style={styles.main}>
        <View style={styles.mainTextView}>
          <Text style={styles.mainGreeting}>Hi, Ibrahim</Text>
          <Text style={styles.mainText}>
            Find clothes in your city and get them delivered within
            hours.
          </Text>
        </View>
        <Search>
          <Input
            placeholder="Find Shops"
            variant="filled"
            width="100%"
            bg="gray.200"
            borderRadius={15}
            py={2}
            px={3}
            InputLeftElement={
              <Icon
                size="sm"
                ml={3}
                size={6}
                color="gray.400"
                as={<Ionicons name="ios-search" />}
              />
            }
          />
        </Search>
      </ScrollView>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  main: { flex: 1, margin: 5 },
  mainTextView: {
    width: width / 1.1,
  },
  mainGreeting: {
    fontFamily: "PaletteMosaic",
    fontSize: 25,
    margin: 14,
    color: "#c490e4",
  },
  mainText: {
    fontFamily: "PaletteMosaic",
    fontSize: 20,
    textAlign: "center",
    color: "#29a8ab",
    marginTop: 3,
  },
});

export default HomeScreen;
