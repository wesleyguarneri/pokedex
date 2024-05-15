import { View, Text } from 'react-native';
import styles from '../PokemonDescription/styles'

const PokedexEntry = (pokedexEntry) => {
    const desc = pokedexEntry.pokemonDescription;
    
    return(
        <View style={styles.textBox}>
            {/* <View style={styles.categoryBox}>
                <Text style={styles.entryText}>{pokedexEntry.pokemonCategory}</Text>
            </View> */}
            <Text style={styles.entryText}>{desc}</Text>
        </View>
    )
}

export default PokedexEntry;