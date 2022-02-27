import React,{Component} from 'react';
import {
  View,
  Text,
  TouchableOpactiy,
  Image,
  ImageBackground,
  ScrollView,
} from 'react-native';

export default class Keto extends Component{
  render(){
    return(
      <View style={{flex:1}}> 
      <Text> Keto Diet</Text>
      
      <ImageBackground source={require("../assets/keto_diet.png")} style={{resizeMode:'cover',flex:0.8}}/>
     
      </View>
    )
  }
}