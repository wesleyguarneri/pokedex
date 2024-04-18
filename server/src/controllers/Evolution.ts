import { Request, Response } from 'express';

import pokeApi from '../services/pokeApi';
import { EvolutionChain } from '../types/evolution-chain';
import { PokemonSpecies } from '../types/pokemon-species';
import { capitalizeString } from '../utils/capitalizeString' ;
import getPokemonId from '../utils/getPokemonId';
import getPokemonImage from '../utils/getPokemonImage';

export default class EvolutionController {
  public async show(request: Request, response: Response): Promise<Response> {
    const { id } = request.params;

    const { data: pokemonSpeciesData } = await pokeApi.get<PokemonSpecies>(
      `/pokemon-species/${id}`,
    );

    const pokemonIdInEvolutionChain = getPokemonId(
      pokemonSpeciesData.evolution_chain.url,
    );

    const { data: evolutionChain } = await pokeApi.get<EvolutionChain>(
      `/evolution-chain/${pokemonIdInEvolutionChain}`,
    );

    console.log(evolutionChain);

    const evolutionFormatted = evolutionChain.chain.evolves_to.map(evolves => {
      const {
        name: baseFormName,
        url: baseFormUrl,
      } = evolutionChain.chain.species;

      const base_form = {
        name: capitalizeString(baseFormName),
        url: evolutionChain.chain.species.url,
        image: getPokemonImage(getPokemonId(baseFormUrl)),
      };

      let second_evolution;

      if (evolves.evolves_to.length !== 0) {
        evolves.evolves_to.map(secondEvolves => {
          const secondEvolutionPokemonId = getPokemonId(
            secondEvolves.species.url,
          );

          second_evolution = {
            name: capitalizeString(secondEvolves.species.name),
            url: secondEvolves.species.url,
            min_level: secondEvolves.evolution_details[0].min_level,
            image: getPokemonImage(secondEvolutionPokemonId),
          };

          return second_evolution;
        });
      }

      const firstEvolutionPokemonId = getPokemonId(evolves.species.url);

      const first_evolution = {
        name: capitalizeString(evolves.species.name),
        url: evolves.species.url,
        min_level: evolves.evolution_details[0].min_level,
        image: getPokemonImage(firstEvolutionPokemonId),
      };

      return {
        base_form,
        first_evolution,
        second_evolution,
      };
    });

    return response.json(evolutionFormatted[0]);
  }
}
