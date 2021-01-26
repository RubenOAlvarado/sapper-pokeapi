import http from '../http.service';
import { BaseURL } from '../../api.config';

export async function getPokemons(){
    return await http.get(BaseURL.pokemons);
}

export async function getPokemonByName(name){
    return await http.get(`${BaseURL.pokemon}/${name}`);
}