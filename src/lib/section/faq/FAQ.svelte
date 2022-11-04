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
      question: 'What is DevFest? 👀',
      answer:
        'DevFest is a community-led developer event hosted by various Google Developer Groups around the globe.',
      active: false
    },
    {
      id: 2,
      question: 'Why should I attend? 🤔',
      answer:
        'You will be able to learn new things, meet new people, and have a fabulous time! We might as well have some surprises!',
      active: false
    },
    {
      id: 3,
      question: 'How much does it cost? 💸',
      answer:
        "It's completely free! We're a community that decided not to charge for our events.",
      active: false
    },
    {
      id: 4,
      question: 'What if I have a question? 🤷‍♂️',
      answer:
        'You can email us at hello@gdgchennai.in or reach out to us on our social media channels.',
      active: false
    },
    {
      id: 5,
      question: 'Will there be food? 🍕',
      answer: 'Yes, we will have food and drinks available for everyone.',
      active: false
    },
    {
      id: 6,
      question: 'Is it mandatory to register to participate in the event? 📝',
      answer:
        'Yes. Each individual may register for only one ticket. You may not register on behalf of anyone else.',
      active: false
    },
    {
      id: 7,
      question: 'Who can register for DevFest 2022? 🤔',
      answer:
        'Anyone passionate about learning new things, fond of technology, beginners, programmers, experts, and everyone can register and join us.',
      active: false
    },
    {
      id: 8,
      question: 'What are the perks for the participants? 🤩',
      answer: 'We have a plethora of AMAZING surprises awaiting for you!',
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

<div class="flex w-full flex-col items-center justify-start space-y-6 px-24">
  <div class="mx-auto flex w-full max-w-2xl flex-col">
    <h2
      class="text-center text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl lg:text-5xl"
    >
      Frequently Asked Questions
    </h2>

    {#each faqs as faq}
      <div on:click={() => expand(faq)} class="mt-8">
        <div
          class="flex w-full cursor-pointer space-x-3 rounded-lg bg-gray-50 p-3 text-gray-900"
        >
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
            class="-mt-2 rounded-bl-lg rounded-br-lg p-3 text-start text-base leading-6 text-gray-900"
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
