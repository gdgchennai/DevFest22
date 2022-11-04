<script lang="ts">
  export let session: string = '';
  export let speaker: string = '';
  export let startTime: string = '';
  export let endTime: string = '';
  let ariaLabel = `${session} by ${speaker} from ${startTime} to ${endTime}`;
</script>

<div aria-label={ariaLabel}>
  <div class="mx-auto mb-8 h-px w-48 bg-indigo-500/10" />
  <h4 class="text-lg font-semibold tracking-tight text-gray-900">
    {session}
  </h4>
  <p class="mt-1 tracking-tight text-gray-500">{speaker}</p>
  <p class="mt-1 font-mono text-sm text-gray-500">
    <time datetime="2022-04-04T9:00AM-08:00">{startTime}</time>
    <!-- -->-<!-- -->
    <time datetime="2022-04-04T10:00AM-08:00">{endTime}</time>
    <!-- -->IST
  </p>
</div>
