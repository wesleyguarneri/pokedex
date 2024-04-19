import React, { FC, useCallback, useMemo } from 'react';
import Pokemon, { Pokemon as PokemonType } from '../../types/pokemon';
import getColorByPokemonType from '../../utils/getColorByPokemonType';
import getIconByPokemonType from '../../utils/getIconByPokemonType';
import { useRoute } from '@react-navigation/native';
import styled from 'styled-components/native';
import { Image } from 'expo-image';
import { Alert, Animated, ScrollView} from 'react-native';
import { PokedexName, PokedexNumber, PokemonImage, NameWrapper, ImageWrapper, TypeWrapper, TypeText, TypeContainer, MetricsWrapper, Metrics } from './styles';
import { GestureHandlerRootView, RectButton } from 'react-native-gesture-handler';
import { capitalizeString } from '../../utils/capitalizeString';
import api from '../../services/api';
import PokedexEntry from './PokedexEntry';
import Abilities from './Abilities';
import BaseStats from './BaseStats';
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
      <ScrollView>
      <NameWrapper>
         <PokedexNumber>#{pokemon.pokedex_number}</PokedexNumber>
         <PokedexName>{pokemon.name}</PokedexName>
      </NameWrapper>

      <ImageWrapper pokemonType = {pokemon.types[0].name}>
         <PokemonImage source={{uri: pokemon.animated_image || pokemon.image}} onError={() => {console.log('error:'+pokemon.image)}}/>
      </ImageWrapper>

      <TypeContainer>
         <TypeWrapper>
            <TypeIcon1 height='auto' width='20%'/>
            <TypeText>{capitalizeString(pokemon.types[0].name)}</TypeText>
         </TypeWrapper>
         
         {(pokemon.types.length > 1) ? <TypeWrapper>
            <TypeIcon2 height='auto' width='20%'/>
            <TypeText>{capitalizeString(pokemon.types[1].name)}</TypeText>
         </TypeWrapper> : null}
      </TypeContainer>

      <PokedexEntry pokemonDescription={pokemon.description} pokemonCategory={pokemon.genera}/>

      <MetricsWrapper>
         <Metrics>{pokemon.height.toString()} ft / {pokemon.weight.toString()} lbs.</Metrics>
      </MetricsWrapper>

      <Abilities abilities={pokemon.abilities}/>

      <BaseStats stats={pokemon.stats}/>

      <Evolution pokemon={pokemon}></Evolution>
      </ScrollView>
   );
   };

export default DetailScreen;


