import React, { Component } from 'react';
import {
  View,
  Text,
  StyleSheet,
  SafeAreaView,
  Platform,
  StatusBar,
  Image,
  ScrollView,
  TextInput,
  Dimensions,
  Button,
  Alert,
  TouchableOpacity,
} from 'react-native';
import DropDownPicker from 'react-native-dropdown-picker';
import { RFValue } from 'react-native-responsive-fontsize';
import AppLoading from 'expo-app-loading';
import * as Font from 'expo-font';
import firebase from 'firebase';
import Keto from './Keto';
import Paleo from './Paleo';
import Veg from './Veg';
import Vegan from './Vegan';

export default class DietForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      fontsLoaded: false,
      light_theme: true,
      dropdownHeight: 40,
      dietChoice: ' ',
    };
  }

  componentDidMount() {
    // this.fetchUser();
    this.state.dietChoice;
  }

  async addUser() {
    console.log("hello");
    if (this.state.name && this.state.age && this.state.wh && this.state.mh) {
      let userData = {
        name: this.state.name,
        age: this.state.age,
        wh: this.state.wh,
        mh: this.state.mh,
        diet: this.state.dietChoice, 
        author: firebase.auth().currentUser.displayName,
        created_on: new Date(),
        author_uid: firebase.auth().currentUser.uid,
      };
      await firebase
        .database()
        .ref('/client/' + Math.random().toString(36).slice(2))
        .set(userData)
        .then(function (snapshot) {});
      this.props.setUpdateToTrue();
    } else {
      Alert.alert(
        'Error',
        'All fields are required!',
        [{ text: 'OK', onPress: () => console.log('OK Pressed') }],
        { cancelable: false }
      );
    }
  }

  fetchUser = () => {
    let theme;
    firebase
      .database()
      .ref('/users/' + firebase.auth().currentUser.uid)
      .on('value', (snapshot) => {
        theme = snapshot.val().current_theme;
        this.setState({ light_theme: theme === 'light' });
      });
  };

  render() {
    return (
      <View
        style={
          this.state.light_theme ? styles.containerLight : styles.container
        }>
        <SafeAreaView style={styles.droidSafeArea} />
        <View style={styles.appTitle}>
          <View style={styles.appIcon}>
            <Image
              source={require('../assets/Logo1.png')}
              style={styles.iconImage}></Image>
          </View>
          <View style={styles.appTitleTextContainer}>
            <Text
              style={
                this.state.light_theme
                  ? styles.appTitleTextLight
                  : styles.appTitleText
              }>
              Select Your Diet!
            </Text>
          </View>
        </View>
        <View style={styles.fieldsContainer}>
          <ScrollView>
            <Image
              source={require('../assets/Logo2.png')}
              style={styles.previewImage}></Image>

            <View style={{ height: RFValue(this.state.dropdownHeight) }}>
              <DropDownPicker
                items={[
                  { label: 'Vegan', value: '../assests/Logo2.png' },
                  { label: 'Keto', value: '../assests/Logo2.png' },
                  { label: 'Paleo', value: '../assests/Logo2.png' },
                  { label: 'Vegtarian', value: '../assests Logo2.png' },
                ]}
                defaultValue={'Vegan'}
                containerStyle={{
                  height: 40,
                  borderRadius: RFValue(20),
                  marginBottom: RFValue(20),
                  marginHorizontal: RFValue(10),
                }}
                onOpen={() => {
                  this.setState({ dropdownHeight: 170 });
                }}
                onClose={() => {
                  this.setState({ dropdownHeight: 40 });
                }}
                style={{ backgroundColor: 'transparent' }}
                itemStyle={{
                  justifyContent: 'flex-start',
                }}
                dropDownStyle={{
                  backgroundColor: this.state.light_theme ? '#eee' : '#2f345d',
                }}
                labelStyle={
                  this.state.light_theme
                    ? styles.dropdownLabelLight
                    : styles.dropdownLabel
                }
                arrowStyle={
                  this.state.light_theme
                    ? styles.dropdownLabelLight
                    : styles.dropdownLabel
                }
                onChangeItem={(item) =>
                  this.setState({
                    dietChoice: item.label,
                  })
                }
              />
            </View>
            <View style={{ marginHorizontal: RFValue(10) }}>
              <TextInput
                style={
                  this.state.light_theme
                    ? styles.inputFontLight
                    : styles.inputFont
                }
                onChangeText={(name) => this.setState({ name })}
                placeholder={'Name'}
                placeholderTextColor={
                  this.state.light_theme ? 'black' : 'white'
                }
              />
              <TextInput
                style={[
                  this.state.light_theme
                    ? styles.inputFontLight
                    : styles.inputFont,
                  styles.inputFontExtra,
                  styles.inputTextBig,
                ]}
                onChangeText={(age) => this.setState({ age })}
                placeholder={'Age'}
                placeholderTextColor={
                  this.state.light_theme ? 'black' : 'white'
                }
              />
              <TextInput
                style={[
                  this.state.light_theme
                    ? styles.inputFontLight
                    : styles.inputFont,
                  styles.inputFontExtra,
                  styles.inputTextBig,
                ]}
                onChangeText={(wh) => this.setState({ wh })}
                placeholder={'Weight & Height'}
                placeholderTextColor={
                  this.state.light_theme ? 'black' : 'white'
                }
              />
              <TextInput
                style={[
                  this.state.light_theme
                    ? styles.inputFontLight
                    : styles.inputFont,
                  styles.inputFontExtra,
                  styles.inputTextBig,
                ]}
                onChangeText={(mh) => this.setState({ mh })}
                placeholder={'Medical History'}
                multiline={true}
                numberOfLines={4}
                placeholderTextColor={
                  this.state.light_theme ? 'black' : 'white'
                }
              />
            </View>
            <View style={styles.submitButton}>
              <TouchableOpacity
                style={{
                  backgroundColor: 'purple',
                  width: 100,
                  height: 30,
                  alignSelf: 'Center',
                  alignItems: 'center',
                  justifyContent: 'center',
                }}
                onPress={() => {
                  this.props.navigation.navigate(this.state.dietChoice);
                  this.addUser();
                }}>
                <Text style={{ color: 'white' }}>Submit</Text>
              </TouchableOpacity>
            </View>
          </ScrollView>
        </View>
        <View style={{ flex: 0.08 }} />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#15193c',
  },
  containerLight: {
    flex: 1,
    backgroundColor: 'white',
  },
  droidSafeArea: {
    marginTop: Platform.OS === 'android' ? StatusBar.currentHeight : RFValue(2),
  },
  appTitle: {
    flex: 0.07,
    flexDirection: 'row',
  },
  appIcon: {
    flex: 0.3,
    justifyContent: 'center',
    alignItems: 'center',
  },
  iconImage: {
    width: '100%',
    height: '100%',
    resizeMode: 'contain',
  },
  appTitleTextContainer: {
    flex: 0.7,
    justifyContent: 'center',
  },
  appTitleText: {
    color: 'white',
    fontSize: RFValue(28),
    fontFamily: 'Bubblegum-Sans',
  },
  appTitleTextLight: {
    color: 'black',
    fontSize: RFValue(28),
    fontFamily: 'Bubblegum-Sans',
  },
  fieldsContainer: {
    flex: 0.85,
  },
  previewImage: {
    width: '93%',
    height: RFValue(200),
    alignSelf: 'center',
    borderRadius: RFValue(10),
    marginVertical: RFValue(10),
    resizeMode: 'contain',
  },
  inputFont: {
    height: RFValue(40),
    borderColor: 'white',
    borderWidth: RFValue(1),
    borderRadius: RFValue(10),
    paddingLeft: RFValue(10),
    color: 'white',
    fontFamily: 'Bubblegum-Sans',
  },
  inputFontLight: {
    height: RFValue(40),
    borderColor: 'black',
    borderWidth: RFValue(1),
    borderRadius: RFValue(10),
    paddingLeft: RFValue(10),
    color: 'black',
    fontFamily: 'Bubblegum-Sans',
  },
  dropdownLabel: {
    color: 'white',
    fontFamily: 'Bubblegum-Sans',
  },
  dropdownLabelLight: {
    color: 'black',
    fontFamily: 'Bubblegum-Sans',
  },
  inputFontExtra: {
    marginTop: RFValue(10),
  },
  inputTextBig: {
    textAlignVertical: 'top',
    padding: RFValue(5),
  },
  submitButton: {
    marginTop: RFValue(10),
    alignItems: 'center',
    justifyContent: 'center',
  },
});
