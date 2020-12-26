import React from "react";
import { connect } from "react-redux";
import { StyleSheet, Text, View, FlatList } from "react-native";
import ProductCard from "./ProductCard";
import SearchBar from "./SearchBar";
import { TouchableOpacity } from "react-native-gesture-handler";
import Filters from "./Filters";
import ProductFilter from "../../selectors/ProductFilter";

//const Filters=['Jeans','Shorts','Jackets','Pants','T-Shirts'];

const Products = [
  {
    name: "Jeans Skinny",
    price: 32,
    image: "https://source.unsplash.com/UsQyOSvhTrw/400x400",
    description: "Jeans",
  },
  {
    name: " V T-Shirt",
    price: 40,
    image: "https://source.unsplash.com/WWesmHEgXDs/401x400",
    description: "T-Shirt",
  },

  {
    name: "Basic Bomber Jacket",
    price: 22,
    image: "https://source.unsplash.com/m3RxZs9TsO4/402x400",
    description: "Jackets",
  },

  {
    name: "Ripped Slim Bermuda Shorts",
    price: 42,
    image: "https://source.unsplash.com/_6Uy6nwVohE/403x400",
    description: "SweatShirts",
  },
];

const ProductsList = ({ navigation, expenses }) => {
  return (
    <View>
      <FlatList
        style={{ width: "100%" }}
        numColumns={2}
        ListHeaderComponent={<Filters />}
        data={expenses}
        keyExtractor={(pr) => pr.image}
        renderItem={({ item }) => {
          return (
            <View style={styles.ProductCardContainer}>
              <ProductCard
                navigation={navigation}
                price={item.price}
                name={item.name}
                imagesrc={item.image}
              />
            </View>
          );
        }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  ProductCardContainer: {
    paddingHorizontal: 15,
    paddingVertical: 26,
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-between",
  },
  Filters: {
    flexDirection: "row",
    paddingHorizontal: 15,
    borderColor: "black",
    borderLeftWidth: 1,
    borderTopWidth: 1,
    borderBottomWidth: 1,
    borderRightWidth: 1,
    marginHorizontal: 3,
    borderRadius: 9,
    paddingVertical: 3,
  },
});

const mapStateToProps = (state) => {
  return {
    expenses: ProductFilter(Products, state.filters),
  };
};

export default connect(mapStateToProps)(ProductsList);
