<script lang="ts">
  import { closeModal } from 'svelte-modals';

  export let isOpen: boolean;
  export let title: string;

  let closeButton =
    'px-6 py-2.5 bg-red-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md\n' +
    ' hover:bg-red-700 hover:shadow-lg focus:bg-red-700 focus:shadow-lg focus:outline-none focus:ring-0\n' +
    ' active:bg-red-800 active:shadow-lg transition duration-150 ease-in-out';
</script>

{#if isOpen}
  <div
    role="dialog"
    class="modal fade fixed top-0 left-0 z-50 hidden h-full w-full items-center justify-center overflow-y-auto overflow-x-hidden outline-none"
    tabindex="-1"
    aria-hidden="true"
  >
    <div class="modal-dialog pointer-events-none relative flex w-auto p-8">
      <div
        class="modal-content pointer-events-auto relative flex flex-col rounded-md border-none bg-white bg-clip-padding text-current shadow-lg outline-none"
      >
        <div
          class="modal-header flex flex-shrink-0 items-center justify-between rounded-t-md border-b border-gray-200 p-4"
        >
          <h5 class="text-xl font-medium leading-normal text-gray-800">
            {title}
          </h5>
          <button
            type="button"
            class="btn-close box-content h-4 w-4 rounded-none border-none p-1 text-black opacity-50 hover:text-black hover:no-underline hover:opacity-75 focus:opacity-100 focus:shadow-none focus:outline-none"
            data-bs-dismiss="modal"
            aria-label="Close"
          />
        </div>
        <div class="modal-body relative p-4">
          <p>
            Thank you for showing your interest in DevFest2023, Chennai. We are
            very happy, eager and equally excited to see you all during the event.<br />
            We are also equally sad if you did not receive a confirmed invite
            from us. This could only mean that we've reached our maximum occupancy
            for the venue and as much as we want to have room for all of you, it
            just couldn't happen. <br />
            Hopefully a success in this event will help us grow our capacity to take in as many of you as possible for future devfest events!<br /><br />
            Going to miss the amazing tech talks from our speakers? Worry not, we've got you covered with our Youtube Livestream for <a class="font-medium text-blue-500" href="https://www.youtube.com/watch?v=coFbkjbuMdA">Track 1</a> and <a class="font-medium text-blue-500" href="https://www.youtube.com/watch?v=B0SC-IzK0PQ">Track 2</a>
          </p>
        </div>
        <div
          class="modal-footer flex flex-shrink-0 flex-wrap items-center justify-end rounded-b-md border-t border-gray-200 p-4"
        >
          <button
            type="button"
            class={closeButton}
            on:click={closeModal}
            data-bs-dismiss="modal"><i class="fa fa-close mx-2" />Close</button
          >
        </div>
      </div>
    </div>
  </div>
{/if}

<style>
  .modal {
    display: flex;
  }
</style>
