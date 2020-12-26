import React, { Component ,useState} from "react";
import { StyleSheet, Text, View, Slider } from "react-native";
 
 

const Slide=()=>{


    const [images,setImages]=useState([
        "https://source.unsplash.com/1024x768/?nature",
        "https://source.unsplash.com/1024x768/?water",
        "https://source.unsplash.com/1024x768/?girl",
        "https://source.unsplash.com/1024x768/?tree"
     ]);


console.log(images)
return <View style={styles.container}>
        <SliderBox
           inactiveDotColor="#90A4AE"
           sliderBoxHeight={500}
           images={images}
           onCurrentImagePressed={index =>
            console.warn(`image ${index} pressed`)
          }
        />
      </View>


        }


 
const styles = StyleSheet.create({
  container: {
    flex: 1
  }
});

export default Slide;
