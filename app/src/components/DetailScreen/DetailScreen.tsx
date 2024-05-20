import React, { FC, useCallback, useMemo } from 'react';
import Pokemon, { Pokemon as PokemonType } from '../../types/pokemon';
import getColorByPokemonType from '../../utils/getColorByPokemonType';
import getIconByPokemonType from '../../utils/getIconByPokemonType';
import { useRoute } from '@react-navigation/native';
import styled from 'styled-components/native';
import { Alert, Animated, ScrollView, View, StyleSheet, Text, Image} from 'react-native';
import { styles, ImageStyles } from './styles'
import { GestureHandlerRootView, RectButton } from 'react-native-gesture-handler';
import { capitalizeString } from '../../utils/capitalizeString';
import api from '../../services/api';
import PokedexEntry from './PokemonDescription/PokedexEntry';
import Abilities from './Abilities';
import BaseStats from './BaseStats/BaseStats';
import Evolution from './Evolution/Evolution';

export type RouteParams = {
   pokemon: PokemonType;
 };


const DetailScreen = () => {
   const route = useRoute();
   const { pokemon } = route.params as RouteParams;
   
   const TypeIcon1 = useMemo(
   () => getIconByPokemonType(pokemon.types[0].name),
   [pokemon.types],
   );
   const TypeIcon2 = (pokemon.types.length > 1) ? useMemo(
   () => getIconByPokemonType(pokemon.types[1].name),
   [pokemon.types],
   ) : null;
   
   return (
      <ScrollView 
         style={{marginLeft:25, marginRight:25, backgroundColor: 'white',}}
         showsVerticalScrollIndicator={false}>
      <View  style={ImageStyles(pokemon.types[0].name).imageWrapper}>
         <Image style={styles.pokemonImage} source={{uri: pokemon.animated_image || pokemon.image}} onError={() => {console.log('error:'+pokemon.image)}}/>
      </View>

      <View style={styles.nameWrapper}>
         <Text style={styles.pokedexName}>{pokemon.name}</Text>
         <Text style={styles.pokedexNumber}>#{pokemon.pokedex_number}</Text>
      </View>

      <View style ={styles.typeContainer}>
         <View style ={ImageStyles(pokemon.types[0].name).typeWrapper}>
            <TypeIcon1 height='auto' width='20%'/>
            <Text style= {ImageStyles(pokemon.types[0].name).typeText}>{capitalizeString(pokemon.types[0].name)}</Text>
         </View>
         
         {(pokemon.types.length > 1) ? <View style ={ImageStyles(pokemon.types[1].name).typeWrapper}>
            <TypeIcon2 height='auto' width='20%'/>
            <Text style= {ImageStyles(pokemon.types[1].name).typeText}>{capitalizeString(pokemon.types[1].name)}</Text>
         </View> : null}
      </View>

      <PokedexEntry pokemonDescription={pokemon.description} pokemonCategory={pokemon.genera}/>

      <View style = {styles.metricsWrapper}>
         <Text style = {styles.metricsWrapper}>{pokemon.height.toString()} ft / {pokemon.weight.toString()} lbs.</Text>
      </View>

      <BaseStats stats={pokemon.stats}/>

      <Evolution pokemon={pokemon}></Evolution>

      {/* <Abilities abilities={pokemon.abilities}/> */}

      </ScrollView>
   );
   };

export default DetailScreen;


