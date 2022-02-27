import React,{Component} from 'react';
import {
  View,
  Text,
  TouchableOpactiy,
  Image,
  ImageBackground,
} from 'react-native';

export default class Vegan extends Component{
  render(){
    return(
      <View style={{flex:1}}> 
      <Text> Vegan Diet</Text>
      <ImageBackground source={require("../assets/vegan-diet.png")} style={{resizeMode:'cover',flex:0.8}}/>
      </View>
    )
  }
}