import { NavigationContainer } from '@react-navigation/native';
import { StatusBar } from 'expo-status-bar';
import {  Text, View } from 'react-native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import offers from './Pages/offers';
import restaurants from './Pages/restaurants';
import offer from './Pages/offer';
const Stack = createNativeStackNavigator();


export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Offers" component={offers} />
        <Stack.Screen name="resturant" component={restaurants}/>
        <Stack.Screen name="Offer" component={offer}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}


