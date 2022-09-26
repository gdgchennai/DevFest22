<script lang="ts">
  import Button from '$lib/button/Button.svelte';
  import Icon from '$lib/icon/Icon.svelte';
</script>

<header class="bg-white">
  <nav
    class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8"
    aria-label="Top"
    data-sveltekit-prefetch
  >
    <div
      class="flex w-full items-center justify-between border-b border-gray-200 py-6 lg:border-none"
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
        <div class="ml-10 hidden space-x-8 lg:block">
          <a
            href="#why"
            class="text-base font-medium text-gray-900 hover:text-gray-800"
            >Why</a
          >

          <a
            href="#tickets"
            class="text-base font-medium text-gray-900 hover:text-gray-800"
            >Tickets</a
          >

          <a
            href="#partners"
            class="text-base font-medium text-gray-900 hover:text-gray-800"
            >Partners</a
          >

          <a
            href="#memories"
            class="text-base font-medium text-gray-900 hover:text-gray-800"
            >Memories</a
          >
        </div>
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
    <div
      class="flex space-x-6 py-4 lg:hidden bg-gray-900  fixed bottom-0 left-0 items-center justify-between px-6 w-full  z-10"
    >
      <a href="/" class="text-base font-medium text-white hover:text-white/80">
      <a href="#" class="text-base font-medium text-white hover:text-white/80">
        <Icon width="24" height="24" name="arrowup" />
      </a>

      <a
        href="#why"
        class="text-base font-medium text-white hover:text-white/80">Why</a
      >

      <a
        href="#tickets"
        class="text-base font-medium text-white hover:text-white/80">Tickets</a
      >

      <a
        href="#partners"
        class="text-base font-medium text-white hover:text-white/80">Partners</a
      >

      <a
        href="#memories"
        class="text-base font-medium text-white hover:text-white/80">Memories</a
      >
    </div>
  </nav>
</header>
