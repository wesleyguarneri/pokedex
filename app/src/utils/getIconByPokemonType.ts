import Bug from '../../assets/types/bug.svg';
import Dark from '../../assets/types/dark.svg';
import Dragon from '../../assets/types/dragon.svg';
import Electric from '../../assets/types/electric.svg';
import Fairy from '../../assets/types/fairy.svg';
import Fighting from '../../assets/types/fighting.svg';
import Fire from '../../assets/types/fire.svg';
import Flying from '../../assets/types/flying.svg';
import Ghost from '../../assets/types/ghost.svg';
import Grass from '../../assets/types/grass.svg';
import Ground from '../../assets/types/ground.svg';
import Ice from '../../assets/types/ice.svg';
import Normal from '../../assets/types/normal.svg';
import Poison from '../../assets/types/poison.svg';
import Psychic from '../../assets/types/psychic.svg';
import Rock from '../../assets/types/rock.svg';
import Steel from '../../assets/types/steel.svg';
import Water from '../../assets/types/water.svg';


const POKEMON_TYPE_ICONS= {
    normal: Normal,
    fighting: Fighting,
    flying: Flying,
    poison: Poison,
    ground: Ground,
    rock: Rock,
    bug: Bug,
    ghost: Ghost,
    steel: Steel,
    fire: Fire,
    water: Water,
    grass: Grass,
    electric: Electric,
    psychic: Psychic,
    ice: Ice,
    dragon: Dragon,
    dark: Dark,
    fairy: Fairy,
  } as const;

const getIconByPokemonType = (type: string) =>
POKEMON_TYPE_ICONS[type.toLowerCase()];

export default getIconByPokemonType;