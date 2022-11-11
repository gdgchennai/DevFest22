<script lang="ts">
  import ItemAgendaCard from "./ItemAgendaCard.svelte";

  let toggle: boolean = true;

  const dayOneAgenda = [
    {
      name: 'Registration',
      session: 'First come first serve basis',
      time: '8:00 AM - 8:55 AM'
    },
    {
      name: 'Opening note',
      session: 'Vanakkam to DevFest Chennai 2022!!',
      time: '9:05 AM - 9:15 AM'
    },
    {
      name: 'Manikandan Krishnamurthy',
      session: 'Multi-team platform on GKE',
      imageUrl: '/profile_pics/Manikandan_Krishnamurthy.png',
      showImage: true,
      time: '9:20 AM - 09:55 AM'
    },
    {
      name: 'Anush Arvind, Arumugaraja Thirumani, Ritikesh G',
      session: 'Scaling from 10k RPM to 150k RPM',
      imageUrl: '/profile_pics/Anush_Aravind.png',
      imageUrl2: '/profile_pics/Arumgaraja_Thirumani.png',
      imageUrl3: '/profile_pics/Ritikesh_G.png',
      showImage: true,
      showMultipleImage: true,
      time: '10:00 AM - 10:35 AM'
    },
    {
      name: 'Praveen Thirumurugan',
      session: "Microservice orchestration with GCP's serverless offerings",
      imageUrl: '/profile_pics/Praveen_Thirumurugan.png',
      showImage: true,
      time: '10:40 AM - 11:15 AM'
    },
    {
      name: 'Arun Ganesh',
      session: 'Streaming XR using edge cloud',
      imageUrl: '/profile_pics/Arun_Ganesh.png',
      showImage: true,
      time: '11:20 AM - 11:55 AM'
    },
    {
      name: 'Joinal Ahmed',
      session: 'Take Data to the next level with Graph Machine Learning',
      imageUrl: '/profile_pics/Joinal_Ahmed.png',
      showImage: true,
      time: '12:00 PM - 12:35 PM'
    },
    {
      name: 'Vasudev Maduri',
      session: 'Ensuring Reliability of Large Scale ML Systems',
      imageUrl: '/profile_pics/Vasudev_Maduri.png',
      showImage: true,
      time: '12:40 PM - 1:15 PM'
    },
    {
      name: 'Lunch',
      session: 'Good time to go around, Eat and connect with people!',
      time: '1:15 PM - 2:15 PM'
    },
    {
      name: 'Abhishek Mishra',
      session: 'An artless introduction to distributed SQL database',
      imageUrl: '/profile_pics/Abishek_Mishra.png',
      showImage: true,
      time: '2:15 PM - 2:40 PM'
    },
    {
      name: 'Anam Saatvik Reddy',
      session:
        'Lightning talk - TensorFlow Recommenders - a simple library for building powerful recommendation systems',
      imageUrl: '/profile_pics/Anam_Saatvik_Reddy.png',
      showImage: true,
      time: '2:45 PM - 2:55 PM'
    },
    {
      name: 'Karthikeyan S',
      session: 'Lightning talk - Video calls Demystified; A peak into WebRTC',
      imageUrl: '/profile_pics/Karthikeyan_S.png',
      showImage: true,
      time: '2:55 PM - 3:05 PM'
    },
    {
      name: 'Ramachandran A',
      session: 'Lightning talk - Scaling Web3 development with GCP',
      imageUrl: '/profile_pics/Ramachandran_A.png',
      showImage: true,
      time: '3:05 PM - 3:20 PM'
    },
    {
      name: 'Networking and Tea break',
      session: 'Connect - Interact and expand your clan!',
      time: '3:25 PM - 4:00 PM'
    },
    {
      name: 'Fun activities/Quiz',
      session: "Enough lectures, It's play time!",
      time: '4:05 PM - 4:40 PM'
    },
    {
      name: 'Closing Note',
      session: 'Thank you for sticking with us this far!',
      time: '4:40 PM - 4:50 PM'
    }
  ];

  const dayOneAgendaTrack = [
    {
      name: 'Registration',
      session: 'First come first serve basis',
      time: '8:00 AM - 8:55 AM'
    },
    {
      name: 'Opening note',
      session: 'Vanakkam to DevFest Chennai 2022!!',
      time: '9:05 AM - 9:15 AM'
    },
    {
      name: 'Juhi Singh, Vasundhara Shukla',
      session: 'Joy of contributing to community and open source - Juhi Singh, Vasundhara Shukla',
      imageUrl: '/profile_pics/Juhi_Singh.png',
      imageUrl2: '/profile_pics/Vasundhara_Shukla.png',
      imageUrl3: '/profile_pics/Ritikesh_G.png',
      showImage: true,
      showMultipleImage: true,
      time: '9:20 AM - 09:55 AM'
    },
    {
      name: 'Karthikeyan VK',
      session: "Build Faster Websites with Astro",
      imageUrl: '/profile_pics/Karthikeyan_VK.png',
      showImage: true,
      time: '10:00 AM - 10:35 AM'
    },
    {
      name: 'Rajasegar Chandiran',
      session: 'Svelte and the Paradox of choice',
      imageUrl: '/profile_pics/Rajasegar_Chandriran.png',
      showImage: true,
      time: '10:40 AM - 11:15 AM'
    },
    {
      name: 'Somasundaram Mahesh',
      session: 'Reimagining devs <> designer\'s handoff for Jetpack Compose : Relay',
      imageUrl: '/profile_pics/Somusundaram_Mahesh.png',
      showImage: true,
      time: '11:20 AM - 11:55 AM'
    },
    {
      name: 'Bhavna Thacker',
      session: 'Architecting your Compose UI',
      imageUrl: '/profile_pics/Bhavna_Thacker.png',
      showImage: true,
      time: '12:00 PM - 12:35 PM'
    },
    {
      name: 'Ayush Shekhar',
      session: 'Server driven UI in Flutter: A Remote Widgets Experiment',
      imageUrl: '/profile_pics/Ayush_Shekar.png',
      showImage: true,
      time: '12:40 PM - 1:15 PM	'
    },
    {
      name: 'Lunch',
      session: 'Good time to go around, Eat and connect with people!',
      time: '1:15 PM - 2:15 PM'
    },
    {
      name: 'Kamal Shree',
      session: 'My Adventure in Flutter Gaming',
      imageUrl: '/profile_pics/Kamal_Shree.png',
      showImage: true,
      time: '2:15 PM - 2:40 PM'
    },
    {
      name: 'Shruthi PG',
      session: 'Lightning talk - Becoming Family\'s First Woman in STEM',
      imageUrl: '/profile_pics/Shruthi_PG.png',
      showImage: true,
      time: '2:45 PM - 2:55 PM'
    },
    {
      name: 'Ishan Sharma',
      session: 'Lightning talk - Web Animations : Past, Present & Future',
      imageUrl: '/profile_pics/Ishan_Sharma.png',
      showImage: true,
      time: '2:55 PM - 3:05 PM'
    },
    {
      name: 'GDG Chennai',
      session: 'Lightning talk - About sister communities',
      imageUrl: '/profile_pics/GDG_Chennai.png',
      showImage: true,
      time: '2:55 PM - 3:05 PM'
    },
    {
      name: 'Networking and Tea break',
      session: 'Connect - Interact and expand your clan!',
      time: '3:25 PM - 4:00 PM'
    },
    {
      name: 'Fun activities/Quiz',
      session: "Enough lectures, It's play time!",
      time: '4:05 PM - 4:40 PM'
    },
    {
      name: 'Closing Note',
      session: 'Thank you for sticking with us this far!',
      time: '4:40 PM - 4:50 PM'
    }
  ];

  const dayTwoAgenda = [
    {
      name: 'Morning registration',
      time: '8:30 AM - 9:45 AM'
    },
    {
      name: 'Sanjay S',
      session: 'A different way to think about animations with Jetpack Compose',
      imageUrl: '/profile_pics/sanjay.png',
      showImage: true,
      time: '10:00 AM - 12:30 AM'
    },
    {
      name: 'Afternoon Registration',
      time: '12:00 PM - 1:15 PM'
    },
    {
      name: 'Lunch',
      session: 'Good time to go around, Eat and connect with people!',
    },
    {
      name: 'Jayesh Sharma',
      session: 'Build your first MLOps Pipeline using ZenML on GCP',
      imageUrl: '/profile_pics/Jayesh_Sharma.png',
      showImage: true,
      time: '2:15 PM - 5:15 PM'
    },
  ];

  const dayTwoAgendaTrack2 = [
    {
      name: 'Morning registration',
      time: '8:30 AM - 9:45 AM'
    },
    {
      name: 'Vivek Yadav',
      session: 'How to build the best packages and plugins in Flutter',
      imageUrl: '/profile_pics/Vivek_Yadav.png',
      showImage: true,
      time: '10:00 AM - 12:30 AM'
    },
    {
      name: 'Afternoon Registration',
      time: '12:00 PM - 1:15 PM'
    },
    {
      name: 'Lunch',
      session: 'Good time to go around, Eat and connect with people!',
    },
    {
      name: 'Manikandan Krishnamurthy',
      session: 'Cloud Hero - RGDC - Intro to Infrastructure',
      imageUrl: '/profile_pics/Manikandan_Krishnamurthy.png',
      showImage: true,
      time: '2:15 PM - 5:15 PM'
    },
  ];
