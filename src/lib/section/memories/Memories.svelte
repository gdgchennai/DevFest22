<script lang="ts">
  const gallery = [
    {
      name: 'Leonard Krasner',
      imageUrl:
        'https://images.unsplash.com/photo-1591115765373-5207764f72e7?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80'
    },

    {
      name: 'Leonard Krasner',
      imageUrl:
        'https://images.unsplash.com/photo-1603478804503-dc909c7f5ce5?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2021&q=80'
    },

    {
      name: 'Leonard Krasner',
      imageUrl:
        'https://images.unsplash.com/photo-1593080358201-08e4ff5f93d9?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80'
    },

    {
      name: 'Leonard Krasner',
      imageUrl:
        'https://images.unsplash.com/photo-1515187029135-18ee286d815b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80'
    },
    {
      name: 'Leonard Krasner',
      imageUrl:
        'https://images.unsplash.com/photo-1570616969692-54d6ba3d0397?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1422&q=80'
    },
    {
      name: 'Leonard Krasner',
      imageUrl:
        'https://images.unsplash.com/photo-1557804506-669a67965ba0?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1374&q=80'
    }
  ];
</script>

<section
  id="memories"
  class="flex flex-col items-center justify-start space-y-6"
>
  <h2
    class="w-full flex text-3xl sm:text-4xl lg:text-5xl font-bold text-start md:text-center lg:text-center tracking-tight"
  >
    Devfest 2019 was a fun and memorable experience for many of us.
  </h2>
  <p class="max-w-2xl text-start md:text-center lg:text-center text-gray-700">
    Our team has worked hard to make this event a success. We are looking
    forward to make this event even better in 2022.
  </p>

  <div class="bg-white">
    <div class="mx-auto max-w-7xl py-12  lg:py-24">
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
