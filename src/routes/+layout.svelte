<script lang="ts">
  import Footer from '$lib/footer/Footer.svelte';
  import Header from '$lib/header/Header.svelte';
  import { Modals, closeModal } from 'svelte-modals';
  import '../app.css';
</script>

<svelte:head> 
  <script src="https://kit.fontawesome.com/3e56677f9e.js" crossorigin="anonymous"></script>
  <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css">
  <style>
    @import url('https://fonts.googleapis.com/css?family=Google+Sans:400,500&display=swap');
  </style>
</svelte:head>

<main>
  <div id="container" class="mx-auto">
    <Modals>
      <div
        slot="backdrop"
        class="backdrop"
        on:click={closeModal}
      />
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
    background: rgba(0,0,0,0.50)
  }
</style>
