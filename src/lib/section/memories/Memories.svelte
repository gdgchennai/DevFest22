<script lang="ts">
  import { dataStore, loadData } from '$lib/stores';
  import { onMount } from 'svelte';

  let data;

  onMount(() => {
    loadData();
  });

  $: data = $dataStore;
</script>

<section id="memories" class="w-full px-4 py-12 md:px-24">
  <h2
    class="mb-12 px-24 text-center text-3xl font-bold tracking-tight text-black sm:text-4xl lg:text-5xl"
  >
    DevFest 2023 was so much fun.
  </h2>

  <div
    class="grid w-full grid-cols-1 gap-8 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2"
  >
    {#if data}
      {#each data.memories as memory}
        <div class="relative w-full max-w-xl">
          <div
            class="rounded-lg border-4 border-black bg-white p-2 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]"
          >
            <div class="relative mb-2">
              <img
                class="aspect-[4/3] h-full w-full rounded-md border-2 border-black"
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
                class="mr-2 h-6 w-6 object-contain"
              />
              <p
                class="text-xl text-black"
                style="font-family: 'Architects Daughter', cursive;"
              >
                {memory.title}
              </p>
              <img
                src="/icons/dev btm.svg"
                alt="Event Logo"
                class="ml-auto h-10 w-10 object-contain"
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
