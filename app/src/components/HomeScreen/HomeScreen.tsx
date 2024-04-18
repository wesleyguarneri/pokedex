import React, { FC, useCallback, useEffect, useMemo, useState } from 'react';
import { Alert, Animated, FlatList, Text } from 'react-native';
import styled from 'styled-components/native';
import api from '../../services/api';
import Pokemon from '../../types/pokemon';
import PokemonCard from './PokemonCard/PokemonCard';
import Loading from '../Loading';

const Container = styled.View`
  flex: 1;
  position: relative;
  background-color: white;`;

const PokemonList = styled(FlatList as new () => FlatList<Pokemon>)`
   flex: 1;
   margin-top: 8px;
`;

const API_OFFSET = 18;

const HomeScreen = () => {
   const [pokemons, setPokemons] = useState<Pokemon[]>([]);
   const [offset, setOffset] = useState(0);
   const [refreshing, setRefreshing] = useState(false);
   const [counter, setCounter] = useState(1);
   const [loading, setLoading] = useState(false);
   const [loadingInitalData, setLoadingInitialData] = useState(true);

   const opacity = useMemo(() => new Animated.Value(0), []);


   const loadPokemons = useCallback(
      async(offsetValue = offset, shouldRefresh = false) => {
         try {
            setLoading(true);
            const response = await api.get<Pokemon[]>('pokemons',{
               params: {
                  offset: offsetValue,
               },
            }) 

            const { data } = response;
            if (loadingInitalData) {
               setLoadingInitialData(false);
            }
            setPokemons(shouldRefresh ? data : [...pokemons, ...data]);
            setOffset(shouldRefresh ? API_OFFSET : API_OFFSET * counter);
            setCounter(shouldRefresh ? 2 : counter + 1);
            setLoading(false);

         } catch (err) {
            Alert.alert(
            'Fail to get Pokémons',
            'An error has ocurred when try to load the Pokémons, please try again.',
            );
         }
   }, [pokemons, offset, counter,]);


  useEffect(() => {
      loadPokemons();
   }, []);

   const ListFooterComponent = useMemo(
      () => (loading ? <Loading style={{ marginVertical: 8 }} /> : <></>),
      [loading],
    );
    
   const refreshList = useCallback(async () => {
      setRefreshing(true);
  
      await loadPokemons(0, true);
  
      setRefreshing(false);
    }, [loadPokemons]);

   return (
      <Container>
         <FlatList
            data={pokemons}
            showsVerticalScrollIndicator={true}
            contentContainerStyle={{ paddingBottom: 24, paddingHorizontal: 24 }}
            onRefresh={refreshList}
            refreshing={refreshing}
            keyExtractor={pokemon => String(pokemon.id)}
            onEndReached={() => loadPokemons()}
            onEndReachedThreshold={0.5}
            ListFooterComponent={ListFooterComponent}
            numColumns={2}
            renderItem={({item: pokemon })=>{
               return (
                  <PokemonCard 
                  pokemon={pokemon} 
                  opacity={opacity}/> 

               )
            }
         }
         />
      </Container>
      )
      
}


export default HomeScreen;
