import { NavigationContainer } from '@react-navigation/native';
import { StatusBar } from 'expo-status-bar';
import {  Text, View } from 'react-native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Offer from './Pages/Offer';
import Offers from './Pages/Offers';
import Restaurants from './Pages/Restaurants';
import Offer from './Pages/Offer';


const Stack = createNativeStackNavigator();


export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{
        headerShown: false
      }}>
        <Stack.Screen name="Offers" component={Offers} />
        <Stack.Screen name="resturant" component={Restaurants}/>
        <Stack.Screen name="Offer" component={Offer}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}


