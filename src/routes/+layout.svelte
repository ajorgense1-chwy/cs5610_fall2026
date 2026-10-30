<script>
	import favicon from '#lib/assets/favicon.svg';
	import {page} from "$app/state"


	let { children } = $props();
</script>

<svelte:head>
	<link rel="icon" href={favicon} />
</svelte:head>

<style>
	.header {
		border-bottom: solid 2px black;
	}

	.links {
		display: flex;
	}

	.currentPage {
		color: red;
	}

	:root {
		font-family: Arial, Helvetica, sans-serif;
	}

</style>

<main>
	<div class="header">
		This is your header!  Lets add some links
		<div class="links">
			<a href="/" class={page.url.pathname === '/' ? 'currentPage' : ''}>Home</a> - 
			<a href="/games/2048" class={page.url.pathname === '/games/2048' ? 'currentPage' : ''}>2048</a> - 
			<a href="/games/crossword" class={page.url.pathname === '/games/crossword' ? 'currentPage' : ''}>Crossowrd</a>					
		</div>
	</div>
	{@render children()}
</main>