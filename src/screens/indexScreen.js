import React, { useState, Component, useRef } from "react";
import SearchBar from "./Components/SearchBar";
import {
  Text,
  View,
  Button,
  TouchableOpacity,
  StyleSheet,
  Image,
  ScrollView,
} from "react-native";
import CollectionList from "./Components/CollectionList";
import Carousell from "./Components/Carousel";
import image1 from "../images/2.jpg";
import image2 from "../images/4.jpg";
import Slide from "./Components/SliderBox";

import { SliderBox } from "react-native-image-slider-box";

const imagess = [
  "https://source.unsplash.com/h5cd51KXmRQ/400x400",
  "https://source.unsplash.com/RQifojSgd2o/400x400",
  "https://source.unsplash.com/idoedMZ732E/400x400",
  "https://source.unsplash.com/quddu_dZKkQ/400x400",
];

const searchApi = () => {
  console.log("Search Api From Inside IndexScreen");
  console.log("Hello from gitt");
  console.log("Hello From tri2et Mido");
};

const indexScreen = () => {
  //const carouselRef = useRef(0);

  const [term, setTerm] = useState("");

  return (
    <>
      <SearchBar term={term} onTermChange={setTerm} onTermSubmit={searchApi} />
      <SliderBox
        images={imagess}
        //   onCurrentImagePressed={index =>
        //   console.warn(`image ${index} pressed`)
        // }
      />

      <CollectionList />
    </>
  );
};

const styles = StyleSheet.create({
  /*searchBar:{
        marginTop:10,
        backgroundColor:'#f01',
        height:150,
        marginHorizontal:15,
        borderRadius:15,
        flexDirection:'row',
        marginBottom:10

    },*/
});
export default indexScreen;
