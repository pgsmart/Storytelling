import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View ,FlatList,Image,TextInput} from 'react-native';
import * as React from 'react'
import * as Font from 'expo-font'

var stories = require('../stories.json')
var customFont = {
  'BubbleGum-Sans' : require('../assets/fonts/BubblegumSans-Regular.ttf')
}
export default class Feed extends React.Component{

  constructor(){
    super();
    this.state = {
      stories: stories,
      fontsLoaded: false
    }
  }

  loadFonts = ()=>{
    Font.loadAsync(customFont)
    this.setState({
      fontsLoaded: true
    })
  }

  componentDidMount(){
    this.loadFonts()
  }


    render(){
        return (
            <View style={{backgroundColor:'#292f6b',flex:1}}>
               <Text style={{alignSelf:'center',fontSize:40,margin:10,marginBottom:30,fontFamily:'BubbleGum-Sans',color:'white'}}>Storytelling App</Text>
                <TextInput style={{margin:10,borderWidth:2,borderColor:'white',borderRadius:20,textAlign:'center',height:50}} placeholder='Enter Title' placeholderTextColor={'white'}></TextInput>
                <TextInput style={{margin:10,borderWidth:2,borderColor:'white',borderRadius:20,textAlign:'center',height:50}} placeholder='Enter Description' placeholderTextColor={'white'}></TextInput>
                <TextInput style={{margin:10,borderWidth:2,borderColor:'white',borderRadius:20,textAlign:'center',height:50}} placeholder='Enter Moral' placeholderTextColor={'white'}></TextInput>
                <TextInput multiline={true} numberOfLines={4} style={{margin:10,borderWidth:2,borderColor:'white',borderRadius:20,textAlign:'center',height:50}} placeholder='Enter Story' placeholderTextColor={'white'}></TextInput>
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
