<script>
  import SpeakerCard from "./speaker-card.svelte";
  import Button from '$lib/button/Button.svelte';

  function handleClick() {
    window.open("https://sessionize.com/devfest-chennai-2022", '_blank').focus();
  }

  const speakers = [
    {
      name: 'This could be you 👀',
      imageUrl: '/speaker-avatar.png',
      designation: 'What defines you best?',
      platform1: '#Android',
      platform2: '#Cloud',
      platform3: '#ML/AI',
    },
    {
      name: 'We got a spot for you! 💫',
      imageUrl: '/speaker-avatar.png',
      designation: 'Join the biggest speaking platform now!',
      platform1: '#Firebase',
      platform2: '#AR',
      platform3: '#Web',
    },
    {
      name: 'Star of the show 🌟',
      imageUrl: '/speaker-avatar.png',
      designation: 'Get the stage to share your knowledge!',
      platform1: '#Kotlin',
      platform2: '#Android',
      platform3: '#Firebase'
    },
    {
      name: 'Amazing speaker loading 🔃',
      imageUrl: '/speaker-avatar.png',
      designation: 'Connect with the community!',
      platform1: '#Cloud',
      platform2: '#AR',
      platform3: '#ML/AI',
    },
  ];
</script>
<section
  id="speaker"
  class="flex w-full max-auto flex-col items-center space-y-6 drop-shadow-md"
>
  <div class="bg-white rounded-lg">
    <div class="pt-12 sm:pt-16 lg:pt-20 flex justify-center">
      <div class="md:w-1/2 max-w-7xl px-4 sm:px-6">
        <div class="text-center">
          <h2
            class="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-gray-900"
          >
            <!--Our Speakers-->
            Call for Speakers
          </h2>
          <p class="mt-4  sm:text-xl text-gray-600">
            <!--Here's our incredible list of people who will bring the event to life!-->
            Thank you for all your submissions, The speakers for the event will be listed here shortly.
          </p>
        </div>
      </div>
    </div>
    <div class="w-full md:flex mx-auto max-w-7xl py-10 px-10 sm:px-10 md:space-x-10 lg:space-x-10 justify-center">
      {#each speakers as speaker}
        <SpeakerCard name={speaker.name} imageUrl={speaker.imageUrl} designation={speaker.designation} platform1={speaker.platform1} platform2={speaker.platform2} platform3={speaker.platform3} />
      {/each}
    </div>
  </div>
</section>
