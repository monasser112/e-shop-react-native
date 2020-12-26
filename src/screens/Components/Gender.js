import React from 'react'
import {Text,StyleSheet,FlatList,View} from 'react-native'
import Category from './Category'

const ManPrefernces=['New','Clothing','Urban Collection','Shoes','Accessories','Editorials','Sale'];
const WomanPreferences=['New','Clothing','Teen Collection','Shoes','Bags','Accessories','Editorials','Sale'];

const Gender=({gender,navigation})=>{

    let sex;
    if(gender=='Man'){
     sex=
        <FlatList
           data={ManPrefernces}
           keyExtractor={pref=>pref}
           renderItem={({item})=>{
               return <View>
                   <Category navigation={navigation} category={item} />
               </View>
           }}        
        
         />
    }
    else{
        sex=
        <FlatList
           data={WomanPreferences}
           keyExtractor={pref=>pref}
           renderItem={({item})=>{
               return <View>
                   <Category navigation={navigation} category={item} />
               </View>
           }}        
        
         />
    }
    return(
             <View>
                 {sex}
             </View>
    )
}


const styles=StyleSheet.create({

   


})



export default Gender