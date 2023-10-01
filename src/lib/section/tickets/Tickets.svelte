<script lang="ts">
  import Button from '$lib/button/Button.svelte';
  import Icon from '$lib/icon/Icon.svelte';

  function handleClick() {
    location.href='/agenda'
  }

  function download() {
    window.open('schedule.pdf')
  }

  const includedFeatures = [
    'Scrumptious food',
    'Exciting sessions',
    'Networking opportunities',
    'Take home cool swags',
    'Chance to take part in fun activities',
    'Meet expert speakers'
  ];
</script>

<section id="tickets" class="flex w-full flex-col items-center space-y-6 px-24">
  <div class="bg-white">
    <div class="pt-12 sm:pt-16 lg:pt-20">
      <div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div class="text-center">
          <h2
            class="text-3xl font-bold tracking-tight text-black sm:text-4xl lg:text-5xl"
          >
            This is the best conference you will ever attend!
          </h2>
        </div>
      </div>
    </div>
    <div class="mt-8 bg-white pb-16 sm:mt-12 sm:pb-20 lg:pb-28">
      <div class="relative">
        <div class="absolute inset-0 h-1/2 bg-white" />
        <div class="relative mx-auto max-w-7xl ">
          <div
            class="mx-auto max-w-lg overflow-hidden rounded-lg shadow-lg lg:flex lg:max-w-none"
          >
            <div class="flex-1 border border-gray-50 px-6 py-8 lg:p-12">
              <div
                class="absolute -bottom-4 right-3 flex h-8 w-full animate-pulse items-center justify-center overflow-hidden"
              >
                <div class="-mb-px flex h-[2px] w-80 -scale-x-100">
                  <div
                    class="w-full flex-none blur-sm [background-image:linear-gradient(90deg,rgba(56,189,248,0)_0%,#0EA5E9_32.29%,rgba(236,72,153,0.3)_67.19%,rgba(236,72,153,0)_100%)]"
                  />
                  <div
                    class="-ml-[100%] w-full flex-none blur-[1px] [background-image:linear-gradient(90deg,rgba(56,189,248,0)_0%,#0EA5E9_32.29%,rgba(236,72,153,0.3)_67.19%,rgba(236,72,153,0)_100%)]"
                  />
                </div>
              </div>
              <h3
                class="font-bold text-gray-900 sm:text-2xl sm:tracking-tight md:text-4xl"
              >
                DevFest 2023
              </h3>
              <p class="mt-6 text-base text-gray-500">
                Come. Learn, Network and Celebrate with Google Developer Groups
                and Google Developer Experts while also learning to hack on
                Android, Chrome, and Web.
              </p>
              <div class="mt-8">
                <div class="flex items-center">
                  <h4
                    class="flex-shrink-0 pr-4 text-base font-semibold text-gray-900"
                  >
                    What's can you expect?
                  </h4>
                  <div class="flex-1 border-t border-gray-100" />
                </div>
                <ul
                  class="mt-8 space-y-5 lg:grid lg:grid-cols-2 lg:gap-x-8 lg:gap-y-5 lg:space-y-0"
                >
                  {#each includedFeatures as feature}
                    <li class="flex items-start lg:col-span-1">
                      <div class="flex-shrink-0">
                        <Icon width="20" height="20" name="check" />
                      </div>
                      <p class="ml-3 text-sm text-gray-700">{feature}</p>
                    </li>
                  {/each}
                </ul>
              </div>
            </div>
            <div
              class="bg-gray-50 py-8 px-6 text-center lg:flex lg:flex-shrink-0 lg:flex-col lg:justify-center lg:p-12"
            >
              <p class="text-4xl font-medium text-gray-900">
                Know your Speakers & Schedule
              </p>
              <div class="mt-6 mx-10">
                <p class="mt-6 text-base text-gray-500">
                  Will be Anounced Soon
              </div>
              </div>
              <div class="mt-4 text-left text-xs">
                <p class="font-light text-gray-900">
                  <b class="font-semibold">Note:</b> This event is invite only
                  event.<br /> Entry is allowed based on invites.<br
                  />Registration won’t guarantee access to the event.
                </p>
              </div>
              <div class="mt-4 text-left text-sm">
                <p class="font-light text-gray-900">
                  <b class="font-semibold">Event info:</b>
                </p>
                <ul class="font-light">
                  <li>
                    Day 1 - 25th November - TBA
                  </li>
                  <li>Day 2 - 26th November - TBA</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>
