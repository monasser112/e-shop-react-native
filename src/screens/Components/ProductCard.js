import React from 'react'
import {Text,StyleSheet,Image,View,TouchableOpacity} from 'react-native'


const ProductCard=({price,name,imagesrc,navigation})=>{
    return <TouchableOpacity onPress={()=>navigation.navigate('ProductCardDetails')}>
            <View>
              <Image style={styles.image} source={{uri:imagesrc}} />
              <Text>{name}</Text>
              <Text>EGP{price} </Text>
          </View>
  </TouchableOpacity>
}
const styles=StyleSheet.create({
    image:{
      width:150,
      height:200,
      borderRadius:4
    }
   

  })

  export default ProductCard;