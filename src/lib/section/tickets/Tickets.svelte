<script lang="ts">
  import Button from '$lib/components/Button.svelte';

  function handleClick() {
    location.href = '/agenda';
  }

  function download() {
    window.open('schedule.pdf');
  }

  const includedFeatures = [
    { feature: 'Scrumptious food', icon: '/icons/Fast food.svg' },
    { feature: 'Exciting sessions', icon: '/icons/Conference.svg' },
    { feature: 'Networking opportunities', icon: '/icons/People.svg' },
    { feature: 'Take home cool swags', icon: '/icons/Birthday.svg' },
    { feature: 'Chance to take part in fun activities', icon: '/icons/Fun glasses.svg' },
    { feature: 'Meet expert speakers', icon: '/icons/User.svg' }
  ];
</script>
<section id="tickets" class="flex w-full flex-col items-center space-y-6 px-4 sm:px-8 lg:px-24">
  <div class="bg-white">
    <div class="pt-12 sm:pt-16 lg:pt-20">
      <div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div class="text-center">
          <h2 class="text-4xl sm:text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight text-black">
            This is the best conference you will ever attend!
          </h2>
        </div>
      </div>
    </div>
    <div class="mt-8 bg-white pb-16 sm:mt-12 sm:pb-20 lg:pb-28">
      <div class="relative">
        <div class="absolute inset-0 h-1/2 bg-white"></div>
        <div class="relative mx-auto max-w-7xl">
          <div class="mx-auto max-w-lg overflow-hidden rounded-lg shadow-lg lg:flex lg:max-w-none">
            <div class="flex-1 border border-gray-50 px-6 py-8 lg:p-12">
              <h3 class="font-bold text-lg sm:text-xl md:text-2xl lg:text-4xl text-gray-900 relative inline-block">
                DevFest 2024
              </h3>
              <p class="mt-4 text-sm sm:text-base md:text-lg lg:text-xl text-gray-500">
                Come. Learn, Network and Celebrate with Google Developer Groups
                and Google Developer Experts while also learning to hack on
                Android, Chrome, and Web.
              </p>
              <div class="mt-8">
                <div class="flex items-center">
                  <h4 class="flex-shrink-0 pr-4 text-sm sm:text-base md:text-lg lg:text-xl font-semibold text-gray-900">
                    What can you expect?
                  </h4>
                  <div class="flex-1 border-t border-gray-100"></div>
                </div>
                <ul class="mt-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
                  {#each includedFeatures as { feature, icon }, i}
                    <li class="flex items-start justify-center">
                      <div class="relative w-full max-w-[328px] flex items-center justify-start">
                        <div
                          class={`p-4 w-full h-auto ${
                            i % 4 === 0 ? 'bg-[#C3ECF6]' :
                            i % 4 === 1 ? 'bg-[#F8D8D8]' :
                            i % 4 === 2 ? 'bg-[#FFE7A5]' : 'bg-[#CCF6C5]'
                          } ${
                            i % 2 === 0 ? 'rounded-tl-[30px] rounded-tr-[30px] rounded-br-[30px]' :
                            'rounded-tl-[30px] rounded-tr-[30px] rounded-bl-[30px]'
                          } border-2 border-black flex items-center`}>
                          <div class="flex items-center space-x-3">
                            <div class="flex-shrink-0">
                              <div class="w-[72px] h-[72px] bg-white rounded-full border-[2px] border-black flex justify-center items-center">
                                <img src={icon} alt={feature} class="w-8 h-8" />
                              </div>
                            </div>
                            <p class="text-sm sm:text-base md:text-lg lg:text-base text-[#191f2c] font-medium font-['Open Sans'] leading-[18px] tracking-tight">
                              {feature}
                            </p>
                          </div>
                        </div>
                      </div>
                    </li>
                  {/each}
                </ul>
              </div>
              <div class="w-full px-4 sm:px-72">
                <div class="mt-6 text-center">
                  <Button
                    id="View Agenda"
                    title="View Agenda"
                    isSecondaryButton={false}
                    onClick={() => handleClick()}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>
<style>
  @media (max-width: 640px) {
    section {
      max-width: 75%;
      margin: 0 auto;
    }
  }
</style>
