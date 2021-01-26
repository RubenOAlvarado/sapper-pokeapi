import { writable } from "svelte/store";
import { getPokemons, getPokemonByName } from './pokemon.services';

const cache = new Map();

export function getData(url){
    const store = writable(new Promise(() => {}));

    if(cache.has(url)){
        store.set(Promise.resolve(cache.get(url)));
    }

    const load = async () => {
        try {
            const response = (await getPokemons()).data.results;
            const pokemons = response.map(async r => {
                const pokemon = (await getPokemonByName(r.name)).data;
                return pokemon; 
            });
            cache.set(url, pokemons);
            store.set(Promise.all(pokemons));
        } catch (error) {
            console.log(error);
        }
    }

    load();
    return store;
}