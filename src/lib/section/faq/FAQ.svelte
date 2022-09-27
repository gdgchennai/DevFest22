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
      question: 'Why should I attend?',
      answer:
        "Because you'll learn a lot of new things, meet new people, and have a great time!",
      active: false
    },
    {
      id: 2,
      question: 'How much does it cost?',
      answer:
        "It's completely free! We're a student-run organization, so we don't charge for our events. so feel free to bring your friends!",
      active: false
    },

    {
      id: 3,
      question: 'What if I have a question?',
      answer:
        'You can email us at hello@gdgchennai.in or reach out to us on our social media channels.',
      active: false
    },

    {
      id: 4,
      question: 'Will there be food?',
      answer: 'Yes, we will have food and drinks available for everyone.',
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
        <div class="w-full flex space-x-3">
          <h3 class=" text-lg font-bold tracking-tight text-black">
            {faq.question}
          </h3>

          {#if faq.active}
            <Icon width="20" height="20" name="chevronup" />
          {:else}
            <Icon width="20" height="20" name="chevrondown" />
          {/if}
        </div>

        {#if faq.active}
          <div
            class="mt-2 text-base text-gray-500 text-start leading-6"
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
