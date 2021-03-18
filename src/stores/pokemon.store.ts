import { writable, get } from "svelte/store";
import { getPokemons, getPokemonByName } from '../actions/pokemon.services';
import type { Pokemon } from "../model/pokemon.interface";

export const data = writable({});

export async function pokemon(id:number = 1){
    try {
        let poke = get(data)[id];
        if(poke) return poke;
        const pokemon:Pokemon = await getPokemons(id);
        data.update((oldData) => {
            oldData[id] = pokemon;
            return oldData;
        });
        return pokemon;
    } catch (error) {
        throw error;
    }
}

export async function pokemonByName(name:string){
    try {
        let poke = get(data)[name];
        if(poke) return poke;
        const pokemon:Pokemon = await getPokemonByName(name);
        data.update((oldData) => {
            oldData[name] = pokemon;
            return oldData;
        });
        return pokemon;
    } catch (error) {
        throw error;
    }
}


