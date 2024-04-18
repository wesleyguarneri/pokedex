import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer, Route } from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import DetailScreen, { RouteParams } from './src/components/DetailScreen/DetailScreen';
import HomeScreen from './src/components/HomeScreen/HomeScreen';
import Pokemon from './src/components/Pokemon/Pokemon';
import React from 'react';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Pokedex"
          component={HomeScreen}
          
        />
        <Stack.Screen 
        name="Details" 
        component={DetailScreen} 
        
        />
      </Stack.Navigator>
    </NavigationContainer>
    
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
