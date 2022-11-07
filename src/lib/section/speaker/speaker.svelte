<script>
  import ItemSpeakerCard from '../speaker/ItemSpeakerCard.svelte';
  import Carousel from '../speaker/carousel.svelte';
	
	let colors = ['red', 'orange', 'yellow', 'green', 'blue', 'purple']

  const speakers = [
    {
      name: 'Anam Saatvik',
      imageUrl:
        'https://raw.githubusercontent.com/gdgchennai/devfest2022-web/main/static/profile_pics/Anam_Saatvik.jpeg',
      designation: 'A young theatrical writer turned ML Engineer'
    },
    {
      name: 'Ayush Shekhar',
      imageUrl:
        'https://raw.githubusercontent.com/gdgchennai/devfest2022-web/main/static/profile_pics/Ayush_Shekhar.png',
      designation: 'A writer and Leader'
    },
    {
      name: 'Juhi Singh',
      imageUrl:
        'https://raw.githubusercontent.com/gdgchennai/devfest2022-web/main/static/profile_pics/Juhi_Singh.jpeg',
      designation: 'WTM Chennai Ambassador 22'
    },
    {
      name: 'Karthikeyan',
      imageUrl:
        'https://raw.githubusercontent.com/gdgchennai/devfest2022-web/main/static/profile_pics/Karthikeyan.jpg',
      designation: 'A passionate developer'
    },
    {
      name: 'Rajasegar',
      imageUrl:
        'https://raw.githubusercontent.com/gdgchennai/devfest2022-web/main/static/profile_pics/Rajasegar.jpg',
      designation: 'A Frontend-architect in Freshworks'
    },
    {
      name: 'Shruthi P G',
      imageUrl:
        'https://raw.githubusercontent.com/gdgchennai/devfest2022-web/main/static/profile_pics/Shruthi_PG.jpeg',
      designation: 'UX Researcher'
    },
    {
      name: 'Vasudev',
      imageUrl:
        'https://raw.githubusercontent.com/gdgchennai/devfest2022-web/main/static/profile_pics/Vasudev.png',
      designation: 'Machine Learning Engineer'
    },
    {
      name: 'Vasundhara Shukla',
      imageUrl:
        'https://raw.githubusercontent.com/gdgchennai/devfest2022-web/main/static/profile_pics/Vasundhara_Shukla.jpeg',
      designation: 'Staff at VMware'
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
    <Carousel autoplay="2000">
      {#each speakers as speaker}
        <ItemSpeakerCard
          name={speaker.name}
          imageUrl={speaker.imageUrl}
          designation={speaker.designation}
        />
      {/each}
      <span slot="left-control">Left</span>
      <span slot="right-control">Right</span>
    </Carousel>
    </div>
  </div>
</section>

<style>
	div {
		height: 100%;
		width: 100%;
	}

	span {
		display: inline-block;
	}
</style>