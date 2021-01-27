<script>
    export let pokemon;
</script>

<div class="cell">
    <div class="card">
        <figure class="card-section">
            <img src={pokemon.sprites.front_default} alt={pokemon.name} />
        </figure>
        
        <div class="card-section">
            <h4>#{pokemon.id}:<a class="card-link" rel=prefetch href={`pokemon/${pokemon.name}`}>{pokemon.name}</a></h4>
            <p>{
                pokemon.types
                    .map(poke => poke.type.name)
                    .join(', ')
            }</p>
        </div>
    </div>
</div>