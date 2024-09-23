<script lang="ts">
  import mandelaBlue from '$lib/assets/mandela_blue.svg';
  import mandelaRed from '$lib/assets/mandela_red.svg';
  import Button from '$lib/components/Button.svelte';
  import Icon from '$lib/icon/Icon.svelte';
  import Countdown from '$lib/components/Countdown.svelte';
  import { registrationUrl } from '$lib/data';
  import { addToCalendarUrl } from '$lib/data';
  import Mandela from '../../components/Mandela.svelte';

  function handleClick() {
    window.open(registrationUrl);
  }
</script>

<section
  id="hero"
  class="flex w-full flex-col items-center justify-start space-y-8  px-24 py-20 transition-all  duration-500 ease-in-out"
>
  <div
    id="hero-content-group"
    class="flex w-full flex-col items-center justify-start space-y-8"
  >
    <h1
      class="text-center text-5xl font-bold tracking-tight text-black md:text-6xl lg:text-7xl"
    >
      Chennai’s most awaited <br /> tech conference
    </h1>
    <div class="relative -z-50 flex w-full flex-col items-center">
      <img
        src={mandelaBlue}
        alt="Mandela Blue"
        class="rotate-clockwise absolute w-full opacity-40 sm:w-1/2"
      />
      <img
        src={mandelaRed}
        alt="Mandela Red"
        class="rotate-counterclockwise absolute w-full opacity-60"
      />
    </div>
    <p class="max-w-2xl text-center font-medium text-gray-700">
      Come learn, network and celebrate with the Google Developer Ecosystem
      while also learning to hack on Android, Chrome, and Web.
    </p>
  </div>

  <div
    id="hero-cta-group"
    class="flex w-full max-w-2xl flex-col items-center justify-start space-y-4 md:flex-row md:space-x-4 md:space-y-0 lg:flex-row"
  >
    <Button
      id="button-hero-get-tickets"
      title="Get Tickets"
      onClick={() => handleClick()}
    >
      <Icon width="20" height="20" name="ticket" />
    </Button>

    <Button
      id="button-hero-add-to-calendar"
      isSecondaryButton={true}
      title="Add to calendar"
      onClick={() => window.open(addToCalendarUrl)}
    >
      <i class="fa fa-calendar" />
    </Button>
  </div>

  <div
    class="flex w-full flex-col items-center justify-center space-y-3 text-xl sm:flex-row sm:space-y-0 sm:space-x-6"
  >
    <div class="flex items-center space-x-2">
      <i class="fa fa-calendar" />
      <p>October 5, 2024</p>
      <i class="fa fa-location-arrow" />
      <a href="https://maps.app.goo.gl/KnoovD6vyYEHWnDr8"
        ><p>IIT-M Research Park, Chennai</p></a
      >
    </div>
  </div>

  <div class="items-center">
    <Countdown />
  </div>
</section>

<style>
  .rotate-clockwise {
    animation: rotate-clockwise 10s linear infinite;
    filter: blur(5px); /* Added blur effect */
  }

  .rotate-counterclockwise {
    animation: rotate-counterclockwise 10s linear infinite;
    filter: blur(5px); /* Added blur effect */
  }

  @keyframes rotate-clockwise {
    from {
      transform: rotate(0deg);
    }
    to {
      transform: rotate(360deg);
    }
  }

  @keyframes rotate-counterclockwise {
    from {
      transform: rotate(0deg);
    }
    to {
      transform: rotate(-360deg);
    }
  }
</style>
