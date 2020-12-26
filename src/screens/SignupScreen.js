import React, {useState} from 'react'
import{View, StyleSheet, ScrollView} from 'react-native'
import {Text, Input, Button} from 'react-native-elements'
import Spacer from './Components/Spacer'

const SignupScreen = () => {

    const[email, setEmail] = useState('')
    const[password, setPassword] = useState('')
    const[name, setName] = useState('')
    const[lastName, setLastName] = useState('')
    const[address, setAddress] = useState('')
    const[info, setInfo] = useState('')
    const[state, setState] = useState('')
    const[zipCode, setZipCode] = useState('')

    return(
        <ScrollView showsVerticalScrollIndicator={false}>
            <>        
                <Text style = {{fontSize: 20, 
                    marginHorizontal: 60,
                    marginVertical: 10,
                    alignSelf: "center",
                    borderBottomColor: '#199187',
                    borderBottomWidth: 1}}>
                    Create Your Pull&Pear account 
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
                    <Input
                        label = "Name" 
                        value = {name}
                        onChangeText = {setName}
                    />
                </Spacer>
                <Spacer>
                    <Input
                        label = "Last name" 
                        value = {lastName}
                        onChangeText = {setLastName}
                    />
                </Spacer>
                <Spacer>
                    <Input
                        label = "Address" 
                        value = {address}
                        onChangeText = {setAddress}
                        autoCapitalize = "none"
                        autoCorrect = {false} 
                    />
                </Spacer>
                <Spacer>
                    <Input
                        label = "Further information (optional)" 
                        value = {info}
                        onChangeText = {setInfo}
                    />
                </Spacer>
                <Spacer>
                    <Input 
                        label = "State" 
                        value = {state}
                        onChangeText = {setState}
                    />        
                </Spacer>    
                <Spacer>
                    <Input 
                        label = "Zip/Postcode" 
                        value = {zipCode}
                        onChangeText = {setZipCode}
                    />
                </Spacer>
                <Spacer>
                    <Button buttonStyle = {{backgroundColor: "#199187"}} title = "Sign Up" />
                </Spacer>

            </>
        </ScrollView>
    )   
}

const styles = StyleSheet.create({

})

export default SignupScreen