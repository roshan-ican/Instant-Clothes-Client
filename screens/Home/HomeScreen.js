import React from "react";
import {
  StyleSheet,
  Text,
  View,
  Dimensions,
  ImageBackground,
  ScrollView,
  FlatList,
} from "react-native";
import { Input, Icon } from "native-base";
import { Ionicons } from "@expo/vector-icons";
import Banner from "../../components/Banner";
import ProductData from "../../data/Product.json";
import ProductCard from "../../components/ProductCard";

const { height, width } = Dimensions.get("window");
import styled from "styled-components/native";
const Search = styled.View`
  width: 85%;
  font-weight: bold;
  align-self: center;
  padding-top: 35px;
  font-size: 25px;
`;
const Titlebar = styled.View`
  width: 100%;
  margin-top: 50px;
  padding-left: 80px;
`;

const Avatar = styled.Image``;

const Title = styled.Text`
  font-size: 20px;
  font-weight: 500;
  color: #b8bece;
  font-family: PalleteMosaic;
`;

const Name = styled.Text`
  font-size: 20px;
  color: #3c4560;
  font-weight: bold;
  font-family: PalleteMosaic;
`;
const HomeScreen = () => {
  return (
    <ImageBackground
      style={{ flex: 1 }}
      source={require("../../assets/imageBackground.jpg")}
    >
      <ScrollView showsVerticalScrollIndicator={false} style={styles.main}>
        <View style={styles.mainTextView}>
          <Text style={styles.mainGreeting}>Welcome, Ibrahim</Text>
          <Text style={styles.mainText}>
            Find clothes in your city and get them delivered within hours.
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
        <View
          style={{
            marginTop: 10,
          }}
        >
          <Banner />
        </View>
        <View
          style={{
            alignItems: "center",
          }}
        >
          <Text
            style={{
              fontFamily: "PaletteMosaic",
              fontSize: 30,
              margin: 14,
              color: "#c490e4",
            }}
          >
            Featured Products
          </Text>
        </View>
        <View>
          <View style={styles.list}>
            {ProductData.map((item) => (
              <View style={{ width: "50%" }}>
                <ProductCard
                  image={item.image}
                  name={item.name}
                  price={item.price}
                  countInStock={item.countInStock}
                />
              </View>
            ))}
          </View>
          {/* <FlatList
            data={ProductData}
            key={(item) => item.id}
            horizontal={false}
            numColumns={2}
            renderItem={({ item }) => (
              <View style={{ width: width / 2 }}>
                <ProductCard
                  image={item.image}
                  name={item.name}
                  price={item.price}
                  countInStock={item.countInStock}
                />
              </View>
            )}
          /> */}
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
    margin: 14,
    color: "#3c4560",
  },
  mainText: {
    fontFamily: "PaletteMosaic",
    fontSize: 20,
    textAlign: "center",
    color: "#c490e4",
    marginTop: 3,
  },
  list: {
    height: height * 2.3,
    flex: 1,
    flexDirection: "row",
    alignItems: "flex-start",
    flexWrap: "wrap",
    backgroundColor: "transparent",
  },
});

export default HomeScreen;
