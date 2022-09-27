<script lang="ts">
  const perks = [
    {
      name: 'Tech Talks',
      imageSrc:
        'https://tailwindui.com/img/ecommerce/icons/icon-delivery-light.svg',
      description:
        "We have a number of speakers lined up to talk about their experiences in the industry. We'll also have a few lightning talks from our members."
    },
    {
      name: 'Expert Speakers',
      imageSrc:
        'https://tailwindui.com/img/ecommerce/icons/icon-warranty-light.svg',
      description:
        'Experts from the industry will be on hand to answer your questions and give you advice on how to get into the industry.'
    },
    {
      name: 'Networking',
      imageSrc:
        'https://tailwindui.com/img/ecommerce/icons/icon-returns-light.svg',
      description:
        'You will have the opportunity to network with other students and professionals in the industry.'
    },
    {
      name: 'Workshops',
      imageSrc:
        'https://tailwindui.com/img/ecommerce/icons/icon-planet-light.svg',
      description:
        "We'll be running a number of workshops to help you get started in the industry. We'll also have a few lightning talks from our members."
    }
  ];
</script>

<section
  id="why"
  class="flex w-full flex-col items-center justify-start space-y-6"
>
  <div class="bg-white">
    <div class="pt-12 sm:pt-16 lg:pt-20">
      <div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div class="text-center">
          <h2
            class="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-gray-900"
          >
            Why attend?
          </h2>
          <p class="mt-4  sm:text-xl text-gray-600">
            We have a great lineup of speakers and sessions for you to learn and
            enhance your skills.
          </p>
        </div>
      </div>
    </div>
    <h2 class="sr-only">Our perks</h2>
    <div class="mx-auto max-w-7xl py-24 sm:px-2 sm:py-32 lg:px-4">
      <div
        class="mx-auto grid max-w-2xl grid-cols-1 gap-y-12 gap-x-8 px-4 lg:max-w-none lg:grid-cols-2 lg:gap-y-16"
      >
        {#each perks as perk}
          <div class="sm:flex">
            <div class="sm:flex-shrink-0">
              <div class="w-full flex items-center justify-center">
                <img class="h-24 w-28" src={perk.imageSrc} alt="" />
              </div>
            </div>
            <div class="mt-3 sm:mt-0 sm:ml-3">
              <h3
                class="text-sm font-medium text-gray-900 text-center sm:text-start"
              >
                {perk.name}
              </h3>
              <p class="mt-2 text-sm text-gray-500 text-center sm:text-start">
                {perk.description}
              </p>
            </div>
          </div>
        {/each}
      </div>
    </div>
  </div>
</section>
