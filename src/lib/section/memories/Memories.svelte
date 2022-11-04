<script lang="ts">
  const gallery = [
    {
      imageUrl: '/memories_1.jpeg'
    },

    {
      imageUrl: '/memories_9.jpeg'
    },

    {
      imageUrl: '/memories_3.jpeg'
    },

    {
      imageUrl: '/memories_4.jpeg'
    },
    {
      imageUrl: '/memories_5.jpeg'
    },
    {
      imageUrl: '/memories_6.jpeg'
    },
    {
      imageUrl: '/memories_7.jpeg'
    },
    {
      imageUrl: '/memories_9.jpeg'
    },
    {
      imageUrl: '/memories_2.jpeg'
    },
    {
      imageUrl: '/memories_8.jpeg'
    }
  ];
</script>

<section
  id="memories"
  class="flex w-full flex-col items-center justify-start space-y-6 px-24"
>
  <h2
    class="flex text-center text-3xl font-bold tracking-tight text-black sm:text-4xl lg:text-5xl"
  >
    DevFest 2019 was a benchmark event for many of us.
  </h2>
  <p class="max-w-2xl text-center text-gray-700">
    It's time to create history once more in 2022, and we hope to see you in our
    gallery.
  </p>

  <div class="bg-white">
    <div class="mx-auto py-12 lg:py-24">
      <uli
        role="list"
        class="space-y-12 sm:grid sm:grid-cols-2 sm:gap-x-6 sm:gap-y-12 sm:space-y-0 lg:grid-cols-2 lg:gap-x-8"
      >
        {#each gallery as photo}
          <div class="space-y-4">
            <div class="aspect-w-3 aspect-h-2">
              <img
                class="rounded-lg object-cover shadow-lg"
                src={photo.imageUrl}
                alt=""
              />
            </div>
          </div>
        {/each}
      </uli>
    </div>
  </div>
</section>
