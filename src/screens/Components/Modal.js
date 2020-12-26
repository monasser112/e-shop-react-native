import React,{useState} from 'react';
import {Text, View,Button} from 'react-native';
import Modal from "react-native-modal";






const ModalView=({showTheModal,backdropHandler})=>{

  
  
  
   return <View >
            <Modal
             style={{flexDirection:'row',justifyContent:'flex-start',alignItems:'center'}}
             onBackdropPress={backdropHandler}
             isVisible={showTheModal}
             hasBackdrop={true}
             animationInTiming={1000}
             backdropTransitionInTiming={1000}
             
             
             
             >
                <View style={{flex:1,paddingRight:15}}>
                  <Button 
                      color='black'
                      title="Continue Shopping"
                      onPress={()=>backdropHandler()}
                     />
                </View>

                <View style={{flex:1,paddingleft:15}}>
                  <Button 
                    color='#3CB371'
                    title="Process Order"
                   />
                </View>

              
              
              
            </Modal>
   </View>
  
  
  
  
  
  
}







export default ModalView;






// const[isModalVisible,setModalVisible]=useState(false);
// console.log('Modal')
// console.log(isModalVisible)


//  return <View >
//  <Button color="black" title="Show modal" onPress={()=>setModalVisible(!isModalVisible)} />
//  <Modal isVisible={isModalVisible}>
//   <View style={{ flex: 1 }}>
//     <Text>Hello!</Text>
//     <Button title="Hide modal" onPress={()=>setModalVisible(!isModalVisible)} />
//   </View>
// </Modal>
//  </View>














{/* <Modal
onDismiss={()=>setModalVisible(false)}
 animationType="slide"
 transparent={true}
 visible={modalVisible}
 onRequestClose={() => {
   Alert.alert('Modal has been closed.');
 }}>
 <View style={{marginTop: 22}}>
   <View>
     <Text>Hello World!</Text>

     <TouchableHighlight
       onPress={() => {
         setModalVisible(!modalVisible);
       }}>
       <Text>Hide Modal</Text>
     </TouchableHighlight>
   </View>
 </View>
</Modal>

<TouchableHighlight
 onPress={() => {
   setModalVisible(true);
 }}>
 <Text>Show Modal</Text>
</TouchableHighlight> */}