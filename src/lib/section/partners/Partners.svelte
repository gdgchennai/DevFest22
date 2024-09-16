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
  let plugins = [Autoplay({ delay: 3000 })];
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
      class="embla"
      use:emblaCarouselSvelte={{ options, plugins }}
    >
      <div class="embla__container">
        {#if data}
          {#each data.communityPartners as communityPartner}
            <div class="embla__slide">
              <a href={communityPartner.link} target="_blank" rel="noopener noreferrer" class="block">
                <div class="img-wrapper">
                  <img
                    src={communityPartner.image}
                    class="partner-img"
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
  .embla {
    overflow: hidden;
    width: 100%;
  }

  .embla__container {
    display: flex;
    width: 100%; 
    gap: 1rem;  
  }

  .embla__slide {
    flex: 0 0 20%; 
    padding: 0 15px;
    min-width: 0; 
    box-sizing: border-box;
  }

  .img-wrapper {
    position: relative;
    padding-top: 100%;
    overflow: hidden;
    border: 4px solid #000;
    border-radius: 8px;
    background-color: #fff;
    box-shadow: 8px 8px 0 0 #000;
    transition: all 0.3s cubic-bezier(0.25, 0.8, 0.25, 1);
  }

  .img-wrapper::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: linear-gradient(45deg, #ff6b6b, #feca57, #48dbfb, #ff9ff3);
    opacity: 0.1;
    z-index: 1;
  }

  .img-wrapper:hover {
    transform: translate(-4px, -4px);
    box-shadow: 12px 12px 0 0 #000;
  }

  .img-wrapper:hover::before {
    opacity: 0.2;
  }

  .partner-img {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    object-fit: contain;
    padding: 1rem;
    background-color: #fff;
    z-index: 2;
  }

  /* Responsive Styles */
  @media (max-width: 1024px) {
    .embla__slide {
      flex: 0 0 25%; 
    }
  }

  @media (max-width: 640px) {
    .embla__container {
      gap: 0.5rem; 
    }
    
    .embla__slide {
      flex: 0 0 50%;
      padding: 0 5px;
    }

    .img-wrapper {
      border-width: 2px; 
      box-shadow: 4px 4px 0 0 #000;
    }
  }
</style>
