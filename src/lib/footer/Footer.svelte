<script lang="ts">
  const footerMenus = [
    { name: 'Twitter', href: '#', icon: 'twitter' },
    { name: 'Facebook', href: '#', icon: 'facebook' },
    { name: 'Instagram', href: '#', icon: 'instagram' },
    { name: 'Youtube', href: '#', icon: 'youtube' },
    { name: 'Linkedin', href: '#', icon: 'linkedin' },
    { name: 'Github', href: '#', icon: 'github' }
  ];
</script>

<footer class="bg-white">
  <div
    class="mx-auto max-w-7xl overflow-hidden py-12 px-4 sm:px-6 lg:px-8 mb-9"
  >
    <nav class="-mx-5 -my-2 flex flex-wrap justify-center" aria-label="Footer">
      {#each footerMenus as item}
        <div class="px-5 py-2">
          <a
            href={item.href}
            class="text-base text-gray-500 hover:text-gray-900"
          >
            {item.name}
          </a>
        </div>
      {/each}
    </nav>

    <p class="mt-8 text-center text-base text-gray-400">
      &copy; 2022 GDG Chennai, Inc. All rights reserved.
    </p>
  </div>
</footer>
