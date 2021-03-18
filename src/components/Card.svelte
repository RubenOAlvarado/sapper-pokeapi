<script lang="ts">
    import { data, pokemon } from '../stores/pokemon.store';
    import type { Pokemon } from '../model/pokemon.interface';
    export let idx:number = 1;
    $: pokemon(idx);
</script>
<style>
    .swag{
        text-align: center;
        color: yellowgreen;
    }
</style>
<article class="card">
    {#if $data[idx]}
        <img src={ $data[idx].sprites.front_default } alt={$data[idx].name} />
        <footer>
            <h3 class="swag"> #{idx} </h3>
            <a href={`/pokemon/${idx}`}> {$data[idx].name} </a>
            <p class="swag">{$data[idx].types.map(t => t.type.name).join(', ')}</p>
        </footer>
    {:else}
        <section class="content">
           <p>No data loaded</p>
        </section>
    {/if}
</article>