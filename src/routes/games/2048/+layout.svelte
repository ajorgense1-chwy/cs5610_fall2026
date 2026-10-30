<script>
	import favicon from '#lib/assets/favicon.svg';

	let { children } = $props();
</script>

<svelte:head>
	<link rel="icon" href={favicon} />
</svelte:head>

<style>
	.header {
		border-bottom: solid 2px black;
	}

</style>

<main>
	<div class="header">
		HEllo games header

	</div>
	{@render children()}
</main>