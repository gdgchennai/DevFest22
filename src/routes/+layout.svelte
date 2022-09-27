<script lang="ts">
  import Footer from '$lib/footer/Footer.svelte';
  import Header from '$lib/header/Header.svelte';
  import '../app.css';
</script>

<main>
  <div id="container" class="mx-auto">
    <Header />
    <slot />
    <Footer />
  </div>
</main>
