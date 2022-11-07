<script>
  import ItemSpeakerCard from '../speaker/ItemSpeakerCard.svelte';

  const speakers = [
    {
      name: 'Anam Saatvik',
      imageUrl:
        'https://raw.githubusercontent.com/iamimmanuelraj/devfest2022-web/main/static/profile_pics/Anam_Saatvik.jpeg',
      designation: 'A young theatrical writer turned ML Engineer',
      // bio: "A young theatrical writer turned ML Engineer through his love for human languages. His journey started from training a distilGPT2 model to write stories for his college's drama club, and now works on real-time pipelines that analyze user patterns for effective and efficient user engagement. He loves working on systems that can extract the hidden features and semantics of various languages, a system that can read between the lines"
    },
    {
      name: 'Ayush Shekhar',
      imageUrl:
        'https://raw.githubusercontent.com/iamimmanuelraj/devfest2022-web/main/static/profile_pics/Ayush_Shekhar.png',
      designation: 'A writer and Leader',
      // bio: "Ayush is an early adopter of Flutter, a mobile team lead, a community contributor, and a writer. He can go on and on about startups, products, and the amazing impact stories and good storytellers have on people."
    },
    {
      name: 'Juhi Singh',
      imageUrl:
        'https://raw.githubusercontent.com/iamimmanuelraj/devfest2022-web/main/static/profile_pics/Juhi_Singh.jpeg',
      designation: 'WTM Chennai Ambassador 22',
      // bio: "Juhi is an extrovert, go-getter, confident public speaker who enjoys working and collaborating with engineers, developers, and product teams. Engaging with the tech community excites her, something which she has been doing from her graduation days and currently leading WTM Chennai as Ambassador. This interest of hers fortunately helped her with first job as Developer Community Manager at Freshworks."
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
          their knowledge and experience with you. [More speakers to be updated soon.]
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
