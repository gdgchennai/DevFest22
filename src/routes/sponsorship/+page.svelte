<script lang="ts">
  import { sponsorDocUrl } from "$lib/data";
</script>

<svelte:head>
  <title>DevFest2024 Chennai - Sponsorship</title>
  <meta name="description" content="DevFest Chennai Sponsorship" />
  <meta name="viewport" content="width=device-width, initial-scale=1" />
</svelte:head>


<div class="flex flex-col w-full items-center justify-center h-screen">
	<iframe
		title="Sponsorship Prospectus"
		src={sponsorDocUrl}
		style="width:100%;height:100%"
		scrolling="auto"
	/>
</div>
