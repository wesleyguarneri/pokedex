import { StyleSheet,View } from "react-native";
import getColorByPokemonType from "../../utils/getColorByPokemonType";

export const styles = StyleSheet.create({
  nameWrapper: {
      height: 40,
      flexDirection: 'row',
      backgroundColor: 'white',
      alignItems: 'center',
      justifyContent: 'center',
  },
  pokedexName: {
    color: 'black',
    fontSize: 32,
    fontWeight: '700',
    flex: 4,
  },
  pokedexNumber: {
    fontSize: 18,
    fontWeight: '700',
    borderRadius: 5,
    color: 'rgba(0,0,0,.5)'
  },
  pokemonImage: {
    width: 200,
    height: 200,
    flex: 1,
    marginLeft: 'auto',
    marginRight: 'auto',
    resizeMode: 'contain',
    alignItems: 'center',
    justifyContent: 'center',
  },
 
  typeContainer: {
    height: 50,
    marginTop: 5,
    flexDirection: 'row',    
    justifyContent: 'flex-start',

  },
  typeWrapper: {
    height: 30,
    width: 90,
    margin: 5,
    borderRadius: 5,
    justifyContent: 'center',
    flexDirection: 'row',
    backgroundColor: 'white',
    borderWidth: 1,
    borderColor: 'black',
  },
  typeText: {
    color: 'black',
    fontSize: 18,
    fontWeight: '500',
    marginTop: 3,
    marginHorizontal: 5,
  },
  metricsWrapper: {
    justifyContent: 'center',
    height: 25,
    flexDirection: 'row',
  },
  metrics: {
    fontSize: 18,
  },
  });


  export const ImageStyles = (pokemonType: string) => StyleSheet.create({
    imageWrapper: {
      borderRadius: 5,
      overflow: 'hidden',
      height: 300,
      width: 'auto',

      shadowOpacity: 1,
      backgroundColor: getColorByPokemonType(pokemonType),
    },
  })


  export default styles;

