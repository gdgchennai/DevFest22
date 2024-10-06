<script lang="ts">
  import ItemAgendaCard from './ItemAgendaCard.svelte';
  import { dataStore, loadData } from '$lib/stores';
  import { onMount } from 'svelte';
  import type { Agenda, AgendaSession } from '$lib/types';

  let data: { agendas?: Agenda };
  let selectedHall: keyof Agenda = 'mainHall';
  let agendas: AgendaSession[] = [];

  const hallNames: Record<keyof Agenda, string> = {
    mainHall: 'Main Hall',
    amphiHall: 'Amphi Hall',
    ramanHall: 'Raman Hall',
    miniAudi: 'Mini Audi'
  };

  onMount(() => {
    loadData();
  });

  $: agendas = data?.agendas?.[selectedHall] || [];

  $: data = $dataStore;
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
            <span class="isolate inline-flex space-x-3 rounded-md sm:p-8">
              <button
                on:click={() => (selectedHall = 'mainHall')}
                type="button"
                class="relative inline-flex items-center rounded-md border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-700 shadow-md hover:bg-gray-50 focus:z-10 focus:border-black focus:outline-none focus:ring-1 focus:ring-black"
              >
                Main Hall
              </button>
              <button
                on:click={() => (selectedHall = 'amphiHall')}
                type="button"
                class="relative inline-flex items-center rounded-md border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-700 shadow-md hover:bg-gray-50 focus:z-10 focus:border-black focus:outline-none focus:ring-1 focus:ring-black"
              >
                Amphi Hall
              </button>
              <button
                on:click={() => (selectedHall = 'ramanHall')}
                type="button"
                class="relative inline-flex items-center rounded-md border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-700 shadow-md hover:bg-gray-50 focus:z-10 focus:border-black focus:outline-none focus:ring-1 focus:ring-black"
              >
                Raman Hall
              </button>
              <button
                on:click={() => (selectedHall = 'miniAudi')}
                type="button"
                class="relative inline-flex items-center rounded-md border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-700 shadow-md hover:bg-gray-50 focus:z-10 focus:border-black focus:outline-none focus:ring-1 focus:ring-black"
              >
                Mini Audi
              </button>
            </span>
          </div>
          <h2 class="py-5 text-xl font-medium text-blue-500">
            {hallNames[selectedHall]}
          </h2>
          {#if data}
            {#each agendas as agenda}
              <ItemAgendaCard
                session={agenda.session}
                name={agenda.name}
                imageUrls={agenda.imageUrls}
                time={agenda.time}
                showImage={agenda.showImage}
                showMultipleImage={agenda.showMultipleImage}
              />
            {/each}
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
</style>
