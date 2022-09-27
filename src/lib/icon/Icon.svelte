<script lang="ts">
  export let name: IconType;
  export let width: string;
  export let height: string;

  type IconType = keyof typeof icons;

  const icons = {
    ticket: {
      box: 24,
      svg: `<svg width="24" height="24" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M2 6C2 5.46957 2.21071 4.96086 2.58579 4.58579C2.96086 4.21071 3.46957 4 4 4H16C16.5304 4 17.0391 4.21071 17.4142 4.58579C17.7893 4.96086 18 5.46957 18 6V8C17.4696 8 16.9609 8.21071 16.5858 8.58579C16.2107 8.96086 16 9.46957 16 10C16 10.5304 16.2107 11.0391 16.5858 11.4142C16.9609 11.7893 17.4696 12 18 12V14C18 14.5304 17.7893 15.0391 17.4142 15.4142C17.0391 15.7893 16.5304 16 16 16H4C3.46957 16 2.96086 15.7893 2.58579 15.4142C2.21071 15.0391 2 14.5304 2 14V12C2.53043 12 3.03914 11.7893 3.41421 11.4142C3.78929 11.0391 4 10.5304 4 10C4 9.46957 3.78929 8.96086 3.41421 8.58579C3.03914 8.21071 2.53043 8 2 8V6Z" fill="white"/></svg>`
    },
    video: {
      box: 24,
      svg: `<svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M10 18C12.1217 18 14.1566 17.1571 15.6569 15.6569C17.1571 14.1566 18 12.1217 18 10C18 7.87827 17.1571 5.84344 15.6569 4.34315C14.1566 2.84285 12.1217 2 10 2C7.87827 2 5.84344 2.84285 4.34315 4.34315C2.84285 5.84344 2 7.87827 2 10C2 12.1217 2.84285 14.1566 4.34315 15.6569C5.84344 17.1571 7.87827 18 10 18ZM9.555 7.168C9.4044 7.06752 9.22935 7.00981 9.04852 7.00103C8.86769 6.99224 8.68786 7.03272 8.52823 7.11813C8.3686 7.20354 8.23516 7.33068 8.14213 7.48599C8.04909 7.6413 7.99997 7.81896 8 8V12C7.99997 12.181 8.04909 12.3587 8.14213 12.514C8.23516 12.6693 8.3686 12.7965 8.52823 12.8819C8.68786 12.9673 8.86769 13.0078 9.04852 12.999C9.22935 12.9902 9.4044 12.9325 9.555 12.832L12.555 10.832C12.692 10.7407 12.8043 10.617 12.8819 10.4718C12.9596 10.3267 13.0002 10.1646 13.0002 10C13.0002 9.83539 12.9596 9.67332 12.8819 9.52818C12.8043 9.38304 12.692 9.25932 12.555 9.168L9.555 7.168Z" fill="#111827"/></svg>`
    },
    arrowup: {
      box: 24,
      svg: `<svg class="w-6 h-6" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-8.707l-3-3a1 1 0 00-1.414 0l-3 3a1 1 0 001.414 1.414L9 9.414V13a1 1 0 102 0V9.414l1.293 1.293a1 1 0 001.414-1.414z" clip-rule="evenodd"></path></svg>`
    },

    check: {
      box: 24,
      svg: `<svg class="w-6 h-6" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"></path></svg>`
    },
    chevrondown: {
      box: 24,
      svg: `<svg class="w-6 h-6" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>`
    },
    chevronup: {
      box: 24,
      svg: `<svg class="w-6 h-6" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M14.707 12.707a1 1 0 01-1.414 0L10 9.414l-3.293 3.293a1 1 0 01-1.414-1.414l4-4a1 1 0 011.414 0l4 4a1 1 0 010 1.414z" clip-rule="evenodd"></path></svg>`
    }
  };

  const icon = icons[name];
</script>

<svg
  class={$$props.class}
  {width}
  {height}
  viewBox="0 0 {icon.box} {icon.box}"
  fill="none"
  stroke="currentColor"
  >{@html icon.svg}
</svg>
