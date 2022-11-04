<script lang="ts">
  import Button from '$lib/button/Button.svelte';

  // open the sponsor form in a new tab
  const openSponsorBrochure = () => {
    window.open('/sponsorship', '_blank');
  };
</script>

<section
  id="partners"
  class="flex w-full flex-col items-center space-y-6 px-24"
>
  <h2
    class="w-full text-center text-3xl font-bold tracking-tight text-black sm:text-4xl lg:text-5xl"
  >
    Sponsors
  </h2>
  <p class="text-md  mt-4 text-center text-gray-600">
    Join hands with us to make DevFest Chennai remarkable.
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
  <div class="bg-white">
    <div class="mx-auto max-w-7xl py-12 px-4 sm:px-6 lg:px-8">
      <div class="col-span-1 flex justify-center md:col-span-2 lg:col-span-1">
        <img src="/google-devs.svg" alt="Google Developers" />
      </div>
    </div>
  </div>
</section>
