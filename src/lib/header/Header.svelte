<script lang="ts">
  import Button from '$lib/button/Button.svelte';
  import Icon from '$lib/icon/Icon.svelte';
  import Modal from '$lib/modal/Modal.svelte';
  import { openModal } from 'svelte-modals';

  type Nav = {
    name: string;
    href: string;
    active: boolean;
  };

  let headerMenus: Nav[] = [
    {
      name: 'Home',
      href: '/',
      active: false
    },
    {
      name: 'Why',
      href: '/#why',
      active: false
    },
    {
      name: 'Schedule',
      href: '/#tickets',
      active: false
    },
    {
      name: 'Memories',
      href: '/#memories',
      active: false
    },
    // {
    //   name: 'Badges',
    //   href: '/badges',
    //   active: false
    // }
  ];

  let activeStyle: string =
    'inline-flex items-center justify-center rounded-lg border border-transparent bg-black px-4 py-2 text-sm font-medium text-white shadow-sm hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-gray-500 focus:ring-offset-2';
  let inActiveStyle: string =
    'text-base font-medium text-black hover:text-gray-800';

  let mobileActiveStyle: string =
    'inline-flex justify-center items-center rounded-lg border bg-white border-gray-200 px-2 py-2 text-sm font-medium text-gray-900 shadow-sm hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-500 focus:ring-offset-2';
  let mobileInActiveStyle: string =
    'text-base font-medium text-white hover:text-white/80';

  const activeTab = (nav: Nav) => {
    headerMenus = headerMenus.map((s) => {
      if (s.name === nav.name) {
        s.active = false;
        s.active = !s.active;
      } else {
        s.active = false;
      }
      return s;
    });
  };

  function handleClick() {
    openModal(Modal, { title: 'Thanks for registering!' });
  }
</script>

<header class="transition-all ease-in-out">
  <nav
    class="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8"
    aria-label="Top"
    data-sveltekit-prefetch
  >
    <!-- // Desktop menu at the top of the page (hidden on mobile) -->
    <div class="flex w-full items-center justify-around">
      <div class="flex items-center">
        <a href="/">
          <span class="sr-only">GDG Chennai - Devfest 2023</span>
          <img
            class="h-24 w-auto"
            src="/devfest-chennai.webp"
            alt="GDG Chennai - Devfest 2023"
            height={100}
            width={200}
            fetchpriority="high"
          />
        </a>
      </div>
      {#each headerMenus as item}
        <div class="hidden space-x-8 lg:block">
          {#if item.name === 'Home'}
            <a
              href={item.href}
              class="hidden text-base font-medium text-black hover:text-gray-800"
              >{item.name}</a
            >
          {:else}
            <a
              href={item.href}
              class={item.active === true ? activeStyle : inActiveStyle}
              on:click={() => activeTab(item)}>{item.name}</a
            >
          {/if}
        </div>
      {/each}
      <!-- <div class="ml-10 hidden space-x-4 md:block">
        <Button
          id="button-header-get-tickets"
          title="Registration closed"
          isSecondaryButton={false}
          onClick={() => handleClick()}
        >
          <Icon width="20" height="20" name="ticket" />
        </Button>
      </div> -->
    </div>

    <!-- // Mobile menu at the bottom of the screen when the viewport is less than 640px -->
    <div
      class="fixed bottom-0 left-0 z-10 flex w-full items-center justify-around bg-black py-4 px-2 lg:hidden"
    >
      <div class="relative flex w-full items-center justify-around">
        <!-- // Glowing gradient stroke effect -->
        <div
          class="absolute -bottom-[30px] right-3 flex h-8 w-full animate-pulse items-center justify-center overflow-hidden"
        >
          <div class="-mb-px flex h-[2px] w-80 -scale-x-100">
            <div
              class="w-full flex-none blur-sm [background-image:linear-gradient(90deg,rgba(56,189,248,0)_0%,#0EA5E9_32.29%,rgba(236,72,153,0.3)_67.19%,rgba(236,72,153,0)_100%)]"
            />
            <div
              class="-ml-[100%] w-full flex-none blur-[1px] [background-image:linear-gradient(90deg,rgba(56,189,248,0)_0%,#0EA5E9_32.29%,rgba(236,72,153,0.3)_67.19%,rgba(236,72,153,0)_100%)]"
            />
          </div>
        </div>

        {#each headerMenus as item}
          <a
            href={item.href}
            class={item.active === true
              ? mobileActiveStyle
              : mobileInActiveStyle}
            on:click={() => activeTab(item)}
          >
            {item.name}
          </a>
        {/each}
      </div>
    </div>
  </nav>
</header>
