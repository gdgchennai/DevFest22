<script lang="ts">
  import { dataStore, loadData } from '$lib/stores';
  import { onMount } from 'svelte';
  import emblaCarouselSvelte from 'embla-carousel-svelte';
  import Autoplay from 'embla-carousel-autoplay';

  let data;

  onMount(() => {
    loadData();
  });

  $: data = $dataStore;

  let options = { loop: true, watchDrag: false };
  let plugins = [Autoplay({ delay: 1000 })];
</script>

<section
  id="partners"
  class="flex w-full flex-col items-center justify-start space-y-6 lg:px-24"
>
  <h2
    class="w-full text-center text-3xl font-bold tracking-tight text-black sm:text-4xl lg:text-5xl"
  >
    Community Partners
  </h2>
  <p class="text-md mt-4 text-center text-gray-600">
    Some things are simply better when together!
  </p>
  <div class="bg-white">
    <div
      class="w-full max-w-7xl overflow-hidden py-12 px-4 sm:px-6 lg:px-8"
      use:emblaCarouselSvelte={{ options, plugins }}
    >
      <div class="flex space-x-4 lg:space-x-8">
        {#if data}
          {#each data.communityPartners as communityPartner}
            <div class="carousel-item">
              <a href={communityPartner.link} target="_blank">
                <img
                  src={communityPartner.image}
                  class="img-border h-48"
                  alt={communityPartner.title}
                  loading="lazy"
                  style="object-fit: scale-down;"
                />
              </a>
            </div>
          {/each}
        {/if}
      </div>
    </div>
  </div>
</section>

<style>
  .img-border {
    border: 2px solid #000;
    border-radius: 12px;
    background-color: #fff;
    box-shadow: 6px 6px 0px #000;
  }

  .carousel-item {
    flex: 0 0 15%;
  }

  @media (max-width: 640px) {
    .carousel-item {
      flex: 0 0 30%;
    }
  }
</style>
