<script lang="ts">
  import Icon from '$lib/icon/Icon.svelte';
  import { onMount } from 'svelte';
  import { fly } from 'svelte/transition';
  let visible: boolean = false;

  onMount(async () => {
    // set timer to show the blur
    setTimeout(() => {
      visible = true;
    }, 800);
  });

  let gradient: string =
    'linear-gradient(180deg, rgba(0, 0, 0, 0.5) 0%, rgba(0, 0, 0, 0) 100%)';
</script>

{#if visible}
  <div class="relative w-full max-w-lg max-h-lg -z-10">
    <div
      style="background:{gradient}; filter: blur(24px); -webkit-filter: blur(24px); transform: scale(1.5); -webkit-transform: scale(1.1); animation: fadeIn 2s;"
      transition:fly={{ y: 200, duration: 3000 }}
      on:introstart={() => {
        gradient = 'linear-gradient(180deg, #929292 0%, rgba(0, 0, 0, 0) 100%)';
      }}
      on:introend={() => {
        gradient =
          'linear-gradient(180deg, #FBBC04 0%, rgba(251, 188, 4, 0) 100%)';
      }}
      class="absolute top-12 sm:top-24 -left-10 z-3 w-96 h-96 md:w-[400px] md:h-[400px] lg:w-[500px] lg:h-[500px] rounded-full animate-pulse transition-all duration-3000 ease-in-out"
    />
  </div>
{/if}
<script>
  import Icon from '$lib/icon/Icon.svelte';
</script>

<div class="relative w-full max-w-lg max-h-lg -z-10">
  <div
    class="absolute top-12 sm:top-24 -left-10 z-3 w-96 h-96 md:w-[400px] md:h-[400px] lg:w-[500px] lg:h-[500px]"
  >
    <Icon width="500" height="500" name="blurgradient" />
  </div>
</div>
