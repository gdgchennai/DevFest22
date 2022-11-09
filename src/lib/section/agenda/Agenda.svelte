<script>
  import ItemSpeakerCard from '../speaker/ItemSpeakerCard.svelte';
  import ItemAgendaCard from './ItemAgendaCard.svelte';

  const dayOneT1Agenda = [
    {
      session: 'Registration',
      speaker: '',
      startTime: '8:00 AM',
      endTime: '8:55 AM'
    },
    {
      session: 'Opening note',
      speaker: '',
      startTime: '9:05 AM',
      endTime: '9:10 AM'
    },

    {
      session: 'Deep-Dive into Kubernetes Networking Model',
      speaker: 'Bhavani Ravi',
      startTime: '9:20 AM',
      endTime: '9:55 AM'
    },
    {
      session: 'Scaling from 10k RPM to 150k RPM',
      speaker: 'Anush Arvind, Arumugaraja Thirumani, Ritikesh G',
      startTime: '10:00 AM',
      endTime: '10:35 AM'
    },
    {
      session: 'Microservice orchestration with GCP\'s serverless offerings',
      speaker: 'Praveen Thirumurugan',
      startTime: '10:40 AM',
      endTime: '11:15 AM'
    },
    {
      session: 'Streaming XR using edge cloud',
      speaker: 'Arun Ganesh',
      startTime: '10:20 AM',
      endTime: '11:55 AM'
    },
    {
      session: 'Take Data to the next level with Graph Machine Learning',
      speaker: 'Joinal Ahmed',
      startTime: '12:00 PM',
      endTime: '12:35 PM'
    },
    {
      session: 'Ensuring Reliability of Large Scale ML Systems',
      speaker: 'Vasudev Maduri',
      startTime: '12:40 PM',
      endTime: '1:15 PM'
    },
    {
      session: 'Lunch',
      speaker: '',
      startTime: '1:15 PM',
      endTime: '2:15 PM'
    },
    {
      session: 'Sponsor Talk',
      speaker: '',
      startTime: '2:15 PM',
      endTime: '2:40 PM'
    },
    {
      session: 'TensorFlow Recommenders - a simple library for building powerful recommendation systems',
      speaker: 'Anam Saatvik Reddy',
      startTime: '2:45 PM',
      endTime: '2:55 PM'
    },
    {
      session: 'Video calls Demystified; A peak into WebRTC',
      speaker: 'Karthikeyan S',
      startTime: '2:55 PM',
      endTime: '3:05 PM'
    },
    {
      session: 'Sponsor Talk',
      speaker: '',
      startTime: '3:05 PM',
      endTime: '4:20 PM'
    },
    {
      session: 'Networking and Tea break',
      speaker: 'Karthikeyan S',
      startTime: '3:05 PM',
      endTime: '4:20 PM'
    },
    {
      session: 'Fun activities/Quiz',
      speaker: '',
      startTime: '4:05 PM',
      endTime: '4:40 PM'
    },
    {
      session: 'Closing Note',
      speaker: '',
      startTime: '4:40 PM',
      endTime: '4:50 PM'
    }
  ];

  const dayOneT2Agenda = [
    {
      session: 'Registration',
      speaker: '',
      startTime: '8:00 AM',
      endTime: '8:55 AM'
    },
    {
      session: 'Opening note',
      speaker: '',
      startTime: '9:05 AM',
      endTime: '9:10 AM'
    },

    {
      session: 'Joy of contributing to community and open source',
      speaker: 'Juhi Singh, Vasundhara Shukla',
      startTime: '9:20 AM',
      endTime: '9:55 AM'
    },
    {
      session: 'Build Faster Websites with Astro',
      speaker: 'Karthikeyan VK',
      startTime: '10:00 AM',
      endTime: '10:35 AM'
    },
    {
      session: 'Svelte and the Paradox of choice',
      speaker: 'Rajasegar Chandiran',
      startTime: '10:40 AM',
      endTime: '11:15 AM'
    },
    {
      session: 'Reimagining devs <> designer\'s handoff for Jetpack Compose : Relay',
      speaker: 'Somasundaram Mahesh',
      startTime: '10:20 AM',
      endTime: '11:55 AM'
    },
    {
      session: 'Architecting your Compose UI',
      speaker: 'Bhavna Thacker',
      startTime: '12:00 PM',
      endTime: '12:35 PM'
    },
    {
      session: 'Server driven UI in Flutter: A Remote Widgets Experiment',
      speaker: 'Ayush Shekhar',
      startTime: '12:40 PM',
      endTime: '1:15 PM'
    },
    {
      session: 'Lunch',
      speaker: '',
      startTime: '1:15 PM',
      endTime: '2:15 PM'
    },
    {
      session: 'My Adventure in Flutter Gaming',
      speaker: 'Kamal Shree',
      startTime: '2:15 PM',
      endTime: '2:40 PM'
    },
    {
      session: 'Lightning talk - Becoming Family\'s First Woman in STEM',
      speaker: 'Shruthi PG',
      startTime: '2:45 PM',
      endTime: '2:55 PM'
    },
    {
      session: 'Lightning talk - Web Animations : Past, Present & Future',
      speaker: 'Ishan Sharma',
      startTime: '2:55 PM',
      endTime: '3:05 PM'
    },
    {
      session: 'Sponsor Talk',
      speaker: '',
      startTime: '3:05 PM',
      endTime: '4:20 PM'
    },
    {
      session: 'Networking and Tea break',
      speaker: 'Karthikeyan S',
      startTime: '3:05 PM',
      endTime: '4:20 PM'
    },
    {
      session: 'Fun activities/Quiz',
      speaker: '',
      startTime: '4:05 PM',
      endTime: '4:40 PM'
    },
    {
      session: 'Closing Note',
      speaker: '',
      startTime: '4:40 PM',
      endTime: '4:50 PM'
    }
  ];

  const dayTwoT1Agenda = [
    {
      session: 'Registration - Morning',
      speaker: '',
      startTime: '8:30 AM',
      endTime: '9:45 AM'
    },

    {
      session: 'Android Jetpack Compose Camp',
      speaker: 'Somasundaram Mahesh',
      startTime: '10:00 AM',
      endTime: '12:30 PM'
    },
    {
      session: 'Registration - Afternoon',
      speaker: '',
      startTime: '12:00 PM',
      endTime: '1:15 PM'
    },
    {
      session: 'Lunch',
      speaker: '',
      startTime: '1:15 PM',
      endTime: '2:15 PM'
    },
    {
      session: 'Build your first MLOps Pipeline using ZenML on GCP',
      speaker: 'Jayesh Sharma',
      startTime: '2:15 PM',
      endTime: '5:15 PM'
    }
  ];

  const dayTwoT2Agenda = [
    {
      session: 'Registration - Morning',
      speaker: '',
      startTime: '8:30 AM',
      endTime: '9:45 AM'
    },

    {
      session: 'How to build the best packages and plugins in Flutter',
      speaker: 'Vivek Yadav',
      startTime: '10:00 AM',
      endTime: '12:30 PM'
    },
    {
      session: 'Registration - Afternoon',
      speaker: '',
      startTime: '12:00 PM',
      endTime: '1:15 PM'
    },
    {
      session: 'Lunch',
      speaker: '',
      startTime: '1:15 PM',
      endTime: '2:15 PM'
    },
    {
      session: 'Cloud Hero - RGDC - Intro to Infrastructure',
      speaker: 'Manikandan Krishnamurthy',
      startTime: '2:15 PM',
      endTime: '5:15 PM'
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
          <!--Our dayOneAgenda-->
          You won't get a better conference than this!
        </h2>
        <p class="text-md mt-4 flex w-full max-w-3xl text-center text-gray-600">
          Come. Learn, Network and Celebrate with Google Developer Groups and
          Google Developer Experts, learn to hack on Android, Chrome and Web
          while you are at it.
        </p>
      </div>
    </div>

    <div
      class="mx-auto w-full max-w-7xl justify-center space-y-12 py-12 px-10 sm:space-y-0 sm:px-10 md:flex md:space-x-10 lg:space-x-10"
    >
      <ol
        class="space-y-8 rounded-xl border border-gray-100 bg-white/60 py-14 px-10 text-center shadow-xl shadow-gray-900/10 backdrop-blur"
      >
        <div id="agenda-title" class="flex flex-col space-y-3">
          <span class="text-blue-500">Day 1</span>
          <span class="text-2xl font-bold tracking-tight text-gray-900"
            >Nov 12th - Track 1</span
          >
        </div>

        {#each dayOneT1Agenda as speaker}
          <li class="flex flex-col items-center space-y-4">
            <ItemAgendaCard
              session={speaker.session}
              speaker={speaker.speaker}
              startTime={speaker.startTime}
              endTime={speaker.endTime}
            />
          </li>
        {/each}
        
      </ol>

      <ol
        class="space-y-8 rounded-xl border border-gray-100 bg-white/60 py-14 px-10 text-center shadow-xl shadow-gray-900/10 backdrop-blur"
      >
        <div id="agenda-title" class="flex flex-col space-y-3">
          <span class="text-blue-500">Day 1</span>
          <span class="text-2xl font-bold tracking-tight text-gray-900"
            >Nov 12th - Track 2</span
          >
        </div>

        {#each dayOneT2Agenda as speaker}
          <li class="flex flex-col items-center space-y-4">
            <ItemAgendaCard
              session={speaker.session}
              speaker={speaker.speaker}
              startTime={speaker.startTime}
              endTime={speaker.endTime}
            />
          </li>
        {/each}
      </ol>

      <ol
        class="space-y-8 rounded-xl border border-gray-100 bg-white/60 py-14 px-10 text-center shadow-xl shadow-gray-900/10 backdrop-blur"
      >
        <div id="agenda-title" class="flex flex-col space-y-3">
          <span class="text-blue-500">Day 2</span>
          <span class="text-2xl font-bold tracking-tight text-gray-900"
            >Nov 13th - Track 1</span
          >
        </div>

        {#each dayTwoT1Agenda as speaker}
          <li class="flex flex-col items-center space-y-4">
            <ItemAgendaCard
              session={speaker.session}
              speaker={speaker.speaker}
              startTime={speaker.startTime}
              endTime={speaker.endTime}
            />
          </li>
        {/each}
      </ol>

      <ol
        class="space-y-8 rounded-xl border border-gray-100 bg-white/60 py-14 px-10 text-center shadow-xl shadow-gray-900/10 backdrop-blur"
      >
        <div id="agenda-title" class="flex flex-col space-y-3">
          <span class="text-blue-500">Day 2</span>
          <span class="text-2xl font-bold tracking-tight text-gray-900"
            >Nov 13th - Track 2</span
          >
        </div>

        {#each dayTwoT2Agenda as speaker}
          <li class="flex flex-col items-center space-y-4">
            <ItemAgendaCard
              session={speaker.session}
              speaker={speaker.speaker}
              startTime={speaker.startTime}
              endTime={speaker.endTime}
            />
          </li>
        {/each}
      </ol>
    </div>
  </div>
</section>
