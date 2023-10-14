import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View ,FlatList,Image,TouchableOpacity} from 'react-native';
import * as React from 'react'


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

  renderItem=({item})=>{
    return(
      <View >
        <TouchableOpacity onPress={()=>{this.props.navigation.navigate('Story',{story:item})}}>
        <Image style={{width:'80%',resizeMode:'contain',height:200,alignSelf:'center',borderRadius:40,borderWidth:4,borderColor:'white'}} source={require('../assets/story_image_1.png')}></Image>
        <View style={{width:'90%', alignSelf:'center'}}>
        <Text style={{fontSize:20,margin:5,fontFamily:'BubbleGum-Sans',color:'white'}}>{item.title}</Text>
        <Text style={{margin:5,fontFamily:'BubbleGum-Sans',color:'white'}}>{item.author}</Text>
        <Text style={{margin:5,marginBottom:40,fontFamily:'BubbleGum-Sans',color:'white'}}>{item.description}</Text>
        </View>
        </TouchableOpacity>
      </View>
    )
  }

    render(){
        return (
            <View style={{backgroundColor:'#292f6b',flex:1}}>
               <Text style={{alignSelf:'center',fontSize:40,margin:10,marginBottom:30,fontFamily:'BubbleGum-Sans',color:'white'}}>Storytelling App</Text>
                <FlatList renderItem={this.renderItem} keyExtractor={this.keyExtractor} data={this.state.stories}></FlatList>
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
