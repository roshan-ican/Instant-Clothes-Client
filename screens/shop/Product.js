import React from "react";
import { Text, Image, View, StyleSheet, TouchableOpacity } from "react-native";
export function Product({ name, price, image, onPress }) {
  return (
    <TouchableOpacity style={style.card} onPress={onPress}>
      <Image style={StyleSheet.thumb} source={image} />
      <View style={style.information}>
        <Text style={styles.name}>{name}</Text>
        <Text style={styles.price}>${price}</Text>
      </View>
    </TouchableOpacity>
  );
}
const styles = StyleSheet.create({
  card: {
    backgroundColor: "white",
    borderRadius: 16,
    shadowOpacity: 0.2,
    shadowColor: "black",
    shadowOffset: {
      height: 0,
      width: 0,
    },
    elevation: 1,
    marginVertical: 20,
  },
  thumb: {
    height: 260,
    borderTopLeftRadius: 16,
    borderTopRightRadius: 16,
    width: "100%",
  },
  infoContainer: {
    padding: 16,
  },
  name: {
    fontSize: 22,
    fontWeight: "bold",
  },
  price: {
    fontSize: 16,
    fontWeight: "600",
    marginBottom: 8,
  },
});
//The product component is responsible for rendering a product when the name, price, and image properties are provided