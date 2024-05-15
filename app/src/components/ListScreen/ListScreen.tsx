import React, { FC, useCallback, useEffect, useMemo, useState } from 'react';
import { Alert, Animated, FlatList, View } from 'react-native';
import api from '../../services/api';
import PokemonCard from './PokemonCard/PokemonEntry';
import Loading from '../Loading';
import { styles } from './styles';
import Pokemon, { Pokemon as PokemonType } from '../../types/pokemon';


export type RouteParams = {
   pokemon: PokemonType;
 };


const API_OFFSET = 18;


const ListScreen = ({ navigation }) => {
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

      // navigation.setOptions({
      //    headerRight: () => (
      //    <Button onPress={() => console.log("hit")} title="Filter" />
      //    ),
      // });
   }, [navigation]);

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
      <View style={styles.contentContainer}>
         <FlatList
            data={pokemons}
            showsVerticalScrollIndicator={true}
            columnWrapperStyle={styles.flatList}
            onRefresh={refreshList}
            refreshing={refreshing}
            keyExtractor={pokemon => String((pokemon as Pokemon).id)}
            onEndReached={() => loadPokemons()}
            onEndReachedThreshold={0.5}
            ListFooterComponent={ListFooterComponent}
            numColumns={3}
            scrollEventThrottle={16}
            renderItem={({item: pokemon, index })=>{
               return(
                  <PokemonCard 
                     pokemon={pokemon} 
                     opacity={opacity}/> 
               )
            }
         }
         />
      </View>
      )
      
}


export default ListScreen;
function useAnimatedScrollHandler(arg0: { onScroll: (event: any) => void; }) {
   throw new Error('Function not implemented.');
}

function useSharedValue(arg0: number) {
   throw new Error('Function not implemented.');
}

