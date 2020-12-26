import React,{useState} from 'react'
import Modal from './Modal'
import {
    StyleSheet,
    Text,View,Image,Picker,TouchableOpacity,Button,ScrollView
    }
     from 'react-native'
    


const ProductCardDetails=()=>{



   
    
    const[sizeList,ShowsizeList]=useState(false);
    const[viewModal,showViewModal]=useState(false)
    
    const removerBackDrop=()=>{
        showViewModal(false)    }

    const [Size,setSize]=useState('');
    const [Options]=useState([
        {label:'XS',value:'XS'},
        {label:'S',value:'S'},
        {label:'M',value:'M'},
        {label:'L',value:'L'},
        {label:'XL',value:'XL'}
    ]);
     console.log('new');
    // console.log(sizeList)


     

//  const ShowPicker= <Picker 
//  selectedValue={Size}
//  onValueChange={(itemValue, itemIndex) =>
//   setSize(itemValue)}
// >
//    {Options.map(item=>(
//          <Picker.Item
//         label={item.label}
//         value={item.value}
//         key={item.label}
//         />
//         ))}
// </Picker>
      
 




    
         return <View>
                 <ScrollView showsVerticalScrollIndicator={false}>
                   <View>
                      <Modal
                       showTheModal={viewModal}
                       backdropHandler={()=>removerBackDrop()}

                       />
                    <Image
                    source={{uri:'https://source.unsplash.com/m3RxZs9TsO4/600x900'}}
                    style={styles.Image}
                    />
                  </View>
                 

                <View style={styles.ProductProperties}>
                    <Text style={styles.ProductName}>Basic Bomber Jacket</Text>
                    <Text style={styles.ProductPrice}>39.90$</Text>
                </View>
                
                <View style={{flexDirection:'row',justifyContent:'space-between',paddingHorizontal:15,marginVertical:5}}>
                    <Picker
                      
                      style={{flex:1}}
                      selectedValue={Size}
                      onValueChange={(itemValue, itemIndex) =>
                       setSize(itemValue)}
                    >
                        {Options.map(item=>(
                              <Picker.Item
                             label={item.label}
                             value={item.value}
                             key={item.label}
                             />
                             ))}
                    </Picker>
                    <Button
                     onPress={Size!==''?()=>showViewModal(true):()=>showViewModal(false)}
                     color={Size!==''?'#3CB371':'black'}
                     style={{flex:1}} title="Add"  />
                </View>
               <View>
              
               </View>
            </ScrollView>
    </View>
}


const styles=StyleSheet.create({
    ProductProperties:{
        flexDirection:'row',
        justifyContent:'space-between',
        paddingHorizontal:15,
        borderBottomColor:'grey',
        borderBottomWidth:1,
        marginVertical:3,
        paddingVertical:5

    },
    Image:{
        width:400,
        height:450
    },
    ProductName:{
        fontSize:18,
        marginTop:6,
        fontWeight:'bold',
        borderRightColor:'grey',
        borderRightWidth:1,
        paddingRight:39

    },
    ProductPrice:{
        fontSize:22,
        fontWeight:'bold',
        marginBottom:15
    }
})

export default ProductCardDetails