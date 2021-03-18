import http from '../config/http.service';
import { BaseURL } from '../config/api.config';
import type { Pokemon } from '../model/pokemon.interface';

export async function getPokemons(id:number):Promise<Pokemon>{
    return (await http.get(`${BaseURL.pokemons}/${id}`)).data;
}

export async function getPokemonByName(name:string):Promise<Pokemon>{
    return (await http.get(`${BaseURL.pokemon}/${name}`)).data;
}