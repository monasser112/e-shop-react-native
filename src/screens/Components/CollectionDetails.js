import React from 'react'
import {Text,View,StyleSheet,Image} from 'react-native'
import Title from './Title'


const CollectionDetails=({src,title})=>{

    return <View style={styles.details}>
   
    <Image
     style={styles.image}
     source={{uri:`${src}`}}
      />

    <Title title={title} />
  </View>

}

const styles=StyleSheet.create({
  details:{
      flex:1,
      alignItems:'center'
  },
  image:{
      width:300,
      height:400,
      borderRadius:4
    },
 

  })

export default CollectionDetails;