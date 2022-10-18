<script lang="ts">
  import Button from '$lib/button/Button.svelte';
  import Icon from '$lib/icon/Icon.svelte';
  import Countdown from '$lib/Countdown.svelte';
  import Modal from '$lib/modal/Modal.svelte';
  import { openModal } from 'svelte-modals';

  function handleClick() {
    openModal(Modal, {title: "Get your ticket"})
  }
</script>

<section
  id="hero"
  class="flex flex-col max-w-7xl items-center justify-start space-y-8 transition-all duration-500 ease-in-out"
>
  <div
    id="hero-content-group"
    class="flex flex-col items-center justify-start space-y-8"
  >
    <div class="bg-text-container max-w-7xl">
      <div class="animate-text">
        <span>DevFest22</span>
        <span>DevFest22</span>
      </div>
      <div class="animate-text left">
        <span>DevFest22</span>
        <span>DevFest22</span>
      </div>
    </div>

    <h1
      class="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight text-start md:text-center lg:text-center text-black"
    >
      Chennai’s most awaited developer conference
    </h1>
    <p class="max-w-2xl text-start md:text-center lg:text-center text-gray-700">
      Come learn, network and celebrate with the Google Developer Ecosystem while also learning to hack on Android, Chrome, and Web.
    </p>
  </div>

  <div
    id="hero-cta-group"
    class="w-full flex flex-col md:flex-row lg:flex-row max-w-2xl items-center justify-start space-y-4 md:space-x-4 md:space-y-0"
  >
    <Button
      id="button-hero-get-tickets"
      title="Request invite"
      onClick={() => handleClick()}
    >
      <Icon width="20" height="20" name="ticket" />
    </Button>

    <Button
      id="button-hero-add-to-calendar"
      title="Add to calendar"
      isSecondaryButton={true}
      onClick={() => window.open("https://calendar.google.com/calendar/render?action=TEMPLATE&text=DevFest2022 Chennai&details=Every Tech enthusiast is invited&dates=20221112T100000/20221113T180000&location=Chennai, Tamil Nadu")}
    >
    <i class="fa fa-calendar"></i>
    </Button>
  </div>

  <div class="w-full flex text-xl sm:flex-row md:flex-row lg:flex-row items-center justify-center columns-3 space-x-10">
    <div class="flex items-center space-x-2">
      <i class="fa fa-location-arrow"></i>
      <p>Chennai, Tamil Nadu</p>
    </div>
    <div class="flex items-center space-x-2">
      <i class="fa fa-calendar"></i>
      <p>12th & 13th November, 2022</p>
    </div>
  </div>

  <div class="items-center">
    <Countdown/>
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
