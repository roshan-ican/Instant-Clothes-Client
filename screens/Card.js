import {
  ImageBackground,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import React from "react";

const Card = (props) => {
  return (
    <TouchableOpacity onPress={() => props.navigation.navigate()}>
      <View style={styles.card}>
        <View style={styles.titleContainer}>
          <Text style={styles.title}>Sports shop</Text>
        </View>

        <View style={styles.description}>
          <Text style={styles.descriptionText}>This is the description</Text>
        </View>
      </View>
    </TouchableOpacity>
  );
};
const styles = StyleSheet.create({
  card: {
    shadowColor: "black",
    shadowOpacity: 0.25,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 8,
    borderRadius: 10,
    backgroundColor: "#ffffff",
    elevation: 5,
    height: 300,
    margin: 10,
  },
  titleContainer: {
    height: "15%",
    padding: 10,
  },
  title: {
    fontSize: 18,
    fontWeight: "bold",
    color: "gray",
  },
  description: {
    margin: 10,
  },
  descriptionText: {
    fontSize: 16,
    color: "gray",
  },
});

export default Card;
