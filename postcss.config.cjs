const tailwind = require('tailwindcss')
const autoprefixer = require('autoprefixer')
const nesting = require('@tailwindcss/nesting')

module.exports = {
  plugins: [
    nesting(),
    tailwind(),
    autoprefixer({
      overrideBrowserslist: [
        'last 4 Chrome versions',
        'last 4 Firefox versions',
        'last 4 Edge versions',
        'last 4 Safari versions',
        'last 4 Android versions',
        'last 4 ChromeAndroid versions',
        'last 4 FirefoxAndroid versions',
        'last 4 iOS versions',
      ],
    }),
  ],
}
