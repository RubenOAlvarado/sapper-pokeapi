<!--script>
    
</script>

<style>
    .card {
        width: 120rem auto;
        background: #444;
        color: #e4c439;
        padding: 1rem;
        border-radius: 10px;
        border-top: 0.5px solid #cebf7b;
        border-bottom: 0.5px solid #cebf7b;
        text-align: center;
        box-shadow: 0 3px 6px rgba(0, 0, 0, 0.16), 0 3px 6px rgba(0, 0, 0, 0.23);
        position: relative;
        overflow: hidden;
        transition: 0.2s ease-in-out all;
    }

    .card--id {
        background: #cebf7b;
        width: 10rem;
        color: #333;
        padding: 0.1rem;
        font-weight: 700;
        position: absolute;
        border-radius: 0 0 10px 0;
        top: 0;
        left: 0;
    }
    .card--name {
        text-transform: capitalize;
        color: #fff;
        font-size: 8rem;
        font-weight: 700;
    }

    .title{
        font-size: 5rem;
        color: #dbca80;
    }

    .card--image {
        width: 350px;
        display: block;
        margin: auto;
    }

    .card--details {
        font-size: 3rem;
        color: #dbca80;
    }
</style>

{#await pokemon}
		<div>Waiting...</div>
{:then poke}
<div class="card">
    <span class="card--id">#{poke.id}</span>
    <h1 class="card--name">{poke.name}</h1>
    <div>
        <img class="card--image" src={poke.sprites.front_default} alt={poke.name} />
        <img class="card--image" src={poke.sprites.back_default} alt={poke.name} />
    </div>

    <div>
        <h3 class="title">Details</h3>
        <p class="card--details">Base experience: {poke.base_experience}</p>
        <p class="card--details">Height: {poke.height}</p>
        <p class="card--details">Weight: {poke.weight}</p>
    </div>

    <div>
        <h3 class="title">Types</h3>
        <span class="card--details">{
            poke.types
                .map(p => p.type.name)
                .join(', ')
            }</span>
    </div>

    <div>
        <h3 class="title">Abilities</h3>
        <span class="card--details">
            {poke.abilities.map(ability => ability.ability.name).join(',')}
        </span>
    </div>
</div>
{:catch error}
	<p style="color: red">{error.message}</p>
{/await}<-->