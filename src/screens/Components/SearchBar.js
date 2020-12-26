import React,{useState} from 'react';
import {View,Text,StyleSheet,TextInput} from 'react-native'
import {Feather} from '@expo/vector-icons'
import { connect } from 'react-redux';
import { setTextFilter} from '../../actions/filters';
import { Searchbar } from 'react-native-paper';




const SearchBar=({term,onTermChange,onTermSubmit,filters,dispatch})=>{

    const [input,setInput]=useState('');
    return <View style={styles.backgroundStyle}>
             <Feather style={{top:10}}name="search" size={30}/>
         <TextInput 
          autoCapitalize="none"
          autoCorrect={false}
          style={styles.inputStyle}
          placeholder="Search"
          value={term}
          onChangeText={onTermChange}
          onEndEditing={onTermSubmit}
           />
           {/* <TextInput
                  value={filters.text}
                  onChangeText={(e) => {
                dispatch(setTextFilter(e.targe));
      }}
    /> */}


    

    </View>
}

const styles=StyleSheet.create({
    backgroundStyle:{
        marginTop:30,
        backgroundColor:'#F0EEEE',
        height:50,
        marginHorizontal:15,
        borderRadius:15,
        flexDirection:'row',
        marginBottom:10
    },
    inputStyle:{
       
        flex:1,
        fontSize:18,
        marginLeft:4
    },
    iconStyle:{
        fontSize:35,
        alignSelf:'center',
        marginHorizontal:15
    }
});
const mapStateToProps = (state) => {
    return {
      filters: state.filters
    };
  };
  
  export default connect(mapStateToProps)(SearchBar);