import { StatusBar } from 'expo-status-bar';
import { Button, StyleSheet, Text, View } from 'react-native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import DetailScreen, { RouteParams } from './src/components/DetailScreen/DetailScreen';
import HomeScreen from './src/components/HomeScreen/HomeScreen';
import ListScreen from './src/components/ListScreen/ListScreen';
import CameraScreen from './src/components/Camera/CameraScreen/CameraScreen'
import Pokemon from './src/components/Pokemon/Pokemon';
import React from 'react';
import { DefaultTheme, NavigationContainer } from '@react-navigation/native';
import OptionButton from './src/components/Options/OptionButton/OptionButton'
import CameraButton from './src/components/Camera/CameraButton/CameraButton'

const navTheme = DefaultTheme;
// navTheme.colors.background = '#8F0C25';
navTheme.colors.background = '#fffff';


const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer
      theme={navTheme}
    >
      <Stack.Navigator>
        {/* <Stack.Screen
          name="Pokedex"
          component={HomeScreen} 
        /> */}
        <Stack.Screen
          name="Pokedex"
          component={ListScreen} 
          options={({navigation}) => ({
            headerTitle: "Pokedex",
            headerRight: () => <OptionButton />,
            headerLeft: () => <CameraButton />

          })}
        />
        <Stack.Screen 
        name="Details" 
        component={DetailScreen} 
        />

        <Stack.Screen
          name="Camera"
          component={CameraScreen}
        >
        </Stack.Screen>
      </Stack.Navigator>
    </NavigationContainer>
    
  );
}

