<script context="module">
	export async function preload(page, session){
		let pokemons = [];
		for(let i = 1; i<=151; i++){
			const result = await this.fetch(`https://pokeapi.co/api/v2/pokemon/${i}`);
			const pokemon = await result.json();
			
			pokemons.push(pokemon);
		}

		return {pokemons}
	}
</script>
<script>
	import Card from '../components/Card.svelte';
	
	export let pokemons;
</script>

<style>

	main {
	padding: 1rem;
	max-width: 1100px;
	margin: auto;
	}

	main > h1 {
	text-align: center;
	color: #e4c439;
	margin-bottom: 2rem;
	font-size: 2rem;
	text-transform: uppercase;
	}

	#app {
		display: grid;
		grid-template-columns: repeat(auto-fit, minmax(12rem, 1fr));
		grid-gap: 1.5rem;
		justify-content: center;
		align-items: center;
	}
</style>

<svelte:head>
	<title>Sapper poke api</title>
</svelte:head>

<main>
	<h1>Sapper Kanto Pokedex</h1>
	<div id="app">
		{#each pokemons as pokemon}
			<Card {pokemon} />
		{/each}
	</div>
</main>
