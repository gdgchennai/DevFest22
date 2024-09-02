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
  class="flex w-full flex-col items-center justify-start space-y-6 px-24"
>
  <h2
    class="flex text-center text-3xl font-bold tracking-tight text-black sm:text-4xl lg:text-5xl"
  >
    DevFest 2023 was so much fun.
  </h2>

  <div class="bg-white">
    <div class="mx-auto py-12 lg:py-24">
      <uli
        role="list"
        class="space-y-12 sm:grid sm:grid-cols-2 sm:gap-x-6 sm:gap-y-12 sm:space-y-0 lg:grid-cols-2 lg:gap-x-8"
      >
        {#if data}
          {#each data.memories as memory}
            <div class="space-y-4">
              <div class="aspect-w-3 aspect-h-2 px-2 md:px-0">
                <img
                  class="rounded-lg object-cover shadow-lg lg:max-h-[370px] lg:min-h-[280px] lg:w-full"
                  src={memory.image}
                  alt={memory.title}
                  loading="lazy"
                />
              </div>
            </div>
          {/each}
        {/if}
      </uli>
    </div>
  </div>
</section>
