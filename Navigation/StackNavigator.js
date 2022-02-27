import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import DietForm from "../screens/DietFormScreen";
import Keto from "../screens/Keto";
import Vegan from "../screens/Vegan";
import Paleo from "../screens/Paleo";
import Vegtarian from "../screens/Veg";


const Stack = createStackNavigator();

const StackNavigator = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Home" component={DietForm} />
      <Stack.Screen name="Keto" component={Keto} />
      <Stack.Screen name="Paleo" component={Paleo} />
      <Stack.Screen name="Vegan" component={Vegan} />
      <Stack.Screen name="Vegtarian" component={Vegtarian} />
    </Stack.Navigator>
  );
};

export default StackNavigator;