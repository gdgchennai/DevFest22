<script lang="ts">
  import Button from '$lib/button/Button.svelte';
  import Icon from '$lib/icon/Icon.svelte';
  import Countdown from '$lib/section/countdown/Countdown.svelte';
  import Modal from '$lib/modal/Modal.svelte';
  import { openModal } from 'svelte-modals';

  function handleClick() {
    window.open('https://onlivestudios.in/e/devfest-2022-google-developers-group/')
  }
</script>

<section
  id="hero"
  class="flex w-full flex-col items-center justify-start space-y-8 px-24 transition-all  duration-500 ease-in-out"
>
  <div
    id="hero-content-group"
    class="flex flex-col items-center justify-start space-y-8"
  >
    <div class="bg-text-container max-w-7xl">
      <div class="animate-text">
        <span>DevFest23</span>
        <span>DevFest23</span>
      </div>
      <div class="animate-text left">
        <span>DevFest23</span>
        <span>DevFest23</span>
      </div>
    </div>

    <h1
      class="text-start text-4xl font-bold tracking-tight text-black md:text-center md:text-6xl lg:text-center lg:text-7xl"
    >
      Chennai’s most awaited developer conference
    </h1>
    <p class="max-w-2xl text-start text-gray-700 md:text-center lg:text-center">
      Come learn, network and celebrate with the Google Developer Ecosystem
      while also learning to hack on Android, Chrome, and Web.
    </p>
  </div>

  <div
    id="hero-cta-group"
    class="flex w-full max-w-md flex-col items-center justify-start md:flex-row lg:flex-row"
  >
    <Button
      id="button-hero-get-tickets"
      title="Watch sessions (2022)"
      onClick={() => handleClick()}
    >
      <Icon width="20" height="20" name="ticket" />
    </Button>
  </div>

  <div
    class="flex w-full flex-col items-center justify-center space-y-3 text-xl sm:flex-row sm:space-y-0 sm:space-x-6"
  >
    <div class="flex items-center space-x-2">
      <i class="fa fa-calendar" />
      <p>November 25th</p>
      <i class="fa fa-location-arrow" />
      <a href=#
        ><p>TBD</p></a>
    </div>
    <div><p>&</p></div>
    <div class="flex items-center space-x-2">
      <i class="fa fa-calendar" />
      <p>November 26th</p>
      <i class="fa fa-location-arrow" />
      <a href=#
        ><p>TBD</p></a>
    </div>
  </div>

</section>

<style>
  #hero {
    transform: skewY(-5deg);
  }

  .bg-text-container {
    transform: translateX(-50%);
    left: 50%;
    position: absolute;
    z-index: -999;
  }

  span {
    font-size: 280px;
    color: transparent;
    -webkit-text-stroke: 2px #30442a;
    text-transform: uppercase;
    display: inline-block;
    line-height: 0.75;
    min-width: auto;
    font-weight: 200;
    opacity: 0.1;
  }

  @keyframes text-scrolling {
    0% {
      transform: translate3d(-100%, 0, 0);
    }
    100% {
      transform: translate3d(0%, 0, 0);
    }
  }
  .animate-text {
    animation: text-scrolling 20s linear infinite;
    will-change: transform;
    display: block;
    position: relative;
    white-space: nowrap;
  }
  .animate-text.left {
    animation-direction: reverse;
  }
</style>
