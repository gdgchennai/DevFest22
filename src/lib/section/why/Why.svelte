<script lang="ts">
  const perks = [
    {
      name: 'Tech Talks',
      imageSrc: '/icons/ted 1.svg',
      description:
        'Several speakers are coming together to talk about their experiences in the industry. We will also have a few lightning talks with our members.'
    },
    {
      name: 'Expert Speakers',
      imageSrc: '/icons/talks 1.svg',
      description:
        'Experts from the industry will be on hand to answer your questions and give you advice on how to get into the industry.'
    },
    {
      name: 'Networking',
      imageSrc: '/icons/Networking 2.svg',
      description:
        'You will have the opportunity to network with other students and professionals in the industry.'
    },
    {
      name: 'Workshops',
      imageSrc: '/icons/book 1.svg',
      description:
        'We will be hosting a series of workshops to assist you in getting started with your tech career. Our members will also give a few lightning talks.'
    }
  ];
</script>

<section id="why" class="flex w-full flex-col items-center px-6 lg:px-12 xl:px-24">
  <div class="pt-12 sm:pt-16 lg:pt-20">
    <div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
      <div class="text-center">
        <h2 class="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl lg:text-5xl">
          Why attend?
        </h2>
        <p class="mt-4 text-gray-600 sm:text-lg lg:text-xl">
          We have a fantastic lineup of speakers and sessions for you to learn
          and enhance your skills.
        </p>
      </div>
    </div>
  </div>
  
  <!-- Our perks section -->
  <div class="mx-auto max-w-7xl py-12 sm:py-16 lg:py-24">
    <div
      class="grid grid-cols-1 gap-8 sm:gap-12 lg:grid-cols-2 lg:gap-x-16 lg:gap-y-20"
    >
      {#each perks as perk}
        <div class="relative flex items-start sm:items-center w-full max-w-md mx-auto sm:max-w-none sm:space-x-6 lg:max-w-lg lg:space-x-8">
          <!-- Icon Image -->
          <img
            class="w-20 h-20 sm:w-24 sm:h-24 lg:w-28 lg:h-28 flex-shrink-0"
            src={perk.imageSrc}
            alt={perk.name}
          />
          <!-- Perk Title and Description -->
          <div class="ml-4 sm:ml-6 lg:ml-8">
            <!-- Title (Adjusting font sizes based on the screen size) -->
            <h3 class="text-lg font-semibold text-gray-900 sm:text-xl lg:text-2xl xl:text-3xl">
              {perk.name}
            </h3>
            <!-- Description -->
            <p class="mt-2 text-sm text-gray-500 sm:text-base lg:text-lg xl:text-base">
              {perk.description}
            </p>
          </div>
        </div>
      {/each}
    </div>
  </div>
</section>
