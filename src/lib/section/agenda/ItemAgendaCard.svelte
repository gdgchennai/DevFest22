<script lang="ts">
  export let session: string = '';
  export let name: string = '';
  export let imageUrl: string = '';
  export let imageUrl2: string = '';
  export let imageUrl3: string = '';
  export let showImage: boolean = false;
  export let showMultipleImage: boolean = false;
  export let time: string = '';
</script>

<div class="single_speaker">
  <div class="flex lg:pl-8">
  {#if showImage}
  <img
    class="h-24 w-24 rounded-3xl"
    src={imageUrl}
    alt={name}
  />
  {#if showMultipleImage}
  <img
    class="h-24 w-24 rounded-3xl"
    src={imageUrl2}
    alt={name}
  />
  <img
    class="h-24 w-24 rounded-3xl"
    src={imageUrl3}
    alt={name}
  />
  {/if}
  {/if}
  </div>
  <div class="speaker-name">
    <div class="heading flex items-center justify-between">
      <span>{name}</span>
      <div class="time">{time}</div>
    </div>
    <p>{session}</p>
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
