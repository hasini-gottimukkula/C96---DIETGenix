import React, { Component } from 'react';
import {
  View,
  Text,
  TouchableOpactiy,
  Image,
  ImageBackground,
} from 'react-native';

export default class HomeScreen extends Component {
  render() {
    return (
      <View
        style={{ backgroundColor: '#C7EA46', flex: 1, flexDirection: 'row' }}>
        <View style={{ flex: 0.3, flexDirection: 'row', margin: 20 }}>
          <Image
            style={{ width: 50, height: 50, borderRadius: 25 }}
            source={require('../assets/Logo1.png')}
          />
          <Text
            style={{
              marginLeft: 20,
              fontSize: 30,
              fontWeight: 'bold',
              color: 'beige',
            }}>
            DIETGenix
          </Text>
        </View>
      </View>
    );
  }
}
