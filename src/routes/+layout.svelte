<script lang="ts">
	import Footer from '$lib/footer/Footer.svelte';
	import Header from '$lib/header/Header.svelte';
	import '../app.css';
</script>

<main>
	<div id="container" class="mx-auto max-w-7xl sm:px-6 lg:px-8 bg-noise-pattern">
		<Header />
		<slot />
		<Footer />
	</div>
</main>
