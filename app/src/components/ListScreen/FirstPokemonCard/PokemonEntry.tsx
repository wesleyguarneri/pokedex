import React, { FC, useCallback, useMemo } from 'react';
import styled from 'styled-components/native';
import { useNavigation } from '@react-navigation/native';

import { Pokemon as PokemonType } from '../../../types/pokemon';
import { Animated, Text } from 'react-native';
import { Container, PokemonImage, PokedexName, Button, PokedexNumber } from './styles';
import { Image } from 'expo-image';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import getColorByPokemonType from '../../../utils/getColorByPokemonType';




type PokemonCardProps = {
  pokemon: PokemonType;
  opacity: Animated.Value;
};


const FirstPokemonCard = ({pokemon,opacity,}: PokemonCardProps) => {

  const navigation = useNavigation<PokemonType>();


  const handleDetailsNavigation = useCallback(() => {
    navigation.navigate('Details', { pokemon: pokemon });
  }, [navigation, pokemon]);


  return(
    <GestureHandlerRootView>
      <Button 
      onPress={handleDetailsNavigation}
      >
        <Container
          pokemonType = {pokemon.types[0].name}
        >
        <PokedexName style={{color:"white"}}>{pokemon.name}</PokedexName>
        <PokedexNumber>#{pokemon.pokedex_number}</PokedexNumber>

        <PokemonImage source={{uri: pokemon.image}} onError={() => {console.log('error:'+pokemon.image)}}/>
        </Container>

      </Button>
    </GestureHandlerRootView>
  )
};  


export default FirstPokemonCard;
