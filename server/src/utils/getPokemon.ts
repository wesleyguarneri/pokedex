import pokeApi from "../services/pokeApi";
import { Pokemon } from "../types/pokemon";
import PokemonSpecies from "../types/pokemon-species";
import { capitalizeString } from "./capitalizeString";
import { convertDecimetresToFeet, convertHectogramsToPounds } from "./unitConversion";

const getPokemon = async (name: string) => {
    const { data: pokemonData } = await pokeApi.get<Pokemon>(`/pokemon/${name}`);
    const { data: pokemonSpeciesData } = await pokeApi.get<PokemonSpecies>(
      `/pokemon-species/${name}`,
    );

    const pokemonNameIndex = pokemonSpeciesData.names.findIndex(
      name => name.language.name === 'en',
    );
  
    const pokemonFlavorTextIndex = pokemonSpeciesData.flavor_text_entries.findIndex(
      text =>
        text.version.name === 'platinum' ||
        text.version.name === 'sun' ||
        text.version.name === 'sword' ||
        text.version.name === 'scarlet',
    );
  
    const pokemonGeneraIndex = pokemonSpeciesData.genera.findIndex(
      genera => genera.language.name === 'en',
    );
  
    const pokemonTypesFormatted = pokemonData.types.map(({ type }) => {
      return {
        name: capitalizeString(type.name),
        url: type.url,
      };
    });
  
    const pokemonAbilityFormatted = pokemonData.abilities.map(({ ability }) => {
      return {
        name: capitalizeString(ability.name),
        url: ability.url,
      };
    });
  
    const eggGroupsFormatted = pokemonSpeciesData.egg_groups.map(egg_group => {
      return {
        name: capitalizeString(egg_group.name),
        url: egg_group.url,
      };
    });


      const pokemonStatsFormatted = pokemonData.stats.map(stat => {
        let name = '';
    
        if (stat.stat.name === 'hp') {
          name = 'HP';
        } else if (stat.stat.name === 'attack') {
          name = 'Attack';
        } else if (stat.stat.name === 'defense') {
          name = 'Defense';
        } else if (stat.stat.name === 'special-attack') {
          name = 'Sp. Atk';
        } else if (stat.stat.name === 'special-defense') {
          name = 'Sp. Def';
        } else if (stat.stat.name === 'speed') {
          name = 'Speed';
        }
    
        return {
          base_stat: stat.base_stat,
          name,
          url: stat.stat.url,
        };
      });

      return{
        id: pokemonData.id,
        name: pokemonData.name[0].toUpperCase()+pokemonData.name.slice(1),
        description:
          pokemonSpeciesData.flavor_text_entries[pokemonFlavorTextIndex].flavor_text.replace(/(\r\n|\n|\r)/gm, " "),
        image: pokemonData.sprites.other['home']['front_default'],
        sprite_image: pokemonData.sprites['front_default'],
        animated_image: pokemonData.sprites.versions['generation-v']['black-white']['animated']['front_default'],
        pokedex_number:  pokemonData.id.toString().padStart(3, '0'),
        types: pokemonTypesFormatted,
        stats: pokemonStatsFormatted,
        height: convertDecimetresToFeet(pokemonData.height),
        weight: convertHectogramsToPounds(pokemonData.weight),
        genera: pokemonSpeciesData.genera[pokemonGeneraIndex].genus,
        egg_groups: eggGroupsFormatted,
        abilities: pokemonAbilityFormatted,
    }
    };

export default getPokemon;