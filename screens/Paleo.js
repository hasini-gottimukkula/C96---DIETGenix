import React,{Component} from 'react';
import {
  View,
  Text,
  TouchableOpactiy,
  Image,
  ImageBackground,
} from 'react-native';

export default class Paleo extends Component{
  render(){
    return(
      <View style={{flex:1}}> 
      <Text> Paleo Diets</Text>
    <ImageBackground source={require("../assets/paleodiet.jpeg")} style={{resizeMode:'cover',flex:0.8}}/>
      </View>
    )
  }
}