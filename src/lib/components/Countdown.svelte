<script lang="ts">
  import { onMount } from 'svelte';
  import { writable } from 'svelte/store';

  const days = writable('00');
  const hours = writable('00');
  const minutes = writable('00');
  const seconds = writable('00');

  function getTimeRemaining(endtime: string) {
    const t = Date.parse(endtime) - Date.parse(new Date().toString());
    return {
      total: t,
      days: Math.floor(t / (1000 * 60 * 60 * 24)),
      hours: Math.floor((t / (1000 * 60 * 60)) % 24),
      minutes: Math.floor((t / 1000 / 60) % 60),
      seconds: Math.floor((t / 1000) % 60)
    };
  }

  function updateClock(endtime: string) {
    const t = getTimeRemaining(endtime);
    days.set(('0' + t.days).slice(-2));
    hours.set(('0' + t.hours).slice(-2));
    minutes.set(('0' + t.minutes).slice(-2));
    seconds.set(('0' + t.seconds).slice(-2));
  }

  onMount(() => {
    const deadline = 'October 05 2024 08:59:59';
    updateClock(deadline);
    const interval = setInterval(() => {
      updateClock(deadline);
      if (getTimeRemaining(deadline).total <= 0) {
        clearInterval(interval);
      }
    }, 1000);
  });
</script>

<div class={`relative w-full p-2 sm:p-4`}>
  <div class="flex justify-center items-center space-x-2 sm:space-x-4">
    <div class="countdown-item days-item">
      <div class="countdown-box">
        <span class="countdown-value">{$days}</span>
        <span class="countdown-label">Days</span>
      </div>
    </div>
    <div class="countdown-item hours-item">
      <div class="countdown-box">
        <span class="countdown-value">{$hours}</span>
        <span class="countdown-label">Hours</span>
      </div>
    </div>
    <div class="countdown-item minutes-item">
      <div class="countdown-box">
        <span class="countdown-value">{$minutes}</span>
        <span class="countdown-label">Min</span>
      </div>
    </div>
    <div class="countdown-item seconds-item">
      <div class="countdown-box">
        <span class="countdown-value">{$seconds}</span>
        <span class="countdown-label">Sec</span>
      </div>
    </div>
  </div>
</div>

<style>
  .countdown-item {
    position: relative;
    width: 70px;
    height: 70px;
  }

  @media (min-width: 640px) {
    .countdown-item {
      width: 100px;
      height: 100px;
    }
  }

  .countdown-box {
    background-color: white;
    border: 2px solid black;
    border-radius: 0.50rem;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 100%;
    transition: background-color 0.3s;
    position: relative;
    overflow: hidden;
    box-shadow: 5px 5px 0px black;
  }

  .countdown-box::after {
    content: '';
    position: absolute;
    bottom: 0;
    right: 0;
    width: 30%;
    height: 30%;
    border-top-left-radius: 100%;
    transition: opacity 0.3s;
    opacity: 1;
  }

  .days-item .countdown-box::after { background-color: #4285F4; }
  .hours-item .countdown-box::after { background-color: #34A853; }
  .minutes-item .countdown-box::after { background-color: #F9AB00; }
  .seconds-item .countdown-box::after { background-color: #EA4335; }

  .countdown-item:hover .countdown-box::after {
    opacity: 0;
  }

  .days-item:hover .countdown-box { background-color: #E3F2FD; }
  .hours-item:hover .countdown-box { background-color: #E8F5E9; }
  .minutes-item:hover .countdown-box { background-color: #FFFDE7; }
  .seconds-item:hover .countdown-box { background-color: #FFEBEE; }

  .countdown-value {
    font-size: 1.5rem;
    font-weight: bold;
    color: black;
    line-height: 1;
    z-index: 1;
  }

  .countdown-label {
    font-size: 0.75rem;
    color: #4a5568;
    margin-top: 0.25rem;
    z-index: 1;
  }

  @media (min-width: 640px) {
    .countdown-value {
      font-size: 2.5rem;
    }

    .countdown-label {
      font-size: 1rem;
    }
  }

  .countdown-item::before {
    content: '';
    position: absolute;
    top: -4px;
    left: 50%;
    transform: translateX(-50%);
    width: 40%;
    height: 4px;
    background-color: black;
    border-top-left-radius: 4px;
    border-top-right-radius: 4px;
  }

  @media (min-width: 640px) {
    .countdown-item::before {
      top: -6px;
      height: 6px;
      border-top-left-radius: 6px;
      border-top-right-radius: 6px;
    }
  }
</style>
