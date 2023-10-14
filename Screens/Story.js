import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View ,Image,TouchableOpacity} from 'react-native';
import * as React from 'react'
import Ionicons from '@expo/vector-icons/Ionicons';
import * as Speech from 'expo-speech'

var speaking = false;
export default class Story extends React.Component{

    readStory=(story)=>{
        if(!speaking){
            Speech.speak(story)
            console.log('working')
            speaking = true
        }else{
            Speech.stop()
            speaking = false
        }
    }

    render(){
        console.log(this.props.route.params.story.title)
        return (
            <View style={{backgroundColor:'#292f6b',flex:1}}>
            
                <Image style={{width:'80%',resizeMode:'contain',height:200,alignSelf:'center',borderRadius:40,borderWidth:4,borderColor:'white',marginTop:20,marginBottom:20}} source={require('../assets/story_image_1.png')}></Image>
        <View style={{width:'90%', alignSelf:'center'}}>
            <View style={{display: 'flex',flexDirection:'row',justifyContent:'space-between'}}>
            <Text style={{fontSize:25,margin:5,fontFamily:'BubbleGum-Sans',color:'white'}}>{this.props.route.params.story.title}</Text>
        <TouchableOpacity onPress={()=>{this.readStory(this.props.route.params.story.story)}}>
        <Ionicons name="volume-high-outline" size={50} color="white" />
        </TouchableOpacity>
            </View>
        <Text style={{margin:5,fontFamily:'BubbleGum-Sans',color:'white'}}>{this.props.route.params.story.author}</Text>
        <Text style={{margin:5,marginBottom:40,fontFamily:'BubbleGum-Sans',color:'white'}}>{this.props.route.params.story.story}</Text>
        </View>
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
