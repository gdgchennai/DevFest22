<script lang="ts">
	export let id: string;
	export let title: string;
	export let isSecondaryButton: boolean = false;
	export let onClick: () => void;
</script>

{#if isSecondaryButton}
	<button
		{id}
		type="button"
		on:click={onClick}
		class="w-full inline-flex justify-center items-center rounded-md bg-white border-black border-2 px-4 py-2 text-base font-medium"
		>
		<slot id="icon" />
		<span class="ml-2">{title}</span>
	</button>
{:else}
	<button
		{id}
		type="button"
		on:click={onClick}
		class="w-full inline-flex items-center justify-center rounded-md border-black border-2 bg-[#F9AB00] px-4 py-2 text-base font-medium"
	>
		<slot id="icon" />
		<span class="ml-2">{title}</span>
	</button>
{/if}

<style>
	button {
		box-shadow: 0.5em 0.5em;
	}

	button:hover {
		transform: translate(.5em, .5em);
		box-shadow: 0.15em 0.15em;
	}
</style>
