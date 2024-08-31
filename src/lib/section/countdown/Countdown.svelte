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

    updateClock(deadline); // Update immediately
    const interval = setInterval(() => {
      updateClock(deadline);
      if (getTimeRemaining(deadline).total <= 0) {
        clearInterval(interval);
      }
    }, 1000);
  });
</script>

<div id="clockdiv" class="flex space-x-6 text-center">
  <div class="bg-white border-2 border-black p-3 rounded-lg text-black countdown-bg hover:bg-blue-100">
    <span class="text-3xl">{$days}</span>
    <div class="font-medium text-gray-600">Days</div>
  </div>
  <div class="bg-white border-2 border-black p-3 rounded-lg text-black countdown-bg hover:bg-green-100">
    <span class="text-3xl">{$hours}</span>
    <div>Hours</div>
  </div>
  <div class="bg-white border-2 border-black p-3 rounded-lg text-black countdown-bg hover:bg-yellow-100">
    <span class="text-3xl">{$minutes}</span>
    <div class="font-medium text-gray-600">Minutes</div>
  </div>
  <div class="bg-white border-2 border-black p-3 rounded-lg text-black countdown-bg hover:bg-red-100">
    <span class="text-3xl">{$seconds}</span>
    <div class="font-medium text-gray-600">Seconds</div>
  </div>
</div>

<style>
 .countdown-bg {
		box-shadow: 0.3em 0.3em;
	}
</style>
