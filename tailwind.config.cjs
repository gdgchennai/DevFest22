/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{html,js,svelte,ts}'],
  theme: {
    extend: {
      backgroundImage: {
        'noise-grain': "url('/noise-grain.png')"
      }
    }
  },
  plugins: []
};
