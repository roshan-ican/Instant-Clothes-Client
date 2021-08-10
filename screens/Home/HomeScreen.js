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

const HomeScreen = () => {
  return (
    <ImageBackground
      style={{ flex: 1 }}
      source={require("../../assets/imageBackground.jpg")}
    >
      <ScrollView style={styles.main}>
        <View style={styles.mainTextView}>
          <Text style={styles.mainGreeting}>Hello, Ibrahim</Text>
          <Text style={styles.mainText}>
            Find clothes in your area and get them in less then 1 hour.
          </Text>
        </View>
        <View
          style={{
            width: "85%",
            alignSelf: "center",
            margin: 15,
          }}
        >
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
        </View>
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
    margin: 20,
    color: "#C490E4",
  },
  mainText: {
    fontFamily: "PaletteMosaic",
    fontSize: 23,
    textAlign: "center",
    color: "orange",
    marginTop: 3,
  },
});

export default HomeScreen;
