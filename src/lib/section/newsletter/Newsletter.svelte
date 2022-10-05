<script lang="ts">
  let name: string = '';
  let email: string = '';
</script>

<section
  id="newsletter"
  class="flex flex-col items-center justify-center"
>
  <div class="relative">
    <div class="flex">
      <div
        class="relative w-full flex overflow-hidden rounded-2xl bg-gradient-to-br from-blue-400 to-blue-600 px-6 py-10 shadow-xl sm:px-12 sm:py-20"
      >
        <div class="relative">
          <div class="sm:text-center">
            <h2
              class="text-3xl lg:text-5xl font-bold tracking-tight text-white sm:text-4xl text-center"
            >
              Get notified when we&rsquo;re launching.
            </h2>
            <p class="mx-auto mt-6 max-w-2xl text-lg text-gray-200 text-center">
              We&rsquo;re working hard to make this event even better. Sign up
              to get notified when we launch.
            </p>
          </div>
          <form
            action="https://send.pageclip.co/s2XDrRUZaJEeNwiAzMRd6ZnQKzk3mmgw/GDGChennai-Devfest"
            class="pageclip-form mt-12 sm:mx-auto sm:flex sm:max-w-lg flex flex-row items-center justify-center"
            method="post"
          >
            <div class="min-w-0 flex-1 space-y-3 flex-col md:flex-row">
              <label for="cta-name" class="sr-only">Full name</label>
              <input
                id="input-newsletter-name"
                type="text"
                class="w-full flex rounded-md border border-transparent px-5 py-2 text-base text-black placeholder-gray-500 shadow-sm focus:border-transparent focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-blue-600"
                placeholder="Enter your name"
                bind:value={name}
              />

              <label for="cta-email" class="sr-only">Email address</label>
              <input
                id="input-newsletter-email"
                type="email"
                class="flex w-full rounded-md border border-transparent px-5 py-2 text-base text-black placeholder-gray-500 shadow-sm focus:border-transparent focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-blue-600"
                placeholder="Enter your email"
                bind:value={email}
              />

              <button
                id="button-newsletter"
                type="button"
                class="pageclip-form__submit w-full inline-flex items-center justify-center rounded-lg border border-transparent bg-black px-4 py-2 text-base font-medium text-white shadow-sm hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-gray-500 focus:ring-offset-2"
              >
                <span>Notify Me</span>
              </button>

              <p class="mt-3 text-sm text-center md:text-center text-indigo-100">
                We care about the protection of your data. Read our{' '}
                <a href="/privacy" class="font-medium text-white underline">
                  Privacy Policy.
                </a>
              </p>
            </div>
          </form>
        </div>
      </div>
    </div>
  </div>
</section>
