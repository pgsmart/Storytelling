import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import TabNavigator from './Navigator/TabNavigator';
import { NavigationContainer } from '@react-navigation/native';
import DrawerNavigator from './Navigator/DrawerNavigator';
import LoginStackNavigator from './Navigator/LoginStackNavigator';
import * as firebase from "firebase";
import { firebaseConfig } from './database';

if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
} else {
  firebase.app();
}


export default function App() {
  return (
    <NavigationContainer>
      <LoginStackNavigator/>
     </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
