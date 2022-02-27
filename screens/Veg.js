import React,{Component} from 'react';
import {
  View,
  Text,
  TouchableOpactiy,
  Image,
  ImageBackground,
} from 'react-native';

export default class Vegtarian extends Component{
  render(){
    return(
      <View style={{flex:1}}> 
      <Text> Vegetarian Diet</Text>
      <ImageBackground source={require("../assets/veg_diet.jpeg")} style={{resizeMode:'cover',flex:0.8}}/>
      </View>
    )
  }
}