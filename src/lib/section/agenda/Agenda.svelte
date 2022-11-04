<script>
  import ItemSpeakerCard from '../speaker/ItemSpeakerCard.svelte';
  import ItemAgendaCard from './ItemAgendaCard.svelte';

  const dayOneAgenda = [
    {
      session: 'Android Jetpack Compose',
      speaker: 'Somasundaram S',
      startTime: '9:00 AM',
      endTime: '10:00 AM'
    },
    {
      session: 'Firebase ML Kit',
      speaker: 'Varun Raj',
      startTime: '10:00 AM',
      endTime: '11:00 AM'
    },

    {
      session: 'Lunch Break',
      speaker: 'Somasundaram S',
      startTime: '12:00 PM',
      endTime: '01:00 PM'
    },
    {
      session: 'Flutter & Dart',
      speaker: 'Vasundhara R',
      startTime: '01:00 PM',
      endTime: '02:00 PM'
    }
  ];

  const dayTwoAgenda = [
    {
      session: 'Android Jetpack Compose',
      speaker: 'Somasundaram S',
      startTime: '9:00 AM',
      endTime: '10:00 AM'
    },
    {
      session: 'Firebase ML Kit',
      speaker: 'Varun Raj',
      startTime: '10:00 AM',
      endTime: '11:00 AM'
    },

    {
      session: 'Lunch Break',
      speaker: 'Somasundaram S',
      startTime: '12:00 PM',
      endTime: '01:00 PM'
    },
    {
      session: 'Flutter & Dart',
      speaker: 'Vasundhara R',
      startTime: '01:00 PM',
      endTime: '02:00 PM'
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
          while you are at it. [Original List to be updated soon.]
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
            >Nov 12th</span
          >
        </div>

        {#each dayOneAgenda as speaker}
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
            >Nov 13th</span
          >
        </div>

        {#each dayOneAgenda as speaker}
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
