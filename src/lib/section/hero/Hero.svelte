<script lang="ts">
  import Button from '$lib/button/Button.svelte';
  import Icon from '$lib/icon/Icon.svelte';
</script>

<section
  id="hero"
  class="flex flex-col items-center justify-start space-y-8  py-8 md:py-16"
>
  <div
    id="hero-content-group"
    class="flex flex-col items-center justify-start space-y-8"
  >
    <h1
      class="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight text-start md:text-center lg:text-center"
    >
      Chennai’s biggest tech conference happening now!
    </h1>
    <p class="max-w-2xl text-start md:text-center lg:text-center text-gray-700">
      Come. Learn, Network and Celebrate with Google Developer Groups and Google
      Developer Experts, learn to hack on Android, Chrome and Web while you are
      at it.
    </p>
  </div>

  <div
    id="hero-cta-group"
    class="w-full flex flex-col md:flex-row lg:flex-row max-w-2xl items-center justify-start space-y-4 md:space-x-4 md:space-y-0"
  >
    <Button
      id="button-hero-get-tickets"
      title="Get your tickets"
      onClick={() => console.log('Clicked get ticket button')}
    >
      <Icon width="20" height="20" name="ticket" />
    </Button>

    <Button
      id="button-hero-watch-trailer"
      title="Watch trailer"
      isSecondaryButton={true}
      onClick={() => console.log('Clicked get watch trailer button')}
    >
      <Icon width="20" height="20" name="video" />
    </Button>
  </div>
</section>
