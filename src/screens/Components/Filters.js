import React from 'react';
import {Text,View,StyleSheet,TouchableOpacity,FlatList} from 'react-native';
import Searchbar from './SearchBar';
import { connect } from 'react-redux';
import { sortByAll,setTextFilter,setJeans,setSweatShirt, setJacket,setTshirt} from '../../actions/filters';


const FiltersOptions=['Jeans','Sweatshirt','Jackets','T-Shirts','ALL'];




const Filters=({dispatch})=>{


  











    return <View> 
             <View>
                <Searchbar />
             </View>

            <View>
             <FlatList
                       showsHorizontalScrollIndicator={false}
                       horizontal
                       data={FiltersOptions}
                       keyExtractor={filter=>filter}
                       renderItem={({item})=>{
                        let filterBy;

                        if(item==='ALL'){
                                filterBy=sortByAll();
                            }

                         if(item==='Jeans'){
                                filterBy=setJeans();
                            }
                            else if(item==='Sweatshirt'){
                                filterBy=setSweatShirt();
                            }
                            else if(item==='Jackets'){
                                filterBy=setJacket();
                            }
                            else if(item==='T-Shirts'){
                                filterBy=setTshirt();
                            }
                           return(
                            <View style={styles.Filters}>
                               <TouchableOpacity onPress={()=>dispatch(filterBy)}>
                                   <Text>{item}</Text>
                               </TouchableOpacity>
                            </View>
                           )
                       }}
                     />
            </View>
    </View>
}

const styles=StyleSheet.create({
    Filters:{
        flexDirection:'row',
        paddingHorizontal:15,
        borderColor:'black',
        borderLeftWidth:1,
        borderTopWidth:1,
        borderBottomWidth:1,
        borderRightWidth:1,
        marginHorizontal:3,
        borderRadius:9,
        paddingVertical:3
    }
})

const mapStateToProps = (state) => {
    return {
      filters: state.filters
    };
  };
  
  export default connect(mapStateToProps)(Filters)