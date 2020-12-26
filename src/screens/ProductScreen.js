import React from "react";
import { Text, StyleSheet, View, SafeAreaView } from "react-native";
import ProductList from "./Components/ProuductsList";
import ProductsList from "./Components/ProuductsList";

const ProductScreen = ({ navigation }) => {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <ProductsList navigation={navigation} />
    </SafeAreaView>
  );
};

export default ProductScreen;
