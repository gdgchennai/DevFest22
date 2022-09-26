<script lang="ts">
  import Icon from '$lib/icon/Icon.svelte';

  const includedFeatures = [
    'Private forum access',
    'Exciting sessions',
    'Networking opportunities',
    'Official member t-shirt'
  ];
</script>

<section
  id="tickets"
  class="flex flex-col items-center justify-start space-y-6"
>
  <div class="bg-gray-100">
    <div class="pt-12 sm:pt-16 lg:pt-20">
      <div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div class="text-center">
          <h2
            class="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl lg:text-5xl"
          >
            You won't get a better conference than this!
          </h2>
          <p class="mt-4  sm:text-xl text-gray-600">
            If you're not satisfied, contact us within the first 14 days and
            we'll send you a full refund.
          </p>
        </div>
      </div>
    </div>
    <div class="mt-8 bg-white pb-16 sm:mt-12 sm:pb-20 lg:pb-28">
      <div class="relative">
        <div class="absolute inset-0 h-1/2 bg-gray-100" />
        <div class="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div
            class="mx-auto max-w-lg overflow-hidden rounded-lg shadow-lg lg:flex lg:max-w-none"
          >
            <div class="flex-1 bg-white px-6 py-8 lg:p-12">
              <h3
                class="text-2xl font-bold text-gray-900 sm:text-3xl sm:tracking-tight"
              >
                Devfest 2022
              </h3>
              <p class="mt-6 text-base text-gray-500">
                Come. Learn, Network and Celebrate with Google Developer Groups
                and Google Developer Experts, learn to hack on Android, Chrome
                and Web while you are at it.
              </p>
              <div class="mt-8">
                <div class="flex items-center">
                  <h4
                    class="flex-shrink-0 bg-white pr-4 text-base font-semibold text-indigo-600"
                  >
                    What's included
                  </h4>
                  <div class="flex-1 border-t-2 border-gray-200" />
                </div>
                <ul
                  role="list"
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
                Pay once, own it forever
              </p>
              <div
                class="mt-4 flex items-center justify-center text-5xl font-bold tracking-tight text-gray-900"
              >
                <span>₹150</span>
                <span
                  class="ml-3 text-xl font-medium tracking-normal text-gray-500"
                  >INR</span
                >
              </div>
              <p class="mt-4 text-sm">
                <a href="#" class="font-medium text-gray-500 underline">
                  Learn about our membership policy
                </a>
              </p>
              <div class="mt-6">
                <div class="rounded-md shadow">
                  <a
                    href="#"
                    class="flex items-center justify-center rounded-md border border-transparent bg-gray-800 px-5 py-3 text-base font-medium text-white hover:bg-gray-900"
                  >
                    Get Access to event
                  </a>
                </div>
              </div>
              <div class="mt-4 text-sm">
                <a href="#" class="font-medium text-gray-900">
                  Checkout agenda <span class="font-normal text-gray-500"
                    >(20MB)</span
                  >
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>
