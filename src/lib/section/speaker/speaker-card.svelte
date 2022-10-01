<script lang="ts">
export let name: string;
export let imageUrl: string;
export let designation: string;
export let platform1: string;
export let platform2: string;
export let platform3: string;
</script>

<div class="max-w-sm rounded-3xl overflow-hidden shadow-lg text-center py-10">
  <img class="w-full" src="{imageUrl}" alt="Avatar">
  <div class="px-6 py-4">
    <div class="font-bold text-xl mb-2">{name}</div>
    <p class="text-gray-700 text-base">
      {designation}
    </p>
  </div>
  <div class="px-6 pt-4 pb-2">
    <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">{platform1}</span>
    <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">{platform2}</span>
    <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">{platform3}</span>
  </div>
</div>