import React from 'react'
import {StyleSheet,Text,View} from 'react-native'


const Title=({title})=>{
    return <View style={styles.wrapper}>
          <Text style={styles.title}>{title}</Text>
        </View>
    
}


const styles=StyleSheet.create({
    wrapper:{
       
    },

    title:{
        fontSize:18,
        marginRight:170,
        marginBottom:10,
        borderBottomColor:'black',
        borderBottomWidth:2
    }
});



export default Title;