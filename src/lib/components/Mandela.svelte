<script>
  import mandelaBlue from '$lib/assets/mandela_blue.svg'
  import mandelaRed from '$lib/assets/mandela_red.svg'
</script>
<div class="flex w-full flex-col items-center justify-center space-y-8 md:px-24 px-24 relative blur-sm">
  <img
    src="{mandelaBlue}"
    alt="Mandela Blue"
    class="absolute w-2/3 opacity-60 rotate-anticlockwise"
    fetchpriority="high"
    loading="eager"
    height={288}
    weight={288}
  />
  <img
    src="{mandelaRed}"
    alt="Mandela Red"
    class="absolute w-2/3 opacity-70 rotate-clockwise"
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
      transform: scale(2) rotate(0deg);
    }
    100% {
      transform: scale(2) rotate(360deg);
    }
  }

  @keyframes rotateScaleAnticlockwise {
    0% {
      transform: scale(4) rotate(0deg);
    }
    100% {
      transform: scale(4) rotate(-360deg);

    }
  }
</style>
