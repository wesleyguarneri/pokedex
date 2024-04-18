import express from 'express';
import PokemonController from './controllers/Pokemon';
import EvolutionController from './controllers/Evolution';

const routes = express.Router();

const pokemonController = new PokemonController();
const evolutionsController = new EvolutionController();


routes.get('/pokemons', pokemonController.index);
routes.get('/pokemons/:pokemonName', pokemonController.display);
routes.get('/evolutions/:id', evolutionsController.show);


export default routes;

