<script lang="ts">
  let avatar: any;
  export let fileinput: any;
  export let imageXPosition: number = 0;
  export let imageYPosition: number = 0;
  export let imageZoomLevel: number = 0;
  export let imageShape: boolean = true;
  export let frameSelector: string = "attendee";

  const onFileSelected = (
    e: Event & { currentTarget: EventTarget & HTMLInputElement }
  ) => {
    let image = e?.target?.files[0] as File;
    let reader = new FileReader();
    reader.readAsDataURL(image);
    reader.onload = (e) => {
      avatar = e?.target?.result;
    };
  };
</script>

{#if avatar}
  <div
    id="avatar-frame"
    class="display inline-block relative overflow-hidden rounded-md"
    style="width: 500px; height: 500px; border-radius: {imageShape
      ? '500'
      : '0'}px;"
  >
    <img
      class="avatar absolute"
      src={avatar}
      alt="d"
      style={`transform: scale(${
        imageZoomLevel / 4
      }); left: ${imageXPosition}px; top: ${imageYPosition}px;`}
    />

    
      {#if frameSelector === "attendee"}
          <img
            class="avatar absolute"
              src={imageShape ? '/frame-attendee-circle.png' : '/frame-attendee.png'} alt="Attendee"
              style={`max-width: 500px; max-height: 500px; object-fit: cover;`}
            />
        {:else if frameSelector === "speaker"}
          <img
            class="avatar absolute"
              src={imageShape ? '/frame-speaker-circle.png' : '/frame-speaker.png'} alt="Attendee"
              style={`max-width: 500px; max-height: 500px; object-fit: cover;`}
            />
        {:else if frameSelector === "organizer"}
          <img
            class="avatar absolute"
              src={imageShape ? '/frame-organizer-circle.png' : '/frame-organizer.png'} alt="Attendee"
              style={`max-width: 500px; max-height: 500px; object-fit: cover;`}
            />
        {:else}
          <img
            class="avatar absolute"
              src={imageShape ? '/frame-attendee-circle.png' : '/frame-attendee.png'} alt="Attendee"
              style={`max-width: 500px; max-height: 500px; object-fit: cover;`}
            />
        {/if}
        
        
      
  </div>
{:else}
  <div class="sm:grid sm:grid-cols-3 sm:items-start sm:gap-4 sm:pt-5">
    <div class="mt-1 sm:col-span-2 sm:mt-0">
      <div
        class="flex max-w-lg justify-center rounded-md px-6 pt-5 pb-6"
      >
        <div class="space-y-1 text-center">
          <svg
            class="mx-auto h-12 w-12 text-gray-400"
            stroke="currentColor"
            fill="none"
            viewBox="0 0 48 48"
            aria-hidden="true"
          >
            <path
              d="M28 8H12a4 4 0 00-4 4v20m32-12v8m0 0v8a4 4 0 01-4 4H12a4 4 0 01-4-4v-4m32-4l-3.172-3.172a4 4 0 00-5.656 0L28 28M8 32l9.172-9.172a4 4 0 015.656 0L28 28m0 0l4 4m4-24h8m-4-4v8m-12 4h.02"
              stroke-width={2}
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>
          <div class="flex text-sm text-gray-600">
            <label
              htmlFor="file-upload"
              class="relative cursor-pointer rounded-md bg-white font-medium text-indigo-600 focus-within:outline-none focus-within:ring-2 focus-within:ring-indigo-500 focus-within:ring-offset-2 hover:text-indigo-500"
            >
              <span>Upload a file</span>
              <input
                id="file-upload"
                name="file-upload"
                type="file"
                accept=".jpg, .jpeg, .png"
                class="sr-only"
                on:change={(e) => onFileSelected(e)}
                bind:this={fileinput}
              />
            </label>
            <p class="pl-1">or drag and drop</p>
          </div>
          <p class="text-xs text-gray-500">PNG, JPG, JPEG up to 10MB</p>
        </div>
      </div>
    </div>
  </div>
{/if}
