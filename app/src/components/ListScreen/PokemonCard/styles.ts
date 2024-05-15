import { RectButton } from 'react-native-gesture-handler';
import { StyleSheet } from 'react-native';
import getColorByPokemonType from '../../../utils/getColorByPokemonType';

export const Container = (pokemonType: string) => StyleSheet.create({
  container: {
    borderRadius: 5,
    overflow: 'hidden',
    height: 140,
    margin: 'auto',
    marginTop: 3,
    width: 120,
    shadowColor: 'rgba(0, 0, 0, 0.15)',
    shadowOffset: {
      width: 2,
      height: 4,
    },
    shadowOpacity: 1,
    borderStyle: 'solid',
    borderWidth: 2,
    borderColor: getColorByPokemonType(pokemonType),
    backgroundColor: `${getColorByPokemonType(pokemonType)}30`    
  },
})

export const pokedexInfoContainer = (pokemonType: string) => StyleSheet.create({
  pokedexInfoContainer: {
    width: '100%',
    height: 30,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: `${getColorByPokemonType(pokemonType)}80`,
  },
})

export const styles = StyleSheet.create({
  pokemonImage: {
    width: 100,
    height: 100,
    position: 'absolute',
    bottom: 4,
    right: 4,
  },
  pokedexName: {
    color: 'white',
    fontSize: 14,
    fontWeight: '700',
    flexGrow: 1,
    flexShrink: 2,
    flexBasis:'auto'
    // textAlign: 'right',
  },
  pokedexNumber: {
    fontSize: 12,
    fontWeight: '700',
    // backgroundColor: 'rgba(0,0,0,.1)',
    color:'white',
    flexGrow: 1,
    flexShrink: 1,
    flexBasis:'auto'
  },
});

export default styles;