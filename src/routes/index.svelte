<script lang="ts">
	import { flip } from 'svelte/animate';
	import Card from '../components/Card.svelte';
	import Grid from '../components/Grid.svelte';
	let id:number = 1;
	let len:number = 3;
	let arr;

	$:{
		arr = [...Array(len).keys()].map(x => id + x);
	}

</script>

<svelte:head>
	<title>Sapper poke api</title>
</svelte:head>

<main class="container">
	<h1>Kanto Pokedex</h1>
	<Grid>
		{#each arr as id (id) }
			<div animate:flip={{duration:1000}}>
				<Card idx={id} />
			</div>
		{/each}
	</Grid>
</main>
