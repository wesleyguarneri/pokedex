import { Request, Response } from 'express';

import { PokemonApiResult } from '../types/pokeapi-results';
import pokeApi from '../services/pokeApi';
import getPokemon from '../utils/getPokemon';

export default class PokemonController {

    public async index(request: Request, response: Response): Promise<Response> {
        const { offset, limit } = request.query;
        const apiResponse = await pokeApi.get<PokemonApiResult>('/pokemon', {
          params: {
            offset: offset || 0,
            limit: limit || 18,
          },
        });

        const { results } = apiResponse.data;
        const pokemons = results.map(async pokemon => {
          const pokemonId = pokemon.url.split('/')[6];
          const pokemonData = await getPokemon(pokemonId);
          return pokemonData;
        });
    
        return response.json(await Promise.all(pokemons));
    }

    public async display(request: Request, response: Response): Promise<Response> {
        try {
          const { pokemonName } = request.params;

          const data = await getPokemon(String(pokemonName));
          if(data === undefined){
            throw new Error('Pokemon not found')
          }
          return response.json(data);
        } 
        catch (e:any) {
          return response.status(404).json({
            error: {
              message: e.message,
            },
          });
        }
      }
}

