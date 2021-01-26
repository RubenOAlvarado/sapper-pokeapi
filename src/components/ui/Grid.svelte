<script>
    import Card from './Card.svelte';
    export let pokemons;

    let value = "";

    $:filtered = value ? pokemons.filter(p => p.name.includes(value)) : pokemons;

</script>
<div class="tile is-ancestor">
    <div class="content">
        <input type="text" bind:value>
    </div>
    {#each filtered as pokemon}
        <Card {pokemon} />
    {/each}
</div>