<script lang="ts">
  import Blur from '$lib/section/blur/Blur.svelte';
  import Faq from '$lib/section/faq/FAQ.svelte';
  import Hero from '$lib/section/hero/Hero.svelte';
  import Memories from '$lib/section/memories/Memories.svelte';
  import Sponsors from '$lib/section/sponsors/Sponsors.svelte';
  import Partners from '$lib/section/partners/Partners.svelte';
  import Tickets from '$lib/section/tickets/Tickets.svelte';
  import Why from '$lib/section/why/Why.svelte';
  import Youtube from '$lib/section/youtube/youtube.svelte';
</script>

<svelte:head>
  <title>GDG Chennai - Devfest 2022</title>
  <meta name="description" content="GDG Chennai - Devfest 2022" />
  <meta name="viewport" content="width=device-width, initial-scale=1" />
  <meta name="theme-color" content="#ffffff" />
  <meta name="twitter:card" content="summary_large_image" />
  <meta name="twitter:site" content="@gdgchennai" />
  <meta name="twitter:creator" content="@gdgchennai" />
  <meta name="twitter:title" content="GDG Chennai - Devfest 2022" />
  <meta name="twitter:description" content="GDG Chennai - Devfest 2022" />
  <meta
    name="twitter:image"
    content="https://devfest.gdgchennai.in/gdgch-banner.png"
  />
  <meta property="og:type" content="website" />
  <meta property="og:title" content="GDG Chennai - Devfest 2022" />
  <meta property="og:description" content="GDG Chennai - Devfest 2022" />
  <meta property="og:site_name" content="GDG Chennai - Devfest 2022" />
  <meta property="og:url" content="https://devfest.gdgchennai.in/" />
  <meta
    property="og:image"
    content="https://devfest.gdgchennai.in/gdgch-banner.png"
  />
</svelte:head>

<div
  class="flex min-h-screen flex-col items-center justify-start overflow-hidden p-8"
>
  <div class="space-y-16 md:space-y-44">
    <Blur />
    <Hero />
    <Youtube />
    <Why />
    <Tickets />
    <Sponsors />
    <Partners />
    <Memories />
    <Faq />
  </div>
</div>
