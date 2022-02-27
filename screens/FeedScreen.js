import React, { Component } from 'react';
import {
  View,
  Text,
  TouchableOpactiy,
  Image,
  ImageBackground,
  ScrollView,
  StatusBar,
  Platform,
  SafeAreaView,
} from 'react-native';
import { RFValue } from 'react-native-responsive-fontsize';

export default class FeedScreen extends Component {
  render() {
    return (
      <SafeAreaView
          style={{
            marginTop:
              Platform.OS === 'android' ? StatusBar.currentHeight : RFValue(35),
          }}>
      <View>
        
          <Text> Feed Screen</Text>

          <ScrollView>
           <View style={{margin:RFValue(15),borderWidth:RFValue(3)}}>
              <Image
                style={{resizeMode:"contain", width:"95%" }}
                source={require('../assets/post_1.jpeg')}
              />
              <Text>
              My healthy Bowl for today!
              </Text>
         </View>
         <View style={{margin:RFValue(15),borderWidth:RFValue(3)}}>
              <Image
                style={{resizeMode:"contain", width:"95%" }}
                source={require('../assets/post_2.jpeg')}
              />
              <Text>
              My fruity breakfast :)
              </Text>
         </View>
         <View style={{margin:RFValue(15),borderWidth:RFValue(3)}}>
              <Image
                style={{resizeMode:"contain", width:"95%" }}
                source={require('../assets/post_3.jpeg')}
              />
              <Text>
              Looking for a salad recipe>?
              </Text>
         </View>
          </ScrollView>
       
      </View>
       </SafeAreaView>
    );
  }
}
