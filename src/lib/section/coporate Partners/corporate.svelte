<script lang="ts">
    import Button from '$lib/button/Button.svelte'
  
    // open the community partner forms in new page
    const openCorporatePartners=() =>{
      window.open('https://docs.google.com/forms/d/e/1FAIpQLSe2J4gDAJ8syrf1JKxGrLC_tsULc4ur6jDN4Gjo-GIWCZrmCA/viewform','_blank')
    }
  </script>
  <section
    id="partners"
    class="flex w-full flex-col items-center justify-start space-y-6 px-24"
  >
    <h2
      class="w-full text-center text-3xl font-bold tracking-tight text-black sm:text-4xl lg:text-5xl"
    >
    Corporate Partners
    </h2>
    <div class="max-w-7xl px-4 sm:px-6 md:w-1/2">
      <div class="mt-6 text-center">
        <Button
          id="Community Partners"
          title="Join us now"
          isSecondaryButton={false}
          onClick={() => openCorporatePartners()}
        />
      </div>
    </div>
    <div class="bg-white">
      <div class="w-full max-w-7xl py-12 px-4 sm:px-6 lg:px-8">
        <div class="grid grid-cols-2 gap-8 md:grid-cols-6 lg:grid-cols-4">  
          <div class="col-span-1 flex justify-center md:col-span-2 lg:col-span-1">
          <a href="https://www.jetbrains.com/">
            <img
              src="/jetbrains.svg"
              class="img-border"
              alt="Jet Brains"
              height={50}
              width={200}
              loading="lazy"
            />
          </a>
        </div>
        <div class="col-span-1 flex justify-center md:col-span-2 lg:col-span-1">
          <a href="https://konfhub.com/">
            <img
              src="/konfhub.svg"
              class="img-border"
              alt="Konfhub"
              height={50}
              width={200}
              loading="lazy"
            />
          </a>
        </div>
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
