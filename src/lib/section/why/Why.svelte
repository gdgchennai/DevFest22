<script lang="ts">
  interface AttendanceReason {
    title: string;
    description: string;
    image_src: string;
  }
  const reasons: AttendanceReason[] = [
    {
      title: 'Tech Talks',
      image_src: '/icons/ted 1.svg',
      description:
        'Several speakers are coming together to talk about their experiences in the industry. We will also have a few lightning talks with our members.'
    },
    {
      title: 'Expert Speakers',
      image_src: '/icons/talks 1.svg',
      description:
        'Experts from the industry will be on hand to answer your questions and give you advice on how to get into the industry.'
    },
    {
      title: 'Networking',
      image_src: '/icons/Networking 2.svg',
      description:
        'You will have the opportunity to network with other students and professionals in the industry.'
    },
    {
      title: 'Workshops',
      image_src: '/icons/book 1.svg',
      description:
        'We will be hosting a series of workshops to assist you in getting started with your tech career. Our members will also give a few lightning talks.'
    }
  ];

  interface AttendanceReason {
    title: string;
    description: string;
    image_src: string;
  }
</script>

<section
  id="why"
  class="flex w-full flex-col items-center justify-center py-16"
>
  <div class="mx-auto w-full max-w-4xl px-3 sm:px-5">
    <h1 class="mb-4 text-center text-4xl font-bold">Why attend?</h1>
    <p class="mb-8 text-center text-lg">
      We have a fantastic lineup of speakers and sessions for you to learn and
      enhance your skills.
    </p>

    <div class="grid grid-cols-1 gap-8 md:grid-cols-2">
      {#each reasons as reason}
        <div class="flex flex-row gap-3  p-6">
          <img
            src={reason.image_src}
            alt=""
            class="aspect-square h-20 w-20 object-cover"
          />
          <div class="mb-4 flex flex-col items-start gap-3 text-left">
            <h2 class="text-xl font-semibold">{reason.title}</h2>
            <p>{reason.description}</p>
          </div>
        </div>
      {/each}
    </div>
  </div>
</section>
