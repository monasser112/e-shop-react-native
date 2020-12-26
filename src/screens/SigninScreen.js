import React, {useState} from 'react'
import{View, StyleSheet, TouchableOpacity} from 'react-native'
import {Text, Input, Button} from 'react-native-elements'
import Spacer from './Components/Spacer'
//import SignupScreen from './SignupScreen'

const SigninScreen = ({navigation}) => {

    const[email, setEmail] = useState('')
    const[password, setPassword] = useState('')

    return(
        <>        
        <Text style = {{fontSize: 20, 
            marginHorizontal: 60,
            marginVertical: 8,
            alignSelf: "center",
            borderBottomColor: '#199187',
            borderBottomWidth: 1}}>
            PULL & PEAR 
        </Text>
        <Spacer>
            <Input
                label = "Email"
                value = {email}
                onChangeText = {setEmail}
                autoCapitalize = "none"
                autoCorrect = {false} 
            />
        </Spacer>
        <Spacer>
            <Input
                label = "Password" 
                value = {password}
                onChangeText = {setPassword}
                autoCapitalize = "none"
                autoCorrect = {false} 
                secureTextEntry
            />
        </Spacer>

        <Spacer>
            <Button 
            buttonStyle = {{
                marginHorizontal: 7,
                backgroundColor: "#199187"}} 
            title = "LOG IN" />
        </Spacer>
        <TouchableOpacity>
            <Text style = {{fontSize: 17, 
                marginHorizontal: 60,
                alignSelf: "center",
                borderBottomColor: '#199187',
                borderBottomWidth: 1}}>
                Forgotten Your Password? 
            </Text>
        </TouchableOpacity>
        <Spacer>
            <Button buttonStyle = {{
                marginHorizontal: 7,
                backgroundColor: "#199187",
                marginVertical: 3    
            }} 
                title = "NEW TO P&B? REGISTER NOW"
                onPress = {() => {navigation.navigate('Signup')}}
                />
        </Spacer>
        </>
    )
}

const styles = StyleSheet.create({

})

export default SigninScreen