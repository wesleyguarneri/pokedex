import React, { FC, useCallback, useMemo } from 'react';
import styled from 'styled-components/native';
import { useNavigation } from '@react-navigation/native';

import { Pokemon as PokemonType } from '../../../types/pokemon';
import { Animated, Text, View } from 'react-native';
import { Container, styles, pokedexInfoContainer} from './styles';
import { Image } from 'expo-image';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import getColorByPokemonType from '../../../utils/getColorByPokemonType';
import { RectButton } from 'react-native-gesture-handler';



type PokemonCardProps = {
  pokemon: PokemonType;
  opacity: Animated.Value;
};


const PokemonCard = ({pokemon,opacity,}: PokemonCardProps) => {

  const navigation = useNavigation<PokemonType>();


  const handleDetailsNavigation = useCallback(() => {
    navigation.navigate('Details', { pokemon: pokemon });
  }, [navigation, pokemon]);


  return(
    <GestureHandlerRootView>
      <RectButton 
      onPress={handleDetailsNavigation}
      >
        <View style={Container(pokemon.types[0].name).container}>
          <View style={pokedexInfoContainer(pokemon.types[0].name).pokedexInfoContainer}>
            <Text style={styles.pokedexNumber}>{pokemon.pokedex_number}</Text>
            <Text style={styles.pokedexName}>{pokemon.name}</Text>
          </View>
          <Image style={styles.pokemonImage} source={{uri: pokemon.image}} onError={() => {console.log('error:'+pokemon.image)}}/>
        </View>

      </RectButton>
    </GestureHandlerRootView>
  )
};  


export default PokemonCard;
