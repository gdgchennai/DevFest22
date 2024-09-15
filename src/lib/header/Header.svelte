<script lang="ts">
  import Button from '$lib/components/Button.svelte';
  import Icon from '$lib/icon/Icon.svelte';
  import type { NavMenu } from '$lib/types';
  import { registrationUrl } from "$lib/data";
  import { onMount } from 'svelte';

  let headerMenus: NavMenu[] = [
    { name: 'Home', href: '/', active: false },
    { name: 'Why', href: '/#why', active: false },
    { name: 'Schedule', href: '/#tickets', active: false },
    { name: 'Memories', href: '/#memories', active: false },
  ];

  let activeStyle: string = 'inline-flex items-center justify-center rounded-lg border border-transparent bg-black px-4 py-2 text-sm font-medium text-white shadow-sm hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-gray-500 focus:ring-offset-2';
  let inActiveStyle: string = 'text-base font-medium text-black hover:text-gray-800';
  let mobileActiveStyle: string = 'inline-flex justify-center items-center rounded-lg border bg-white border-gray-200 px-2 py-2 text-sm font-medium text-gray-900 shadow-sm hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-500 focus:ring-offset-2';
  let mobileInActiveStyle: string = 'text-base font-medium text-white hover:text-white/80';

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

  function handleClick() {
    window.open(registrationUrl);
  }

  let announcements = [
    "📢 Announcements",
    "Welcome to DevFest 2024!",
    "First Phase of Students Tickets Closed",
    "Women Exclusive Professionals Tickets are Open",
  ];

  let marqueeContainerWidth: number;
  let marqueeContentWidth: number;

  function setMarqueeProperties() {
    const container = document.querySelector('.marquee-container') as HTMLElement;
    const content = document.querySelector('.marquee-content') as HTMLElement;
    
    if (container && content) {
      marqueeContainerWidth = container.offsetWidth;
      marqueeContentWidth = content.offsetWidth;
      
      while (marqueeContentWidth < marqueeContainerWidth * 2) {
        content.innerHTML += content.innerHTML;
        marqueeContentWidth = content.offsetWidth;
      }
      const duration = marqueeContentWidth / 50; 
      container.style.setProperty('--marquee-duration', `${duration}s`);
    }
  }

  onMount(() => {
    setMarqueeProperties();
    window.addEventListener('resize', setMarqueeProperties);
    return () => {
      window.removeEventListener('resize', setMarqueeProperties);
    };
  });
</script>

<header class="transition-all ease-in-out">

  <a href="/" class="hidden lg:flex justify-center items-center mt-4">
    <img
      src="/desktop-header.svg"
      alt="Desktop Header"
      class="w-[100%] h-[400px] object-contain"
    />
  </a>
  <a href="/" class="lg:hidden flex justify-center items-center mt-2">
    <img
      src="/desktop-header.svg"
      alt="Mobile Header"
      class="w-[96%] h-[190px] object-contain"
    />
  </a>

  <nav
    class="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 mt-4"
    aria-label="Top"
  >
    <div class="hidden lg:flex w-full items-center justify-between py-4">
      {#each headerMenus as item}
        <a
          href={item.href}
          class={item.active === true ? activeStyle : inActiveStyle}
          on:click={() => activeTab(item)}>{item.name}</a
        >
      {/each}
      <div class="ml-10 space-x-4">
        <Button
          id="button-header-get-tickets"
          title="Get Tickets"
          isSecondaryButton={false}
          onClick={() => handleClick()}
        >
          <Icon width="20" height="20" name="ticket" />
        </Button>
      </div>
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
  <div class="w-full bg-[#F9AB00] py-2 mt-0 lg:mt-0 overflow-hidden marquee-container">
    <div class="marquee-content">
      {#each announcements as announcement, index}
        <span class="mx-4 text-black font-medium">{announcement}</span>
        {#if index < announcements.length - 1}
          <img src="/icons/band-seperator.svg" alt="Separator Icon" class="w-4 h-4 inline-block" />
        {/if}
      {/each}
    </div>
  </div>
</header>

<style>
  .marquee-container {
    width: 100%;
    overflow: hidden;
  }

  .marquee-content {
    display: inline-block;
    white-space: nowrap;
    animation: marquee var(--marquee-duration) linear infinite;
  }

  @keyframes marquee {
    0% {
      transform: translateX(0);
    }
    100% {
      transform: translateX(-50%);
    }
  }

  .marquee-container:hover .marquee-content {
    animation-play-state: paused;
  }
</style>
