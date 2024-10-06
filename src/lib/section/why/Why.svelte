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

<section id="why" class="flex flex-col items-center space-y-6 px-4 sm:px-6 lg:px-8">
  <div class="pt-12 sm:pt-16 lg:pt-20">
    <div class="mx-auto max-w-7xl text-center">
      <h2 class="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl lg:text-5xl">
        Why attend?
      </h2>
      <p class="mt-4 text-gray-600 sm:text-xl">
        We have a fantastic lineup of speakers and sessions for you to learn
        and enhance your skills.
      </p>
    </div>
  </div>
  
  <h2 class="sr-only">Our perks</h2>
  <div class="mx-auto max-w-7xl py-12 sm:py-24 lg:px-4">
    <div class="grid gap-y-8 gap-x-6 px-4 lg:grid-cols-2 lg:gap-x-12 lg:gap-y-16">
      {#each perks as perk}
        <div class="flex items-start space-x-4">
          <img
            class="w-20 h-20 object-cover"
            src={perk.imageSrc}
            alt={perk.name}
          />
          <div>
            <h3 class="text-xl font-medium text-gray-900 sm:text-2xl lg:text-3xl">
              {perk.name}
            </h3>
            <p class="mt-2 text-sm text-gray-500 sm:text-base lg:text-lg">
              {perk.description}
            </p>            
          </div>
        </div>
      {/each}
    </div>
  </div>
</section>
<style>
  @media (max-width: 640px) {
    #why {
      max-width: 75%;
      margin: 0 auto;
    }
  }
</style>
