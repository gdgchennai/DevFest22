<script lang="ts">
    import Button from '$lib/components/Button.svelte';
  
    // open the sponsor form in a new tab
    const opneCfp = () => {
      window.open('http://bit.ly/speakers-assemble', '_blank');
    };
  </script>
<section id="CFP" class="flex w-full flex-col items-center space-y-6 px-24">
    <div class="pt-12 sm:pt-16 lg:pt-20">
      <div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div class="text-center">
          <h2
            class="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl lg:text-5xl"
          >
          Call for Speakers
          </h2>
          <p class="mt-4  text-gray-600 sm:text-xl">
            Got a groundbreaking idea or tech innovation to share? We got just the platform for you to<br>
		        join us as a speaker and make an impact!
          </p>
        </div>
      </div>
    </div>
    <div class="max-w-7xl px-4 sm:px-6 md:w-1/2">
        <div class="mt-6 text-center">
          <Button
            id="CFP-Link"
            title="Submit your proposal"
            isSecondaryButton={false}
            onClick={() => opneCfp()}
          />
        </div>
      </div>

  </section>
  
