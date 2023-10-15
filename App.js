import { NavigationContainer } from '@react-navigation/native';
import { StatusBar } from 'expo-status-bar';
import {  Text, View } from 'react-native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Offers from './Pages/Offers';
import Restaurants from './Pages/Restaurants';
import Offer from './Pages/offer';


const Stack = createNativeStackNavigator();


export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Offers" component={Offers} />
        <Stack.Screen name="resturant" component={Restaurants}/>
        <Stack.Screen name="Offer" component={Offer}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}


