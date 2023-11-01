<script lang="ts">
  import Button from '$lib/button/Button.svelte'

  // open the community partner forms in new page
  const openCommunityPartners=() =>{
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
  Community Partners
  </h2>
  <p class="text-md  mt-4 text-center text-gray-600">
    Let's Make a Difference Together! Become Our Community Partner.
  </p>
  <div class="max-w-7xl px-4 sm:px-6 md:w-1/2">
    <div class="mt-6 text-center">
      <Button
        id="Community Partners"
        title="Join us now"
        isSecondaryButton={false}
        onClick={() => openCommunityPartners()}
      />
    </div>
  </div>
  <div class="bg-white">
    <div class="w-full max-w-7xl py-12 px-4 sm:px-6 lg:px-8">
      <div class="grid grid-cols-2 gap-8 md:grid-cols-6 lg:grid-cols-4">
        <div class="col-span-1 flex justify-center md:col-span-2 lg:col-span-1">
          <a href="https://gdg.community.dev/gdg-cloud-chennai/">
            <img
              src="/gdg-cloud-chennai.svg"
              class="img-border"
              alt="GDG Cloud Chennai"
              height={50}
              width={200}
              loading="lazy"
            />
          </a>
        </div>
        <div class="col-span-1 flex justify-center md:col-span-2 lg:col-span-1">
          <a href="https://twitter.com/wtmchennai">
            <img
              src="/wtm-chennai.svg"
              class="img-border"
              alt="WTM Chennai"
              height={50}
              width={200}
              loading="lazy"
            />
          </a>
        </div>
        <div class="col-span-1 flex justify-center md:col-span-2 lg:col-span-1">
          <a href="https://www.meetup.com/TFUGChennai/">
            <img
              src="/tfug-chennai.svg"
              class="img-border"
              alt="TFUG Chennai"
              height={50}
              width={200}
              loading="lazy"
            />
          </a>
        </div>
        <div class="col-span-1 flex justify-center md:col-span-2 lg:col-span-1">
          <a
            href="https://gdsc.community.dev/srm-institute-of-science-and-technology-ramapuram-chennai/"
          >
            <img
              src="/gdsc-srm-rpm.svg"
              class="img-border"
              alt="GDSC SRM Ramapuram"
              height={50}
              width={200}
              loading="lazy"
            />
          </a>
        </div>
        <div class="col-span-1 flex justify-center md:col-span-2 lg:col-span-1">
          <a
            href="https://gdsc.community.dev/hindustan-institute-of-technology-science-chennai/"
          >
            <img
              src="/gdsc-hits.svg"
              class="img-border"
              alt="GDSC HITS"
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
