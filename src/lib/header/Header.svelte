<script lang="ts">
  import Button from '$lib/button/Button.svelte';
  import Icon from '$lib/icon/Icon.svelte';

  const headerMenus = [
    {
      name: 'Home',
      href: '/'
    },
    {
      name: 'Why',
      href: '/#why'
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
    },
    {
      name: 'Newsletter',
      href: '/#newsletter'
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
          {#if item.name === 'Home'}
            <a
              href={item.href}
              class="text-base hidden font-medium text-black hover:text-gray-800"
              >{item.name}</a
            >
          {:else}
            <a
              href={item.href}
              class="text-base  font-medium text-black hover:text-gray-800"
              >{item.name}</a
            >
          {/if}
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
      class="flex space-x-6 py-4 lg:hidden bg-black  fixed bottom-0 left-0 items-center justify-around px-2 w-full z-10 "
    >
      <div class="flex w-full space-x-4 items-center justify-around relative">
        <!-- // Glowing gradient stroke effect -->
        <div
          class="absolute -bottom-[30px] right-3 flex h-8 w-full overflow-hidden items-center justify-center animate-pulse"
        >
          <div class="flex -mb-px h-[2px] w-80 -scale-x-100">
            <div
              class="w-full flex-none blur-sm [background-image:linear-gradient(90deg,rgba(56,189,248,0)_0%,#0EA5E9_32.29%,rgba(236,72,153,0.3)_67.19%,rgba(236,72,153,0)_100%)]"
            />
            <div
              class="-ml-[100%] w-full flex-none blur-[1px] [background-image:linear-gradient(90deg,rgba(56,189,248,0)_0%,#0EA5E9_32.29%,rgba(236,72,153,0.3)_67.19%,rgba(236,72,153,0)_100%)]"
            />
          </div>
        </div>

        {#each headerMenus as item}
          {#if item.name === 'Home' || item.name === 'Newsletter'}
            <a
              href={item.href}
              class="text-base font-medium text-white hover:text-white/80"
            >
              <Icon
                width="24"
                height="24"
                name={item.name === 'Home' ? 'arrowup' : 'mail'}
              />
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
    </div>
  </nav>
</header>
