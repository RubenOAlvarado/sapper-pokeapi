<script>
	import Spinner from '../components/ui/Spinner.svelte';
	import Grid from '../components/ui/Grid.svelte';
	import { getData } from '../components/pokemon/pokemon.store';
	import { BaseURL } from '../api.config';

	const response = getData(BaseURL.pokemons);
	
</script>

<svelte:head>
	<title>Sapper poke api</title>
</svelte:head>

<main class="container">
	<h1 class="title">Sapper Kanto Pokedex</h1>

	{#await $response}
		<Spinner message="Loading pokemons..." />
	{:then pokemons}
		<Grid {pokemons} />
	{:catch error}
		<p style="color: red">{error.message}</p>
	{/await}
</main>
