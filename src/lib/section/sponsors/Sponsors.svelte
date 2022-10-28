<script>
  import Button from '$lib/button/Button.svelte';
  
  function handleClick() {
    window.open("/sponsorship", '_blank').focus();
  }
</script>
<style>
  @media (min-width: 1024px){
      .lg\:grid-cols-4 {
          grid-template-columns: repeat(4, minmax(0, 1fr));
      }
  }
</style>
<section
  id="partners"
  class="flex flex-col items-center justify-start space-y-6"
>
  <h2
    class="w-full text-3xl sm:text-4xl lg:text-5xl font-bold text-center tracking-tight text-black"
  >
    Sponsors
  </h2>
  <p class="mt-4  sm:text-xl text-gray-600">
    Join hands with us to make DevFest Chennai remarkable.
  </p>
  <div class="md:w-1/2 max-w-7xl px-4 sm:px-6">
    <div class="text-center">
      <p class="mt-4 text-sm text-gray-600">
        <Button
          id="sponsorship-prospectus"
          title="Sponsorship Prospectus"
          isSecondaryButton={false}
          onClick={() => handleClick()}>
        </Button>
      </p>
    </div>
  </div>
  <div class="bg-white">
    <div class="mx-auto max-w-7xl py-12 px-4 sm:px-6 lg:px-8">
        <div class="col-span-1 flex justify-center md:col-span-2 lg:col-span-1">
          <img
            src="/google-devs.svg"
            alt="Google Developers"
          />
        </div>
    </div>
  </div>
</section>