</script>

<svelte:head>
  <title>GDG Chennai - Agenda</title>
  <meta name="Event agenda" content="GDG Chennai - Event agenda" />
</svelte:head>

<div class="flex flex-col justify-start space-y-10 overflow-hidden p-8">
  <h2
    class="w-full py-8 text-center text-3xl font-bold tracking-tight sm:text-4xl lg:text-center lg:text-5xl"
  >
    Speakers & Agenda
  </h2>
  <div class="event_area">
    <div class="container mx-auto">
      <div class="double_line">
        <div class="row">
          <div class="date mb-2">
            <h3>12 Nov 2022 - Conference - Le Royal Méridien</h3>
            <span class="isolate inline-flex rounded-md sm:p-8">
              <button
                on:click={() => toggle = !toggle}
                type="button"
                class="relative inline-flex items-center rounded-md border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-50 focus:z-10 focus:border-black focus:outline-none focus:ring-1 focus:ring-black"
              >
                Switch track
              </button>
            </span>
          </div>
          {#if toggle}
          <h2 class="text-xl text-blue-500 py-5 font-medium">Track 1</h2>
          {#each dayOneAgenda as speaker}
            <ItemAgendaCard
              session={speaker.session}
              name={speaker.name}
              imageUrl={speaker.imageUrl}
              imageUrl2={speaker.imageUrl2}
              imageUrl3={speaker.imageUrl3}
              time={speaker.time}
              showImage={speaker.showImage}
              showMultipleImage={speaker.showMultipleImage}
            />
          {/each}
          {:else}
          <h2 class="text-xl text-green-500 py-5 font-medium">Track 2</h2>
          {#each dayOneAgendaTrack as speaker}
            <ItemAgendaCard
              session={speaker.session}
              name={speaker.name}
              imageUrl={speaker.imageUrl}
              imageUrl2={speaker.imageUrl2}
              imageUrl3={speaker.imageUrl3}
              time={speaker.time}
              showImage={speaker.showImage}
              showMultipleImage={speaker.showMultipleImage}
            />
          {/each}
          {/if}
        </div>
      </div>
      <div class="row">
          <div class="date mb-2">
            <h3>13 Nov 2022 - Workshop - InfoSys Chennai</h3>
          </div>
          {#if toggle}
          <h2 class="text-xl text-blue-500 py-5 font-medium">Track 1</h2>
          {#each dayTwoAgenda as speaker}
          <ItemAgendaCard
            session={speaker.session}
            name={speaker.name}
            imageUrl={speaker.imageUrl}
            time={speaker.time}
            showImage={speaker.showImage}
          />
        {/each}
        {:else}
        <h2 class="text-xl text-green-500 py-5 font-medium">Track 2</h2>
        {#each dayTwoAgendaTrack2 as speaker}
          <ItemAgendaCard
            session={speaker.session}
            name={speaker.name}
            imageUrl={speaker.imageUrl}
            time={speaker.time}
            showImage={speaker.showImage}
          />
        {/each}
        {/if}
      </div>
    </div>
  </div>
</div>

<style>
  .event_area {
    position: relative;
    padding-bottom: 120px;
  }

  @media (max-width: 767px) {
    .event_area {
      padding-bottom: 60px;
    }
  }

  .event_area .double_line::before,
  .event_area .double_line::after {
    background: #ff9600;
    background: -moz-linear-gradient(
      left,
      #ff9600 0%,
      #fe531e 26%,
      #c022a5 57%,
      #1bb8f9 100%
    );
    background: -webkit-linear-gradient(
      left,
      #ff9600 0%,
      #fe531e 26%,
      #c022a5 57%,
      #1bb8f9 100%
    );
    background: linear-gradient(
      to right,
      #ff9600 0%,
      #fe531e 26%,
      #c022a5 57%,
      #1bb8f9 100%
    );
  }

  .event_area .double_line {
    position: relative;
    z-index: 9;
    padding-top: 100px;
    padding-bottom: 20px;
    margin-bottom: 100px;
  }

  @media (max-width: 767px) {
    .event_area .double_line {
      padding-top: 40px;
      margin-bottom: 20px;
    }
  }

  .event_area .double_line::before {
    position: absolute;
    content: '';
    width: 100%;
    height: 10px;
    top: 0;
    left: 0;
  }

  .event_area .double_line::after {
    position: absolute;
    content: '';
    width: 100%;
    height: 10px;
    bottom: 0;
    left: 0;
  }

  .event_area .date h3 {
    font-size: 26px;
    font-weight: 500;
    color: #ff0000;
  }

  .event_area .date h2 {
    font-size: 20px;
    font-weight: 500;
    color: #0022ff;
  }

  @media (max-width: 767px) {
    .event_area .date h3 {
      margin-bottom: 20px;
    }
  }

  @media (min-width: 768px) and (max-width: 991px) {
    .event_area .date h3 {
      margin-bottom: 30px;
    }
  }
</style>
