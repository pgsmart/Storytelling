import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import CreateStory from '../Screens/CreateStory';
import Feed from '../Screens/Feed';


const Tab = createBottomTabNavigator()

export default TabNavigator=()=> {
  return (
    
    <Tab.Navigator screenOptions={{headerShown: false}}>
        <Tab.Screen name='Feed' component={Feed}></Tab.Screen>
        <Tab.Screen name='CreateStory' component={CreateStory}></Tab.Screen>
    </Tab.Navigator>

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
