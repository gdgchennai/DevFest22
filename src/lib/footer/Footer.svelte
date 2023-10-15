<script lang="ts">
  const footerMenus = [
    {
      href: 'https://twitter.com/GDGChennai',
      icon: 'fa fa-twitter',
      class: 'btn twitter'
    },
    {
      href: 'https://discord.com/invite/UQmbKjjgeb',
      icon: 'fa fa-discord',
      class: 'btn discord'
    },
    {
      href: 'https://instagram.com/gdgchennai',
      icon: 'fa fa-instagram',
      class: 'btn instagram'
    },
    {
      href: 'https://www.youtube.com/c/GDGCHENNAICOMMUNITY',
      icon: 'fa fa-youtube',
      class: 'btn youtube'
    },
    {
      href: 'https://www.linkedin.com/company/gdgchennai',
      icon: 'fa fa-linkedin',
      class: 'btn linkedin'
    },
    {
      href: 'https://gdg.community.dev/gdg-chennai',
      icon: 'fa fa-users',
      class: 'btn users'
    }
  ];
</script>

<footer>
  <div
    class="mx-auto max-w-7xl overflow-hidden py-12 px-4 sm:px-6 lg:px-8 mb-9"
  >
    <p class="text-center text-gray-400 mb-4 text-lg font-medium">
      Connect with us
    </p>

    <nav class="flex flex-wrap justify-center" aria-label="Footer">
      {#each footerMenus as item}
        <div class="social-btns">
          <a href={item.href} class="{item.class}" target="_blank">
            <i class="{item.icon}" />
          </a>
        </div>
      {/each}
    </nav>

    <p class="mt-8 text-center text-base text-gray-400">
      &copy; 2023 GDG Chennai. All rights reserved.
    </p>
  </div>
</footer>

<style lang="css">
  .social-btns .btn,
  .social-btns .btn:before,
  .social-btns .btn .fa {
    transition: all 0.35s;
    transition-timing-function: cubic-bezier(0.31, -0.105, 0.43, 1.59);
  }
  .social-btns .btn:before {
    top: 90%;
    left: -110%;
  }
  .social-btns .btn .fa {
    transform: scale(0.8);
  }
  .social-btns .btn.discord:before {
    background-color: #5865F2;
  }
  .social-btns .btn.discord .fa {
    color: #5865F2;
  }
  .social-btns .btn.twitter:before {
    background-color: #3cf;
  }
  .social-btns .btn.twitter .fa {
    color: #3cf;
  }
  .social-btns .btn.youtube:before {
    background-color: #dc4a38;
  }
  .social-btns .btn.youtube .fa {
    color: #dc4a38;
  }
  .social-btns .btn.instagram:before {
    background-color: #8a3ab9;
  }
  .social-btns .btn.instagram .fa {
    color: #8a3ab9;
  }
  .social-btns .btn.linkedin:before {
    background-color: #0072b1;
  }
  .social-btns .btn.linkedin .fa {
    color: #0072b1;
  }
  .social-btns .btn.users:before {
    background-color: #000000;
  }
  .social-btns .btn.users .fa {
    color: #000000;
  }
  .social-btns .btn:focus:before,
  .social-btns .btn:hover:before {
    top: -10%;
    left: -10%;
  }
  .social-btns .btn:focus .fa,
  .social-btns .btn:hover .fa {
    color: #fff;
    transform: scale(1);
  }
  .social-btns {
    height: 90px;
    font-size: 0;
    text-align: center;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
  }
  .social-btns .btn {
    display: inline-block;
    background-color: #fff;
    width: 70px;
    height: 70px;
    line-height: 70px;
    margin: 0 10px;
    text-align: center;
    position: relative;
    overflow: hidden;
    border-radius: 28%;
    box-shadow: 0 5px 15px -5px rgba(0, 0, 0, 0.1);
    opacity: 0.99;
  }
  .social-btns .btn:before {
    content: '';
    width: 120%;
    height: 120%;
    position: absolute;
    transform: rotate(45deg);
  }
  .social-btns .btn .fa {
    font-size: 38px;
    vertical-align: middle;
  }

  @media only screen and (max-width: 600px) {
    .social-btns .btn {
      width: 40px;
      height: 40px;
      line-height: 40px;
    }
  }
</style>
