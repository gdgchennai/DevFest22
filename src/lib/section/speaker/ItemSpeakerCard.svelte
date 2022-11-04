<script lang="ts">
  export let imageUrl: string = '';
  export let name: string = '';
  export let designation: string = '';
</script>

<div class="flex w-full flex-col items-center justify-center space-y-6">
  <img
    src={imageUrl}
    alt={name}
    class="max-w-xs w-auto rounded-3xl object-cover shadow-lg"
  />
  <div class="flex w-full flex-col items-center justify-center">
    <h5 class="w-full text-lg font-bold tracking-tight text-center">{name}</h5>
    <p class="w-full text-center">{designation}</p>
  </div>
</div>
