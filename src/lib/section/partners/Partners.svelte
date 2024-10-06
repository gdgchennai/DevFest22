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

  let options = { loop: true, align: 'center', skipSnaps: false };
  let plugins = [Autoplay({ delay: 1000 })];
</script>

<section
  id="partners"
  class="flex w-full flex-col items-center justify-start space-y-8 bg-gray-100 py-16 lg:px-24"
>
  <h2
    class="w-full text-center text-3xl font-bold tracking-tight text-black sm:text-4xl lg:text-5xl"
  >
    Community Partners
  </h2>
  <p class="text-md mt-2 max-w-2xl text-center text-gray-700">
    Some things are simply better when together!
  </p>
  <div class="w-full max-w-7xl overflow-hidden">
    <div
      class="w-full overflow-hidden"
      use:emblaCarouselSvelte={{ options, plugins }}
    >
      <div class="flex">
        {#if data}
          {#each data.communityPartners as communityPartner}
            <div class="embla__slide">
              <a
                href={communityPartner.link}
                target="_blank"
                rel="noopener noreferrer"
                class="block"
              >
                <div
                  style="padding-top: 100%;"
                  class="relative overflow-hidden rounded-lg border-4 border-black bg-white shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] transition-all hover:translate-x-1 hover:translate-y-1 hover:shadow-[2px_2px_0px_0px_rgba(0,0,0,1)]"
                >
                  <img
                    src={communityPartner.image}
                    class="w-full h-full absolute top-0 left-0 object-contain p-4 z-2"
                    alt={communityPartner.title}
                    loading="lazy"
                  />
                </div>
              </a>
            </div>
          {/each}
        {/if}
      </div>
    </div>
  </div>
</section>

<style>
  .embla__slide {
    flex: 0 0 20%;
    padding: 0 15px;
    min-width: 0;
    box-sizing: border-box;
  }

  /* Responsive Styles */
  @media (max-width: 1024px) {
    .embla__slide {
      flex: 0 0 25%;
    }
  }

  @media (max-width: 640px) {
    .embla__slide {
      flex: 0 0 50%;
      padding: 0 5px;
    }
  }
</style>
