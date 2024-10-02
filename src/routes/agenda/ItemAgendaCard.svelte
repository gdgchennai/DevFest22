<script lang="ts">
  export let session: string = '';
  export let name: string = '';
  export let imageUrls: string[] = [];
  export let showImage: boolean = false;
  export let showMultipleImage: boolean = false;
  export let time: string = '';
</script>

<div class="single_speaker">
  <div class="flex lg:pl-8">
    {#if showImage}
      {#if showMultipleImage}
        {#each imageUrls as imageUrl (imageUrl)}
          <img
            class="h-16 w-16 rounded-3xl sm:h-24 sm:w-24"
            src={imageUrl}
            alt={name}
          />
        {/each}
      {:else if imageUrls.length > 0}
        <img
          class="h-16 w-16 rounded-3xl sm:h-24 sm:w-24"
          src={imageUrls[0]}
          alt={name}
        />
      {/if}
    {/if}
  </div>
  <div class="speaker-name">
    <div class="heading flex items-center justify-between">
      <span>{session}</span>
      <div class="time">{time}</div>
    </div>
    <p>{name}</p>
  </div>
</div>

<style>
  .single_speaker {
    margin-bottom: 63px;
  }

  @media (max-width: 767px) {
    .single_speaker {
      margin-bottom: 30px;
    }
  }

  .single_speaker img {
    float: left;
    margin-right: 0.5rem;
  }

  @media (max-width: 767px) {
    .single_speaker img {
      float: none;
    }
  }

  .single_speaker .speaker-name {
    padding-left: 30px;
    overflow: hidden;
  }

  @media (max-width: 767px) {
    .single_speaker .speaker-name {
      padding-left: 0;
      margin-top: 20px;
    }
  }

  .single_speaker .speaker-name .heading {
    margin-bottom: 5px;
  }

  .single_speaker .speaker-name .heading span {
    font-size: 26px;
    color: #1f1f1f;
    font-weight: 500;
  }

  @media (max-width: 767px) {
    .single_speaker .speaker-name .heading span {
      font-size: 18px;
      color: #1f1f1f;
      font-weight: 500;
    }
  }

  .single_speaker .speaker-name .heading .time {
    font-size: 16px;
    font-weight: 500;
    color: #1f1f1f;
  }

  .single_speaker p {
    color: #707070;
    font-size: 16px;
    line-height: 28px;
  }
</style>
