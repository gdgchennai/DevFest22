<script lang="ts">
  import { dataStore, loadData } from '$lib/stores';
  import { onMount } from 'svelte';

  let data;

  onMount(() => {
    loadData();
  });

  $: data = $dataStore;
</script>

<section
  id="memories"
  class="w-full px-4 md:px-24 py-12"
>
  <h2
    class="text-center text-3xl font-bold tracking-tight text-black sm:text-4xl lg:text-5xl mb-12 px-24"
  >
    DevFest 2023 was so much fun.
  </h2>

  <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-8">
    {#if data}
      {#each data.memories as memory}
        <div class="relative box-container max-w-xl">
          <div class="bg-white border-4 border-black rounded-lg p-2 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
            <div class="mb-2 relative image-container">
              <img
                class="w-full h-full rounded-md border-2 border-black"
                src={memory.image}
                alt={memory.title}
                loading="lazy"
                style="object-fit: cover;"
              />
            </div>
            <div class="flex items-center">
              <img 
                src="/icons/dots.svg" 
                alt="Icon" 
                class="w-6 h-6 mr-2 object-contain" 
              />
              <p class="text-xl text-black" style="font-family: 'Architects Daughter', cursive;">{memory.title}</p>
              <img 
                src="/icons/dev btm.svg" 
                alt="Event Logo" 
                class="ml-auto w-10 h-10 object-contain"
              />
            </div>
          </div>
        </div>
      {/each}
    {/if}
  </div>
</section>

<style>
  @media (max-width: 640px) {
    .box-container {
      max-width: 65%;
      margin: 0 auto;
    }

    .image-container img {
      max-width: 100%;
    }
  }
</style>
