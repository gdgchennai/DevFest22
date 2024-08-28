<div class="flex w-full flex-col items-center justify-start space-y-8 px-24 blur-sm">
  <img
    src="/mandela_red.svg"
    alt="Mandela Blue"
    class="absolute w-72 h-72 opacity-40 rotate-anticlockwise"
  />
  <img
    src="/mandela_blue.svg"
    alt="Mandela Red"
    class="absolute w-56 h-56 opacity-60 rotate-clockwise"
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
