<script>
    import Card from './Card.svelte';
    
    export let pokemons;

    let nameFilter = "";
    let numberFilter = "";

    $:filteredByName = nameFilter ? pokemons.filter(p => p.name.includes(nameFilter)) : pokemons;
    $:filteredByNumber = numberFilter ? filteredByName.filter(p => `${p.id}`.includes(numberFilter)) : filteredByName;

</script>
<div class="grid-container">
    <div class="medium-6 cell">
        <label for="searcher">Search pokemon by name
            <input type="text" class="form-control" bind:value={nameFilter}>
        </label>
    </div>
    <div class="medium-6 cell">
        <label for="searcher">Search pokemon by number
            <input type="text" class="form-control" bind:value={numberFilter}>
        </label>
    </div>
    <div class="grid-x gridm-margin-x">
        {#each filteredByNumber as pokemon}
            <Card {pokemon} />
        {/each}
    </div>
</div>