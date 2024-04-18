
export type Pokemon = {
    navigate(arg0: string, arg1: { pokemon: Pokemon; }): unknown;
    id: number;
    name: string;
    description: string;
    image: string;
    sprite_image: string;
    animated_image: string;
    pokedex_number: string;
    types: Type[];
    stats: Stat[];
    height: number;
    weight: number;
    genera: string;
    egg_groups: EggGroup[];
    abilities: Ability[];

  };

  export type Type = {
    name: string;
    url: string;
  };
  
  export type Stat = {
    base_stat: number;
    name: string;
    url: string;
  };

  export type Ability = {
    name: string;
    url: string;
  };
  
  export type EggGroup = {
    name: string;
    url: string;
  };

  export default Pokemon;
