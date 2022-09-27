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
		class="w-full inline-flex justify-center items-center rounded-lg border bg-white border-gray-200 px-4 py-2 text-base font-medium text-gray-900 shadow-sm hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-500 focus:ring-offset-2"
	>
		<slot id="icon" />
		<span class="ml-2">{title}</span>
	</button>
{:else}
	<button
		{id}
		type="button"
		on:click={onClick}
		class="w-full inline-flex items-center justify-center rounded-lg border border-transparent bg-black px-4 py-2 text-base font-medium text-white shadow-sm hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-gray-500 focus:ring-offset-2"
	>
		<slot id="icon" />
		<span class="ml-2">{title}</span>
	</button>
{/if}
