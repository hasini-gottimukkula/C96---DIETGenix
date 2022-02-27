import React, { Component } from 'react';
import {
  View,
  Text,
  TouchableOpactiy,
  Image,
  ImageBackground,
  ScrollView,
  Platform,
  StatusBar,
  SafeAreaView,
} from 'react-native';

import {RFValue} from 'react-native-responsive-fontsize';

export default class FoodScreen extends Component {
  render() {
    return (
      <View style={{ backgroundColor: '#D0F0C0',padding:10 }}>
      <SafeAreaView
            style={{
              marginTop:
                Platform.OS === 'android'
                  ? StatusBar.currentHeight
                  : RFValue(35),
            }}>
        <View style={{ flexDirection:'row'}}>
          
            
          <Image
            style={{ width: 50, height: 50, borderRadius: 25 }}
            source={require('../assets/Logo1.png')}
          />
          <Text
            style={{
              marginLeft: 10,
              fontSize: 30,
              fontWeight: 'bold',
              color: 'grey',
            }}>
            Diet Plans
          </Text>
        </View>

        <View style={{ marginTop: 20 }}>
          <Image
            style={{ width: 300, height: 80, alignSelf: 'center' }}
            source={require('../assets/diet.png')}
          />
        </View>
        <View>
          <ScrollView
            style={{ marginHorizontal:10, backgroundColor: 'white'}} vertical={true}>
            <Text style={{marginTop:10}}>
              What is a Keto Diet? - A keto diet is an eating plan that focuses
              on foods that provide a lot of healthful fats, adequate amounts of
              protein, and very few carbohydrates. The goal is to get more
              calories from fat than from carbs. Benefits of a keto diet:
              Supports weight-loss Improves acne May reduce the risk of certain
              cancers Improves heart health Protect’s brain function Potentially
              reduces seizures
            </Text>

            <Text style={{marginTop:50}}>
              What is a Vegan Diet?- A vegan diet contains only plants (such as
              vegetables, grains, nuts, and fruits) and foods made from plants.
              Vegans do not eat foods that come from animals, including dairy
              products and eggs. Benefits of a vegan diet: A vegan diet is
              richer in certain nutrients. Help you to lose excess weight. Lower
              blood sugar levels and improve kidney function. Can protect you
              from getting diagnosed with cancer. Lowers the risk of heart
              diseases.
            </Text>

            <Text style={{marginTop:50}}>
              What is a Paleo diet?- A paleo diet typically includes lean meats,
              fish, fruits, vegetables, nuts, and seeds — foods that in the past
              could be obtained by hunting and gathering. A paleo diet limits
              foods that became common when farming emerged about 10,000 years
              ago. These foods include dairy products, legumes, and grains.
            </Text>

            <Text style={{marginTop:50}}>
              What is a Vegetarian Diet? - The vegetarian diet involves
              abstaining from eating meat, fish and poultry. People often adopt
              a vegetarian diet for religious or personal reasons, as well as
              ethical issues, such as animal rights. Others decide to become
              vegetarian for environmental reasons, as livestock production
              increases greenhouse gas emissions, contributes to climate change
              and requires large amounts of water, energy and natural resources.
            </Text>
          </ScrollView>
        </View>
                </SafeAreaView>

      </View>
    );
  }
}
