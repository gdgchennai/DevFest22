<script lang="ts">
    import Button from '$lib/button/Button.svelte';
  
    // open the sponsor form in a new tab
    const opneCfp = () => {
      window.open('https://docs.google.com/forms/d/e/1FAIpQLSfqUAAZew6k9TTkETItNM1HqqwhPc_q-J9p-pv_jlftaQpIYA/viewform', '_blank');
    };
  </script>
<section id="CFP" class="flex w-full flex-col items-center space-y-6 px-24">
    <div class="pt-12 sm:pt-16 lg:pt-20">
      <div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div class="text-center">
          <h2
            class="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl lg:text-5xl"
          >
            Submit a Talk
          </h2>
          <p class="mt-4  text-gray-600 sm:text-xl">
            Your Voice, Your Stage: Let's Talk Innovation!</p>
        </div>
      </div>
    </div>
    <div class="max-w-7xl px-4 sm:px-6 md:w-1/2">
        <div class="mt-6 text-center">
          <Button
            id="CFP-Link"
            title="Submit your talk today"
            isSecondaryButton={false}
            onClick={() => opneCfp()}
          />
        </div>
      </div>

  </section>
  
