<script lang="ts">
  import Blur from '$lib/section/blur/Blur.svelte';
  import Hero from '$lib/section/hero/Hero.svelte';
  import Memories from '$lib/section/memories/Memories.svelte';
  import Newsletter from '$lib/section/newsletter/Newsletter.svelte';
  import Partners from '$lib/section/partners/Partners.svelte';
  import Tickets from '$lib/section/tickets/Tickets.svelte';
  import Why from '$lib/section/why/Why.svelte';
</script>

<svelte:head>
  <title>GDG Chennai - Devfest 2022</title>
  <meta name="description" content="GDG Chennai - Devfest 2022" />
  <style>
    @import url('https://fonts.googleapis.com/css?family=Google+Sans:400,500&display=swap');
  </style>
</svelte:head>

<div
  class="flex flex-col items-center justify-start space-y-16 md:space-y-44 p-8  min-h-screen overflow-hidden"
>
  <Blur visible={true} />
  <Hero />
  <Why />
  <Tickets />
  <Partners />
  <Memories />
  <Newsletter />
</div>
