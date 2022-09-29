<div class="relative w-full max-w-lg max-h-lg -z-10">
  <div
    class="absolute top-12 sm:top-24 z-3 w-96 h-20 md:w-[400px] md:h-[400px] lg:w-[500px] lg:h-[500px] background opacity-40"
  >
    <span />
    <span />
    <span />
    <span />
    <span />
    <span />
    <span />
    <span />
    <span />
    <span />
    <span />
    <span />
    <span />
    <span />
    <span />
    <span />
    <span />
    <span />
    <span />
    <span />
  </div>
</div>

<style lang="scss">
  $particleSize: 40vmin;
  $animationDuration: 15s;
  $amount: 6;
  .background span {
    width: $particleSize;
    height: $particleSize;
    border-radius: $particleSize;
    backface-visibility: hidden;
    position: absolute;
    animation-name: move;
    animation-duration: $animationDuration;
    animation-timing-function: linear;
    animation-iteration-count: infinite;
    $colors: (#4285f4, #db4437, #f4b400, #0f9d58);
    @for $i from 1 through $amount {
      &:nth-child(#{$i}) {
        color: nth($colors, random(length($colors)));
        top: random(100) * 1%;
        left: random(100) * 1%;
        animation-duration: (random($animationDuration * 10) / 10) * 1s + 10s;
        animation-delay: random(($animationDuration + 10s) * 10) / 10 * -1s;
        transform-origin: (random(50) - 25) * 1vw (random(50) - 25) * 1vh;
        $blurRadius: (random() + 0.9) * $particleSize * 0.9;
        $x: if(random() > 0.5, -1, 1);
        box-shadow: ($particleSize * 2 * $x) 0 $blurRadius currentColor;
      }
    }
  }

  @keyframes move {
    100% {
      transform: translate3d(0, 0, 1px) rotate(360deg);
    }
  }
</style>
