<div class="max-h-lg relative -z-10 w-full max-w-lg">
  <div
    class="z-3 background absolute top-12 h-20 w-96 opacity-40 sm:top-24 md:h-[400px] md:w-[400px] lg:h-[500px] lg:w-[500px]"
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
  $animationDuration: 10s;
  $amount: 6;
  $colors: (#4285f4, #db4437, #f4b400, #0f9d58);
  .background span {
    width: $particleSize;
    height: $particleSize;
    border-radius: $particleSize;
    backface-visibility: hidden;
    position: absolute;
    animation-name: move;
    animation-timing-function: linear;
    animation-iteration-count: infinite;

    @for $i from 1 through $amount {
      &:nth-child(#{$i}) {
        color: nth($colors, random(length($colors)));
        top: calc(random(100) * 1%);
        left: calc(random(100) * 1%);
        animation-duration: calc(random($animationDuration * 10) / 10 * 1s + 10s);
        animation-delay: calc(random(($animationDuration + 10s) * 10) / 10 * -1s);
        transform-origin: calc(random(50) - 25) * 1vw calc(random(50) - 25) * 1vh;
        $blurRadius: calc((random() + 0.9) * $particleSize * 0.4);
        $x: if(random() > 0.5, -1, 1);
        box-shadow: calc($particleSize * 2 * $x) 0 $blurRadius currentColor;
      }
    }
  }

  @keyframes move {
    100% {
      transform: translate3d(0, 0, 1px) rotate(360deg);
    }
  }
</style>
