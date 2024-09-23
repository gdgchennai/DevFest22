<script lang="ts">
  import { onMount, onDestroy } from 'svelte';
  import { writable } from 'svelte/store';

  const dimensions = writable({ width: 0, height: 0 });

  function updateDimensions() {
    dimensions.set({
      width: window.innerWidth,
      height: window.innerHeight
    });
  }

  onMount(() => {
    updateDimensions();
    window.addEventListener('resize', updateDimensions);

    // Cleanup event listener on destroy
    return () => {
      window.removeEventListener('resize', updateDimensions);
    };
  });
</script>

<div
  class="fixed bottom-5 right-5 z-50 flex items-center space-x-2 rounded-full bg-black px-2.5 py-1 font-mono text-xs font-medium text-white"
>
  {#if $dimensions}
    <span
      >{$dimensions.width.toLocaleString()} x {$dimensions.height.toLocaleString()}</span
    >
  {/if}
  <div class="h-4 w-px bg-gray-800" />
  <span class="sm:hidden">XS</span>
  <span class="hidden sm:inline md:hidden">SM</span>
  <span class="hidden md:inline lg:hidden">MD</span>
  <span class="hidden lg:inline xl:hidden">LG</span>
  <span class="hidden xl:inline 2xl:hidden">XL</span>
  <span class="hidden 2xl:inline">2XL</span>
</div>
