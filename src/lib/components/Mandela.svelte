<script>
  import mandelaBlue from '$lib/assets/mandela_blue.svg';
  import mandelaRed from '$lib/assets/mandela_red.svg';
</script>

<svelte:head>
  <meta
    name="viewport"
    content="width=device-width, initial-scale=1, maximum-scale=1, user-scalable=no"
  />
</svelte:head>

<div
  class="flex hidden w-full flex-col items-center justify-start space-y-8 overflow-clip px-6 blur-sm sm:block sm:px-24"
>
  <img
    src={mandelaBlue}
    alt="Mandela Blue"
    class="rotate-anticlockwise absolute w-3/4 max-w-md opacity-40 sm:w-1/2"
    fetchpriority="high"
    loading="eager"
  />
  <img
    src={mandelaRed}
    alt="Mandela Red"
    class="rotate-clockwise absolute w-1/2 max-w-xs opacity-60 sm:w-1/3"
    fetchpriority="high"
    loading="eager"
  />
</div>

<div
  class="block flex w-full flex-col items-center justify-start space-y-8 overflow-clip px-6 blur-sm sm:hidden sm:px-24"
>
  <img
    src={mandelaBlue}
    alt="Mandela Blue"
    class="rotate-anticlockwise absolute w-3/4 max-w-md opacity-40 sm:w-1/2"
    fetchpriority="high"
    loading="eager"
    width="50"
    height="50"
  />
  <img
    src={mandelaRed}
    alt="Mandela Red"
    class="rotate-clockwise absolute w-1/2 max-w-xs opacity-60 sm:w-1/3"
    fetchpriority="high"
    loading="eager"
    width="50"
    height="50"
  />
</div>

<style>
  .rotate-clockwise {
    animation: rotateScaleClockwise 30s infinite linear;
  }
  .rotate-anticlockwise {
    animation: rotateScaleAnticlockwise 30s infinite linear;
  }
  @keyframes rotateScaleClockwise {
    0% {
      transform: scale(1) rotate(0deg);
    }
    100% {
      transform: scale(1) rotate(360deg);
    }
  }
  @keyframes rotateScaleAnticlockwise {
    0% {
      transform: scale(1.5) rotate(0deg);
    }
    100% {
      transform: scale(1.5) rotate(-360deg);
    }
  }
</style>
