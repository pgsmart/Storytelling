import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View,TouchableOpacity,TextInput } from 'react-native';
import * as React from 'react'

export default class Login extends React.Component{
    render(){
        return (
            <View>
                <Text>Login Screen</Text>
                <TextInput placeholder='Username'/>
                <TextInput placeholder='Password'/>
                <TouchableOpacity><Text>Login</Text></TouchableOpacity>
                <Text>If you don't have account click to register</Text>
                <TouchableOpacity onPress={()=>{this.props.navigation.navigate('Register')}}><Text>Register</Text></TouchableOpacity>
            </View>
        );
    }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
