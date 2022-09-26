<script lang="ts">
  import Button from '$lib/button/Button.svelte';
  import Icon from '$lib/icon/Icon.svelte';

  const headerMenus = [
    {
      name: 'Why',
      href: '/'
    },
    {
      name: 'Tickets',
      href: '/#tickets'
    },
    {
      name: 'Partners',
      href: '/#partners'
    },
    {
      name: 'Memories',
      href: '/#memories'
    }
  ];
</script>

<header class="bg-white">
  <nav
    class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8"
    aria-label="Top"
    data-sveltekit-prefetch
  >
    <!-- // Desktop menu at the top of the page (hidden on mobile) -->
    <div
      class="flex w-full items-center border-b justify-around border-gray-200 py-6 lg:border-none"
    >
      <div class="flex items-center">
        <a href="/">
          <span class="sr-only">GDG Chennai - Devfest 2022</span>
          <img
            class="h-24 w-auto"
            src="/devfest-chennai.png"
            alt="GDG Chennai - Devfest 2022"
          />
        </a>
      </div>
      <div class="hidden space-x-8 lg:block">
        {#each headerMenus as item}
          <a
            href={item.href}
            class="text-base font-medium text-gray-900 hover:text-gray-800"
            >{item.name}</a
          >
        {/each}
      </div>
      <div class="ml-10 space-x-4 md:block hidden">
        <Button
          id="button-header-get-tickets"
          title="Get your tickets"
          isSecondaryButton={false}
          onClick={() => console.log('Buy ticket clicked')}
        >
          <Icon width="20" height="20" name="ticket" />
        </Button>
      </div>
    </div>

    <!-- // Mobile menu at the bottom of the screen when the viewport is less than 640px -->
    <div
      class="flex space-x-6 py-4 lg:hidden bg-gray-900  fixed bottom-0 left-0 items-center justify-around px-6 w-full  z-10"
    >
      <a href="/" class="text-base font-medium text-white hover:text-white/80">
        <Icon width="24" height="24" name="arrowup" />
      </a>

      {#each headerMenus as item}
        {#if item.name === 'Home'}
          <a
            href="/"
            class="text-base font-medium text-white hover:text-white/80"
          >
            <Icon width="24" height="24" name="arrowup" />
          </a>
        {:else}
          <a
            href={item.href}
            class="text-base font-medium text-white hover:text-white/80"
          >
            {item.name}
          </a>
        {/if}
      {/each}
    </div>
  </nav>
</header>
