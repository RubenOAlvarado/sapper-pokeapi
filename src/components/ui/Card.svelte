<script>
    export let pokemon;
</script>

<div class="tile is-child box has-background-dark">
    <div class="card">
        <header class="card-header">
            <p class="card-header-title">#{pokemon.id}:<a rel=prefetch href={`pokemon/${pokemon.name}`}>{pokemon.name}</a></p>
        </header>
        <div class="card-image">
            <figure class="image is-4by3">
                <img src={pokemon.sprites.front_default} alt={pokemon.name} />
            </figure>
        </div>
        <div class="card-content">
            <div class="media">
                <div class="media-content">
                    <p class="title is-4">{
                        pokemon.types
                            .map(poke => poke.type.name)
                            .join(', ')
                    }</p>
                </div>
            </div>
        </div>
    </div>
</div>