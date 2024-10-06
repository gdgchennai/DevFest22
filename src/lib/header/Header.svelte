<script lang="ts">
  import type { NavMenu } from '$lib/types';
  // import { registrationUrl } from '$lib/data';
  import { onMount } from 'svelte';
  import desktopHeader from '$lib/assets/header-dfchn.webp';
  import { dataStore, loadData } from '$lib/stores';

  let data;

  onMount(() => {
    loadData();
  });

  $: data = $dataStore;

  let headerMenus: NavMenu[] = [
    { name: 'Home', href: '/', active: false },
    { name: 'Why', href: '/#why', active: false },
    { name: 'Agenda', href: '/agenda', active: false },
    { name: 'Memories', href: '/#memories', active: false }
  ];

  let activeStyle: string =
    'inline-flex items-center justify-center rounded-lg border border-transparent bg-black px-4 py-2 text-sm font-medium text-white shadow-sm hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-gray-500 focus:ring-offset-2';
  let inActiveStyle: string =
    'text-base font-medium text-black hover:text-gray-800';
  let mobileActiveStyle: string =
    'inline-flex justify-center items-center rounded-lg border bg-white border-gray-200 px-2 py-2 text-sm font-medium text-gray-900 shadow-sm hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-500 focus:ring-offset-2';
  let mobileInActiveStyle: string =
    'text-base font-medium text-white hover:text-white/80';

  const activeTab = (nav: NavMenu) => {
    headerMenus = headerMenus.map((s) => {
      if (s.name === nav.name) {
        s.active = !s.active;
      } else {
        s.active = false;
      }
      return s;
    });
  };

  // function handleClick() {
  //   window.open(registrationUrl);
  // }
</script>

<header class="transition-all ease-in-out">
  <div class="mt-4 w-full items-center justify-center px-4 lg:px-24 lg:flex">
    <img
      src={desktopHeader}
      alt="Desktop Header"
      class="md:h-[50%] md:w-[50%] object-contain"
    />
  </div>

  <nav class="mx-auto mt-4 max-w-4xl px-4 sm:px-6 lg:px-8" aria-label="Top">
    <div class="hidden w-full items-center justify-between py-4 lg:flex">
      {#each headerMenus as item}
        <a
          href={item.href}
          class={item.active === true ? activeStyle : inActiveStyle}
          on:click={() => activeTab(item)}>{item.name}</a
        >
      {/each}
      <!-- <div class="ml-10 space-x-4">
        <Button
          id="button-header-get-tickets"
          title="Get Tickets"
          isSecondaryButton={false}
          onClick={() => handleClick()}
        >
          <Icon width="20" height="20" name="ticket" />
        </Button>
      </div> -->
    </div>
    <div
      class="fixed bottom-0 left-0 z-10 flex w-full items-center justify-around bg-black py-4 px-2 lg:hidden"
    >
      <div class="relative flex w-full items-center justify-around">
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

  <div class="flex items-center bg-[#F9AB00] text-sm lg:text-base">
    <span class="pl-4 font-medium text-black">Announcements</span>
    <span class="px-2 pr-4 leading-none">📢</span>
    <div class="relative whitespace-nowrap overflow-hidden mt-0 w-full bg-[#F9AB00] py-2 lg:mt-0">
      <div class="marquee-content">
        {#if data}
          {#each data.announcements as announcements, index}
            <span class="mx-4 font-medium text-black">{announcements}</span>
            {#if index < announcements.length - 1}
              <img
                src="/icons/band-seperator.svg"
                alt="Separator Icon"
                class="inline-block h-4 w-4"
              />
            {/if}
          {/each}
          {#each data.announcements as announcements, index}
            <span class="mx-4 font-medium text-black">{announcements}</span>
            {#if index < announcements.length - 1}
              <img
                src="/icons/band-seperator.svg"
                alt="Separator Icon"
                class="inline-block h-4 w-4"
              />
            {/if}
          {/each}
        {/if}
      </div>
    </div>
  </div>
</header>

<style>
  .marquee-content {
    display: inline-block;
    white-space: nowrap;
    animation: marquee 30s linear infinite;
  }

  @keyframes marquee {
    0% {
      transform: translateX(0);
    }
    100% {
      transform: translateX(-100%);
    }
  }
</style>
