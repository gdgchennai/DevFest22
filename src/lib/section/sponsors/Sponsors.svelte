<script lang="ts">
  import Button from '$lib/components/Button.svelte';
  import { sponsors } from './sponsors-data';

  const openSponsorBrochure = () => {
    window.open('/sponsorship', '_blank');
  };
</script>

<section
  id="sponsors"
  class="flex w-full flex-col items-center space-y-6 px-24"
>
  <h2
    class="w-full text-center text-3xl font-bold tracking-tight text-black sm:text-4xl lg:text-5xl"
  >
    Sponsors
  </h2>
  <p class="text-md mt-4 text-center text-gray-600">
    Thanks to our sponsors for supporting us in making DevFest 2023 spectacular.
    Want to join us in 2024? Check out our sponsorship prospectus.
  </p>
  <div class="max-w-7xl px-4 sm:px-6 md:w-1/2">
    <div class="mt-6 text-center">
      <Button
        id="sponsorship-prospectus"
        title="Sponsorship Prospectus"
        isSecondaryButton={false}
        onClick={() => openSponsorBrochure()}
      />
    </div>
  </div>
  <div class="bg-white w-full">
    <div class="w-full max-w-7xl py-12 px-4 sm:px-6 lg:px-8">
      <div class="grid grid-cols-2 gap-8 md:grid-cols-3 lg:grid-cols-4">
        {#each sponsors as sponsor}
          <div class="col-span-1 flex justify-center">
            <a href="{sponsor.website}" class="inline-block relative transition-all duration-300 ease-in-out hover:-translate-y-0.5 hover:-translate-x-0.5 group">
              <div class="bg-[#ffce46] border-2 border-black rounded-lg shadow-[3px_3px_0_0_#000000] p-0.5 transition-shadow duration-300 ease-in-out group-hover:shadow-[5px_5px_0_0_#000000]">
                <div class="bg-white border-2 border-black rounded-md p-4">
                  <img
                    src="{sponsor.image}"
                    alt={sponsor.name}
                    loading="lazy"
                    class="block max-w-full h-auto"
                  />
                </div>
              </div>
            </a>
          </div>
        {/each}
      </div>
    </div>
  </div>
</section>
