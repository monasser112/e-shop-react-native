import React from 'react'
import {Text,StyleSheet,View,TouchableOpacity} from 'react-native'


const Category=({category,navigation})=>{
      
    return <TouchableOpacity onPress={()=>navigation.navigate('Product')}>
               <Text style={styles.category}>{category}</Text>
     </TouchableOpacity>
}


const styles=StyleSheet.create({
    category:{
        fontSize:20,
        marginTop:20,
        marginLeft:20
    }
})




export default Category;