import { StatusBar } from 'expo-status-bar';
import {  Text, View } from 'react-native';

export default function App() {
  return (
    <View className="flex bg-green-600 h-full w-full justify-center items-center">
      <Text className="text-white text-xl text-center">Open up App.js to start working on your app!</Text>
      <StatusBar style="auto" />
    </View>
  );
}


