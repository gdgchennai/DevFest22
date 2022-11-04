<script>
  import ItemSpeakerCard from '../speaker/ItemSpeakerCard.svelte';

  const speakers = [
    {
      name: 'Somasundaram S',
      imageUrl:
        'https://ouch-cdn2.icons8.com/MUj_9Ip1d28lyJ0lDJpMB6MnAQEJCXC13lmwnSHFzZo/rs:fit:256:318/czM6Ly9pY29uczgu/b3VjaC1wcm9kLmFz/c2V0cy9wbmcvOTQw/L2E1YzNhNTVlLTIz/YjktNDJiNS04MjQ1/LWY5MzY1ZjUxNjc0/Ni5wbmc.png',
      designation: 'Android Engineer at Hostar'
    },
    {
      name: 'Abishek Mishra',
      imageUrl:
        'https://static-cdn.icons8.com/l/3d/images/1_with_coffee_man_1.webp',
      designation: 'Developer Relations at Yugabyte'
    },
    {
      name: 'Vasundhara R',
      imageUrl:
        'https://static-cdn.icons8.com/l/3d/images/11_peace_girl_1.webp',
      designation: 'Lead Engineer at Yugabyte'
    }
  ];
</script>

<section
  id="speaker"
  class="max-auto flex w-full flex-col items-center space-y-6 px-8"
>
  <div class="flex flex-col">
    <div class="flex justify-center pt-12 sm:pt-16 lg:pt-20">
      <div
        class="flex max-w-xs flex-col items-center justify-center text-center sm:max-w-7xl"
      >
        <h2
          class="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl lg:text-5xl"
        >
          Our Speakers
        </h2>
        <p class="text-md mt-4 flex w-full max-w-3xl text-center text-gray-600">
          We have some of the best speakers in the industry who will be sharing
          their knowledge and experience with you. [Original List to be updated soon.]
        </p>
      </div>
    </div>

    <div
      class="mx-auto w-full max-w-7xl justify-center space-y-12 py-10 px-10 sm:space-y-0 sm:px-10 md:flex md:space-x-10 lg:space-x-10"
    >
      {#each speakers as speaker}
        <ItemSpeakerCard
          name={speaker.name}
          imageUrl={speaker.imageUrl}
          designation={speaker.designation}
        />
      {/each}
    </div>
  </div>
</section>
