<script lang="ts">
  import ItemAgendaCard from "./ItemAgendaCard.svelte";

  let toggle: boolean = true;

  const mainHallAgenda = [
    {
      name: 'Registration',
      session: 'First come first serve basis',
      time: '8:00 AM - 9:30 AM'
    },
    {
      name: 'Intro and Keynote by GDG Chennai / Devrel',
      session: 'Vanakkam to DevFest Chennai 2024!!',
      time: '9:30 AM - 10:15 AM'
    },
    {
      name: 'Navaneeth',
      session: 'Gemma Models: Architecture, Application Development, and Fine-Tuning Techniques',
      imageUrl: '',
      showImage: false,
      // time: '9:20 AM - 09:55 AM'
    },
    {
      name: 'Ashish',
      session: 'Shipping Gen AI Products with Web by Leveraging Project FUGU',
      imageUrl: '',
      showImage: false,
      // time: '10:00 AM - 10:35 AM'
    },
    {
      name: 'Anubhav',
      session: 'Goroutines as Cognitive Threads: Replicating Human Behavior in Go',
      imageUrl: '',
      showImage: false,
      // time: '10:40 AM - 11:15 AM'
    },
    {
      name: 'Swathi',
      session: 'Future with Technology- The not so seen perspective',
      imageUrl: '',
      showImage: false,
      // time: '11:20 AM - 11:55 AM'
    },
    {
      name: 'Joinal Ahmed',
      session: 'Take Data to the next level with Graph Machine Learning',
      imageUrl: '/profile_pics/Joinal_Ahmed.png',
      showImage: false,
      // time: '12:00 PM - 12:35 PM'
    },
    {
      name: 'Raghav',
      session: 'Multimodality across Indic Languages',
      imageUrl: '',
      showImage: false,
      // time: '12:40 PM - 1:15 PM'
    },
    // {
    //   name: 'Lunch',
    //   session: 'Good time to go around, Eat and connect with people!',
    //   time: '1:15 PM - 2:15 PM'
    // },
    {
      name: 'Anush',
      session: 'App Aware Infra, Infra Aware App',
      imageUrl: '',
      showImage: false,
      // time: '2:15 PM - 2:40 PM'
    },
    {
      name: 'Anam Saatvik Reddy',
      session:
        'Lightning talk - TensorFlow Recommenders - a simple library for building powerful recommendation systems',
      imageUrl: '/profile_pics/Anam_Saatvik_Reddy.png',
      showImage: false,
      // time: '2:45 PM - 2:55 PM'
    },
    {
      name: 'Heflin',
      session: 'Lightning talk - The Missing Part in Language Models: Understanding the Encoder',
      imageUrl: '',
      showImage: false,
      // time: '2:55 PM - 3:05 PM'
    },
    {
      name: 'Veena',
      session: 'Lightning talk - From Screen to Mind: How Business transforms User Experience into Portals of possibility',
      imageUrl: '',
      showImage: false,
      // time: '3:05 PM - 3:20 PM'
    },
    {
      name: 'Vishnupriya',
      session: 'Lightning talk - How To Progress The Ladder As A Developer',
      // time: '3:25 PM - 4:00 PM'
    },
    {
      name: 'Chandnika',
      session: 'Lightning talk - Learn How You Can Transform the Future of Education with Gemini and Responsible AI',
      // time: '4:05 PM - 4:40 PM'
    },
    {
      name: 'Aishwarya',
      session: 'Lightning talk - Prompts to Pixels: Getting started with GenAI films',
      // time: '4:40 PM - 4:50 PM'
    },
    {
      name: 'Sanjeev',
      session: 'Lightning talk -  MicroSaaS as a revenue making side project',
      // time: '4:40 PM - 4:50 PM'
    },
    {
      name: 'Bhavani',
      session: 'Lightning talk -  Non tech skills you need to master',
      // time: '4:40 PM - 4:50 PM'
    },
    {
      name: 'Guru',
      session: 'Lightning talk -  New age marketing ft linkedin, instagram and youtube',
      // time: '4:40 PM - 4:50 PM'
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
            <h3>05 Oct 2024</h3>
            <span class="isolate inline-flex rounded-md sm:p-8">
              <!-- <button
                on:click={() => toggle = !toggle}
                type="button"
                class="relative inline-flex items-center rounded-md border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-50 focus:z-10 focus:border-black focus:outline-none focus:ring-1 focus:ring-black shadow-md"
              >
                Switch track
              </button> -->
            </span>
          </div>
          {#if toggle}
          <!-- <h2 class="text-xl text-blue-500 py-5 font-medium">Main Hall</h2> -->
           {#each mainHallAgenda as agenda}
           <ItemAgendaCard
              session={agenda.session}
              name={agenda.name}
              imageUrl={agenda.imageUrl}
              time={agenda.time}
              showImage={agenda.showImage}
            />
          {/each}
          {:else}
          <!-- <h2 class="text-xl text-green-500 py-5 font-medium">Amphi</h2> -->
          <!-- {#each dayOneAgendaTrack as speaker}
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
          {/each} -->
          {/if}
        </div>
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
      #EA4335 0%,
      #4285F4 26%,
      #34A853 57%,
      #F9AB00 100%
    );
    background: -webkit-linear-gradient(
      left,
      #EA4335 0%,
      #4285F4 26%,
      #34A853 57%,
      #F9AB00 100%
    );
    background: linear-gradient(
      to right,
      #EA4335 0%,
      #4285F4 26%,
      #34A853 57%,
      #F9AB00 100%
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
