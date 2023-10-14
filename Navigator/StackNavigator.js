import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';
import Story from '../Screens/Story';
import TabNavigator from './TabNavigator';


const Stack = createStackNavigator()

export default StackNavigator=()=> {
  return (
    <Stack.Navigator>
        <Stack.Screen name='Tab' component={TabNavigator}/>
        <Stack.Screen name='Story' component={Story}/>
    </Stack.Navigator>

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
