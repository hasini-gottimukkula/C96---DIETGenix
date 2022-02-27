import React from 'react';
import { StyleSheet } from "react-native";
import { createMaterialBottomTabNavigator } from "@react-navigation/material-bottom-tabs";
import Ionicons from "react-native-vector-icons/Ionicons";
import { RFValue } from "react-native-responsive-fontsize";

import FoodScreen from "../screens/FoodScreen";
import StackNavigator from "./StackNavigator";
import HomeScreen from "../screens/HomeScreen";



const Tab = createMaterialBottomTabNavigator();

const BottomTabNavigator = () => {
  return (
    <Tab.Navigator
      labeled={false}
      barStyle={styles.bottomTabStyle}
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color, size }) => {
          let iconName;
          if (route.name === "Home") {
            iconName = focused ? "home" : "home-outline";
          } if (route.name === "Food") {
            iconName = focused ? "restaurant" : "restaurant-outline";
          } 
           if (route.name === "Diet") {
            iconName = focused ? "add-circle" : "add-circle-outline";
          }
          return (
            <Ionicons
              name={iconName}
              size={RFValue(25)}
              color={color}
              style={styles.icons}
            />
          );
        }
      })}
      activeColor={"#ee8249"}
      inactiveColor={"gray"}
    >
      <Tab.Screen name="Home" component={HomeScreen} />
      <Tab.Screen name="Food" component={FoodScreen} />
      <Tab.Screen name="Diet" component={StackNavigator} />
    </Tab.Navigator>
  );
};

const styles = StyleSheet.create({
  bottomTabStyle: {
    backgroundColor: "#043927",
    height: "8%",
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    overflow:'hidden',
    position: "absolute"
  },
  icons: {
    width: RFValue(30),
    height: RFValue(10)
  }
});

export default BottomTabNavigator;