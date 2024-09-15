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
            <a href="{sponsor.website}">
              <img
                src="{sponsor.image}"
                class="img-border"
                height={50}
                width={200}
                alt={sponsor.name}
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
</style>
