<script>
 import mandelaBlue from '$lib/assets/mandela_blue.svg'
 import mandelaRed from '$lib/assets/mandela_red.svg'
</script>

<svelte:head>
  <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1, user-scalable=no">
</svelte:head>

<div class="flex w-full flex-col items-center justify-start space-y-8 px-6 sm:px-24 blur-sm">
  <img
    src={mandelaBlue}
    alt="Mandela Blue"
    class="absolute opacity-40 rotate-anticlockwise w-3/4 sm:w-1/2 max-w-md"
    fetchpriority="high"
    loading="eager"
  />
  <img
    src={mandelaRed}
    alt="Mandela Red"
    class="absolute opacity-60 rotate-clockwise w-1/2 sm:w-1/3 max-w-xs"
    fetchpriority="high"
    loading="eager"
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