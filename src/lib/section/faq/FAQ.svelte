<script lang="ts">
  import Icon from '$lib/icon/Icon.svelte';
  import { slide } from 'svelte/transition';

  type Faq = {
    id: number;
    question: string;
    answer: string;
    active: boolean;
  };
  let faqs: Faq[] = [
    {
      id: 1,
      question: 'What is DevFest?',
      answer:
        "DevFests are community led developer events hosted by Google Developers Groups around the globe.",
      active: false
    },
    {
      id: 2,
      question: 'Why should I attend?',
      answer:
        "Because you'll learn a lot of new things, meet new people, and have a great time!",
      active: false
    },
    {
      id: 3,
      question: 'How much does it cost?',
      answer:
        "It's completely free! We're a student-run organization, so we don't charge for our events. so feel free to bring your friends!",
      active: false
    },
    {
      id: 4,
      question: 'What if I have a question?',
      answer:
        'You can email us at hello@gdgchennai.in or reach out to us on our social media channels.',
      active: false
    },
    {
      id: 5,
      question: 'Will there be food?',
      answer: 'Yes, we will have food and drinks available for everyone.',
      active: false
    },
    {
      id: 6,
      question: 'Is it mandatory to register to participate in the event?',
      answer: 'Yes. Each individual may register for only one ticket. You may not register on behalf of anyone else.',
      active: false
    },
    {
      id: 7,
      question: 'Who can register for DevFest',
      answer: 'Beginners, experts, literally everyone. Anyone with the passion of learning, who’s fond of technology, passionate programmers , everybody can register and attend.',
      active: false
    },
    {
      id: 8,
      question: 'What will attendees get by participating in the event?',
      answer: 'We have a plethora of AMAZING perks awaiting for you!',
      active: false
    }
  ];

  const expand = (faq: Faq) => {
    faqs = faqs.map((s) => {
      if (s.id === faq.id) {
        s.active = !s.active;
      }
      return s;
    });
  };
</script>

<div
  class="mx-auto max-w-7xl w-full flex py-12 px-4 sm:py-16 sm:px-6 lg:px-8 items-center justify-start"
>
  <div class="mx-auto w-full flex flex-col max-w-2xl">
    <h2
      class="text-3xl font-bold tracking-tight text-center sm:text-4xl lg:text-5xl text-black"
    >
      Frequently Asked Questions
    </h2>

    {#each faqs as faq}
      <div on:click={() => expand(faq)} class="mt-8">
        <div class="w-full flex space-x-3 bg-gray-900 p-3 rounded-lg text-white">
          <h3 class=" text-lg font-medium tracking-tight">
            {faq.question}
          </h3>

          {#if faq.active}
            <Icon width="24" height="24" name="chevronup" />
          {:else}
            <Icon width="24" height="24" name="chevrondown" />
          {/if}
        </div>

        {#if faq.active}
          <div
            class="text-base text-start leading-6 bg-gray-900 p-3 text-white -mt-2 rounded-bl-lg rounded-br-lg"
            in:slide={{ duration: 500 }}
            out:slide={{ duration: 500 }}
          >
            {faq.answer}
          </div>
        {/if}
      </div>
    {/each}
  </div>
</div>
