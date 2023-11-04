<script lang="ts">
  const gallery = [
    {
      imageUrl: '1.webp'
    },

    {
      imageUrl: '2.webp'
    },

    {
      imageUrl: '3.webp'
    },

    {
      imageUrl: '4.jpeg'
    },
    {
      imageUrl: '5.webp'
    },
    {
      imageUrl: '6.webp'
    },
    {
      imageUrl: '7.webp'
    },
    {
      imageUrl: '8.webp'
    },
    {
      imageUrl: '9.webp'
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
    DevFest 2022 was so much fun.
  </h2>

  <div class="bg-white">
    <div class="mx-auto py-12 lg:py-24">
      <uli
        role="list"
        class="space-y-12 sm:grid sm:grid-cols-2 sm:gap-x-6 sm:gap-y-12 sm:space-y-0 lg:grid-cols-2 lg:gap-x-8"
      >
        <!-- Update the Image Class from : 
        class="rounded-lg object-cover shadow-lg"
        to :
       class="rounded-lg object-cover shadow-lg lg:max-h-[370px] lg:min-h-[280px] lg:w-full"
       -->
        {#each gallery as photo}
          <div class="space-y-4">
            <div class="aspect-w-3 aspect-h-2 px-2 md:px-0">
              <img
                class="rounded-lg object-cover shadow-lg lg:max-h-[370px] lg:min-h-[280px] lg:w-full"
                src="/memories/{photo.imageUrl}"
                alt=""
                loading="lazy"
              />
            </div>
          </div>
        {/each}
      </uli>
    </div>
  </div>
</section>
