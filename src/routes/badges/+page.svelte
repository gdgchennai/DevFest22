<script lang="ts">
  import { toPng } from 'html-to-image';
  import download from 'downloadjs';
  import Icon from '$lib/icon/Icon.svelte';
  import ImageUpload from '$lib/imageupload/ImageUpload.svelte';

  let imageXPosition: number = 0;
  let imageYPosition: number = 0;
  let imageZoomLevel: number = 1;
  let imageShape: boolean = false;
  let reset: boolean = false;
  let fileinput: any = null;

  async function downloadImage() {
    //it converts the div to image and downloads it
    const node = document.getElementById('avatar-frame') as HTMLElement;
    toPng(node)
      .then(function (dataUrl) {
        download(dataUrl, 'Chennai-DevFest2022-Badge.png');
      })
      .catch(function (error) {
        console.error('oops, something went wrong!', error);
      });
  }

  function resetImage() {
    imageXPosition = 0;
    imageYPosition = 0;
    imageZoomLevel = 1;
    imageShape = false;
    reset = !reset;
  }
</script>

<main class="w-full flex flex-col sm:flex-row overflow-hidden min-h-screen">
  <section
    aria-labelledby="primary-heading"
    class="flex min-w-0 w-full flex-col h-[600px] sm:min-h-screen sm:flex-1 overflow-y-auto lg:order-last bg-slate-50 items-center justify-center sticky top-0"
  >
    <ImageUpload
      {fileinput}
      {imageXPosition}
      {imageYPosition}
      {imageZoomLevel}
      {imageShape}
    />
  </section>

  <aside
    class="lg:order-first lg:block lg:flex-shrink-0 bg-red-50 h-screen sticky top-0"
  >
    <div
      class="flex h-full w-96 flex-col overflow-y-auto border-r border-gray-200 bg-white px-8"
    >
      <!-- // Image shape settings -->
      <div class="space-y-3 mt-8 flex flex-col">
        <h1 class="text-2xl font-bold">DevFest Badge Generator</h1>

        <div class="flex flex-col space-y-3 py-8">
          <label>Image shape</label>
          <span class="isolate inline-flex rounded-md">
            <button
              type="button"
              on:click={() => (imageShape = false)}
              class="relative inline-flex items-center rounded-l-md border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-50 focus:z-10 focus:border-black focus:outline-none focus:ring-1 focus:ring-black"
            >
              Square
            </button>

            <button
              type="button"
              on:click={() => (imageShape = true)}
              class="relative -ml-px inline-flex items-center rounded-r-md border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-50 focus:z-10 focus:border-black focus:outline-none focus:ring-1 focus:ring-black"
            >
              Circle
            </button>
          </span>
        </div>
      </div>

      <!-- // Image X position -->
      <div class="space-y-3 mt-8">
        <label for="default-range" class="block mb-2">Image X position</label>
        <input
          id="x-range"
          type="range"
          min="-200"
          max="200"
          bind:value={imageXPosition}
          class="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer"
        />
      </div>

      <!-- // Image Y position -->
      <div class="space-y-3 mt-8">
        <label for="default-range" class="block mb-2">Image Y position</label>
        <input
          id="y-range"
          type="range"
          bind:value={imageYPosition}
          min="-200"
          max="200"
          class="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer"
        />
      </div>

      <!-- // Image Zoom position -->
      <div class="space-y-3 mt-8">
        <label for="default-range" class="block mb-2">Image Zoom level</label>
        <input
          id="zoom-range"
          type="range"
          bind:value={imageZoomLevel}
          min="1"
          max="200"
          class="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer"
        />
      </div>

      <div class="flex flex-col space-y-3">
        <button
          id="button-download-image"
          type="button"
          on:click={() => downloadImage()}
          class="w-full inline-flex items-center justify-center rounded-lg border border-transparent bg-black px-4 py-2 text-base font-medium text-white shadow-sm hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-gray-500 focus:ring-offset-2 mt-8"
        >
          <Icon width="20" height="20" name="download" />
          <span class="ml-2">Download image</span>
        </button>

        <button
          id="button-download-image"
          type="button"
          on:click={() => resetImage()}
          class="w-full inline-flex justify-center items-center rounded-lg border bg-white border-gray-200 px-4 py-2 text-base font-medium text-gray-900 shadow-sm hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-500 focus:ring-offset-2"
        >
          <Icon width="20" height="20" name="reset" />
          <span class="ml-2">Reset settings</span>
        </button>
      </div>
    </div>
  </aside>
</main>
