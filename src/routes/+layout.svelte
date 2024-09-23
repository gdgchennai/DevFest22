<script lang="ts">
  import Footer from '$lib/footer/Footer.svelte';
  import Header from '$lib/header/Header.svelte';
  import { Modals, closeModal } from 'svelte-modals';
  import '../app.css';
  import Size from '$lib/components/size.svelte';
  import { dev } from '$app/environment';
</script>

<svelte:head>
  <!-- Primary Meta Tags -->
  <title>Youarenotalone | Anonymously vent out your bottled up emotions</title>
  <meta
    name="title"
    content="Youarenotalone | Anonymously vent out your bottled up emotions"
  />
  <meta
    name="description"
    content="Express your emotions without fear of judgement and know youarenotalone in your everyday battles."
  />

  <!-- Canonical URL -->
  <link rel="canonical" href="https://youarenotalone.in" />

  <!-- Open Graph / Facebook -->
  <meta property="og:type" content="website" />
  <meta property="og:url" content="https://youarenotalone.in" />
  <meta
    property="og:title"
    content="Youarenotalone | Anonymously vent out your bottled up emotions"
  />
  <meta
    property="og:description"
    content="Express your emotions without fear of judgement and know youarenotalone in your everyday battles."
  />
  <meta property="og:image" content="https://youarenotalone.in/image.jpg" />

  <!-- Twitter -->
  <meta property="twitter:card" content="summary_large_image" />
  <meta property="twitter:url" content="https://youarenotalone.in" />
  <meta
    property="twitter:title"
    content="Youarenotalone | Anonymously vent out your bottled up emotions"
  />
  <meta
    property="twitter:description"
    content="Express your emotions without fear of judgement and know youarenotalone in your everyday battles."
  />
  <meta property="twitter:image" content="https://youarenotalone.in/image.jpg" />

  <!-- Meta Tags for SEO -->
  <meta name="robots" content="index, follow" />
  <meta
    name="keywords"
    content="anonymously vent, emotions, express feelings, no judgement, youarenotalone"
  />
  <meta name="author" content="Your Name or Website" />
  <meta name="language" content="English" />
  <meta name="viewport" content="width=device-width, initial-scale=1" />

  <!-- Favicons -->
  <link rel="icon" href="/favicon.ico" />

  <script
    src="https://kit.fontawesome.com/3e56677f9e.js"
    crossorigin="anonymous"></script>
  <link
    rel="stylesheet"
    href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"
  />
  <style>
    @import url('https://fonts.googleapis.com/css?family=Google+Sans:400,500&display=swap');
    @import url('https://fonts.googleapis.com/css?family=Architects+Daughter:400,500&display=swap');
  </style>
</svelte:head>

{#if dev}
  <Size />
{/if}

<main>
  <div id="container" class="mx-auto">
    <Modals>
      <div slot="backdrop" class="backdrop" on:click={closeModal} />
    </Modals>
    <Header />
    <slot />
    <Footer />
  </div>
</main>

<style>
  .backdrop {
    position: fixed;
    top: 0;
    bottom: 0;
    right: 0;
    left: 0;
    z-index: 40;
    background: rgba(0, 0, 0, 0.5);
  }
</style>
