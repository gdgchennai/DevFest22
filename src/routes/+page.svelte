<script lang="ts">
  import Blur from '$lib/components/Blur.svelte';
  import Hero from '$lib/section/hero/Hero.svelte';
  import Memories from '$lib/section/memories/Memories.svelte';
  import Sponsors from '$lib/section/sponsors/Sponsors.svelte';
  import Partners from '$lib/section/partners/Partners.svelte';
  import Tickets from '$lib/section/tickets/Tickets.svelte';
  import Why from '$lib/section/why/Why.svelte';
</script>

<svelte:head>
  <title>GDG Chennai - Devfest 2024</title>
</svelte:head>

<div
  class="flex min-h-screen flex-col items-center justify-start overflow-hidden"
>
  <div class="space-y-16 md:space-y-44">
    <Blur />
    <Hero />
    <Why />
    <Tickets />
    <Sponsors />
    <Partners />
    <Memories />
  </div>
</div>
