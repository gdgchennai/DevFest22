<script>
  import ItemSpeakerCard from '../speaker/ItemSpeakerCard.svelte';
  import Carousel from '../speaker/carousel.svelte';
	
	let colors = ['red', 'orange', 'yellow', 'green', 'blue', 'purple']

  const speakers = [
    {
      name: 'Anam Saatvik Reddy',
      imageUrl:
        'https://raw.githubusercontent.com/gdgchennai/devfest2022-web/immanuel/static/profile_pics/Anam_Saatvik_Reddy.png',
      designation: 'ML Engineer, Hexon Global'
    },
    {
      name: 'Anush Aravind',
      imageUrl:
        'https://raw.githubusercontent.com/gdgchennai/devfest2022-web/immanuel/static/profile_pics/Anush_Aravind.png',
      designation: 'Architect SRE, Freshworks Inc.'
    },
    {
      name: 'Arumgaraja Thirumani',
      imageUrl:
        'https://raw.githubusercontent.com/gdgchennai/devfest2022-web/immanuel/static/profile_pics/Arumgaraja_Thirumani.png',
      designation: 'Lead SRE, Freshworks Inc.'
    },
    {
      name: 'Arun Ganesh',
      imageUrl:
        'https://raw.githubusercontent.com/gdgchennai/devfest2022-web/immanuel/static/profile_pics/Arun_Ganesh.png',
      designation: 'Senior XR lead, Stellantis'
    },
    {
      name: 'Bhavani Ravi',
      imageUrl:
        'https://raw.githubusercontent.com/gdgchennai/devfest2022-web/immanuel/static/profile_pics/Bhavani_Ravi.png',
      designation: 'Independent Software Consultant'
    },
    {
      name: 'Ishan Sharma',
      imageUrl:
        'https://raw.githubusercontent.com/gdgchennai/devfest2022-web/immanuel/static/profile_pics/Ishan_Sharma.png',
      designation: 'Software Engineer @HackerRank'
    },
    {
      name: 'Jayesh Sharma',
      imageUrl:
        'https://raw.githubusercontent.com/gdgchennai/devfest2022-web/immanuel/static/profile_pics/Jayesh_Sharma.png',
      designation: 'Platform Engineer, ZenML'
    },
    {
      name: 'Joinal Ahmed',
      imageUrl:
        'https://raw.githubusercontent.com/gdgchennai/devfest2022-web/immanuel/static/profile_pics/Joinal_Ahmed.png',
      designation: 'AI Consultant, Google Cloud'
    },
    {
      name: 'Juhi Singh',
      imageUrl:
        'https://raw.githubusercontent.com/gdgchennai/devfest2022-web/immanuel/static/profile_pics/Juhi_Singh.png',
      designation: 'Developer Community Manager, Freshworks Inc.'
    },
    {
      name: 'Kamal Shree',
      imageUrl:
        'https://raw.githubusercontent.com/gdgchennai/devfest2022-web/immanuel/static/profile_pics/Kamal_Shree.png',
      designation: 'GDE Flutter,Developer Advocate, Microsoft'
    },
    {
      name: 'Karthikeyan S',
      imageUrl:
        'https://raw.githubusercontent.com/gdgchennai/devfest2022-web/immanuel/static/profile_pics/Karthikeyan_S.png',
      designation: 'Developer Advocate @100ms'
    },
    {
      name: 'Praveen Thirumurugan',
      imageUrl:
        'https://raw.githubusercontent.com/gdgchennai/devfest2022-web/immanuel/static/profile_pics/Praveen_Thirumurugan.png',
      designation: 'Senior Software Engineer, Plum'
    },
    {
      name: 'Rajasegar Chandriran',
      imageUrl:
        'https://raw.githubusercontent.com/gdgchennai/devfest2022-web/immanuel/static/profile_pics/Rajasegar_Chandriran.png',
      designation: 'Front-end Developer, Freshworks Inc.'
    },
    {
      name: 'Ritikesh G',
      imageUrl:
        'https://raw.githubusercontent.com/gdgchennai/devfest2022-web/immanuel/static/profile_pics/Ritikesh_G.png',
      designation: 'Architect, Freshworks Inc.'
    },
    {
      name: 'Shruthi PG',
      imageUrl:
        'https://raw.githubusercontent.com/gdgchennai/devfest2022-web/immanuel/static/profile_pics/Shruthi_PG.png',
      designation: 'UI/UX Designer, Lets Dunch'
    },
    {
      name: 'Somusundaram Mahesh',
      imageUrl:
        'https://raw.githubusercontent.com/gdgchennai/devfest2022-web/immanuel/static/profile_pics/Somusundaram_Mahesh.png',
      designation: 'Software Developer Engineer, Disney+Hotstar'
    },
    {
      name: 'Vasudev Maduri',
      imageUrl:
        'https://raw.githubusercontent.com/gdgchennai/devfest2022-web/immanuel/static/profile_pics/Vasudev_Maduri.png',
      designation: 'Lead Machine Learning Engineer, Accenture AI'
    },
    {
      name: 'Vasundhara Shukla',
      imageUrl:
        'https://raw.githubusercontent.com/gdgchennai/devfest2022-web/immanuel/static/profile_pics/Vasundhara_Shukla.png',
      designation: 'Member of Technical Staff, VMWare'
    },
    {
      name: 'Vivek Yadav',
      imageUrl:
        'https://raw.githubusercontent.com/gdgchennai/devfest2022-web/immanuel/static/profile_pics/Vivek_Yadav.png',
      designation: 'Google Developer Expert, Flutter & Dart'
    },
    {
      name: 'Bhavna_Thacker',
      imageUrl:
        'https://raw.githubusercontent.com/gdgchennai/devfest2022-web/immanuel/static/profile_pics/Bhavna_Thacker.png',
      designation: 'GDE Android,Senior Software Engineer, MEGA'
    },
    {
      name: 'Karthikeyan VK',
      imageUrl:
        'https://raw.githubusercontent.com/gdgchennai/devfest2022-web/immanuel/static/profile_pics/Karthikeyan_VK.png',
      designation: 'Cloud Native Architect, Microsoft Azure MVP'
    },
    {
      name: 'Manikandan Krishnamurthy',
      imageUrl:
        'https://raw.githubusercontent.com/gdgchennai/devfest2022-web/immanuel/static/profile_pics/Manikandan_Krishnamurthy.png',
      designation: 'Organiser, GDGC Chennai'
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
      <!-- <span slot="left-control">Left</span>
      <span slot="right-control">Right</span> -->
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