import React,{useState} from 'react';

import {Text,View,Button,TouchableOpacity,FlatList,StyleSheet} from 'react-native'
import Gender from './Components/Gender'
import Category from './Components/Category'

const gender=['Man','Woman'];

const Menu=({navigation})=>{

    const[Category,setCategory]=useState('Man');

    return <View style={styles.background}>

            <View style={styles.genders}>
                <TouchableOpacity activeOpacity={3} onPress={()=>setCategory('Man') }>
                      <Text style={Category=='Man'?styles.activeCategory:styles.genderStyle}>Man</Text>
                </TouchableOpacity>
                   <TouchableOpacity activeOpacity={4} onPress={()=>setCategory('Woman')}>
                       <Text style={Category=='Woman'?styles.activeCategory:styles.genderStyle}>Woman</Text>
                </TouchableOpacity>
            </View>
            <Gender navigation={navigation} gender={Category} />
    </View>
}

const styles=StyleSheet.create({
    background:{
        
    },
    genders:{
        marginTop:50,
        flexDirection: 'row',
        justifyContent: 'space-around'
    },
    genderStyle:{
        fontSize:18,
        fontWeight:'bold'

    },
    activeCategory:{
        fontSize:18,
        fontWeight:'bold',
        borderBottomWidth: 2,
        borderColor: 'black'
        
    }

})


export default Menu;
