<script lang="ts">
  import Button from '$lib/button/Button.svelte';
  import Icon from '$lib/icon/Icon.svelte';
  import Modal from '$lib/modal/Modal.svelte';
  import { openModal } from 'svelte-modals';

  function handleClick() {
    openModal(Modal, {title: "Get your ticket"})
  }

  const includedFeatures = [
    'Scrumptious food',
    'Exciting sessions',
    'Networking opportunities',
    'Take home cool swags',
    'Chance to take part in fun activities',
    'Acquire new knowledge'
  ];
</script>

<section
  id="tickets"
  class="flex flex-col items-center justify-start space-y-6"
>
  <div class="bg-white">
    <div class="pt-12 sm:pt-16 lg:pt-20">
      <div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div class="text-center">
          <h2
            class="text-3xl font-bold tracking-tight sm:text-4xl lg:text-5xl text-black"
          >
            You won't get a better conference than this!
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
            <div
              class="flex-1 px-6 py-8 lg:p-12 border border-gray-50"
            >
              <div
                class="absolute -bottom-4 right-3 flex h-8 w-full overflow-hidden items-center justify-center animate-pulse"
              >
                <div class="flex -mb-px h-[2px] w-80 -scale-x-100">
                  <div
                    class="w-full flex-none blur-sm [background-image:linear-gradient(90deg,rgba(56,189,248,0)_0%,#0EA5E9_32.29%,rgba(236,72,153,0.3)_67.19%,rgba(236,72,153,0)_100%)]"
                  />
                  <div
                    class="-ml-[100%] w-full flex-none blur-[1px] [background-image:linear-gradient(90deg,rgba(56,189,248,0)_0%,#0EA5E9_32.29%,rgba(236,72,153,0.3)_67.19%,rgba(236,72,153,0)_100%)]"
                  />
                </div>
              </div>
              <h3
                class="md:text-4xl font-bold text-gray-900 sm:text-2xl sm:tracking-tight"
              >
                DevFest 2022
              </h3>
              <p class="mt-6 text-base text-gray-500">
                Come. Learn, Network and Celebrate with Google Developer Groups
                and Google Developer Experts, learn to hack on Android, Chrome
                and Web while you are at it.
              </p>
              <div class="mt-8">
                <div class="flex items-center">
                  <h4
                    class="flex-shrink-0 pr-4 text-base font-semibold text-gray-900"
                  >
                    What's included
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
              <p class="text-lg font-medium leading-6 text-gray-900">
                Slots filling fast, Book your spot now!
              </p>
              <div
                class="mt-4 flex items-center justify-center text-5xl font-bold tracking-tight text-gray-900"
              >
                <span
                  class="ml-3 text-xl font-medium tracking-normal text-gray-500"
                  >ITS</span
                >
                <span>FREE</span>
              </div>
              <div class="mt-6">
                <Button
                  id="button-get-ticket"
                  title="Get your tickets"
                  isSecondaryButton={false}
                  onClick={() => handleClick()} >
                  <Icon width="20" height="20" name="ticket" />
                </Button>
              </div>
              <!-- <div class="mt-4 text-sm">
                <a href="/" class="font-medium text-gray-900">
                  Checkout agenda <span class="font-normal text-gray-500"
                    >(20MB)</span
                  >
                </a>
              </div> -->
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>
