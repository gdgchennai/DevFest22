<script lang="ts">
  import type { CommunityPartners } from "$lib/types";
  import { onMount } from "svelte";

  let communityPartners: CommunityPartners[] = [];

  onMount(async () => {
    try {
      const response = await fetch('https://raw.githubusercontent.com/gdgchennai/devfest24-api/main/web_api.json')
      const data = await response.json()
      communityPartners = data.communityPartners
    } catch (error) {
      console.error('Error fetching images for community partners:', error)
    }
  });
</script>
<section
  id="partners"
  class="flex w-full flex-col items-center justify-start space-y-6 px-24"
>
  <h2
    class="w-full text-center text-3xl font-bold tracking-tight text-black sm:text-4xl lg:text-5xl"
  >
  Community Partners
  </h2>
  <p class="text-md  mt-4 text-center text-gray-600">
    Let's Make a Difference Together! Become Our Community Partner.
  </p>
  <div class="bg-white">
    <div class="w-full max-w-7xl py-12 px-4 sm:px-6 lg:px-8">
      <div class="grid grid-cols-2 gap-8 md:grid-cols-6 lg:grid-cols-4">
        {#each communityPartners as communityPartner}
        <div class="col-span-1 flex justify-center md:col-span-2 lg:col-span-1">
          <a href="{communityPartner.link}" target="_blank">
            <img
              src="{communityPartner.image}"
              class="img-border"
              alt="{communityPartner.title}"
              height={50}
              width={200}
              loading="lazy"
            />
          </a>
        </div>
        {/each}
      </div>
    </div>
  </div>
</section>

<style>
  .img-border {
    border: 1px solid #ddd;
    border-radius: 10px;
    padding: 20px;
    background-color: #fff;
  }

  @media (min-width: 1024px) {
    .lg\:grid-cols-4 {
      grid-template-columns: repeat(4, minmax(0, 1fr));
    }
  }
</style>
