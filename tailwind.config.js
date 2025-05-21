// /** @type {import('tailwindcss').Config} */
// module.exports = {
//   content: ['./src/**/*.{html,js,vue}'],
//   theme: {
//     extend: {},
//   },
//   plugins: [],
//
// }

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        custom: ['Quicksand', 'sans-serif'],
      },
    },
  },
  plugins: [],
  // Remove the prefix unless you specifically need it
  prefix: 'tw-',
  corePlugins: {
    preflight: false, // Disable if conflicting with Quasar styles
  },
}
