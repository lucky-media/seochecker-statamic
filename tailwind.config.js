/** @type {import('tailwindcss').Config} */
module.exports = {
  prefix: 'sp-',
  content: [
      './resources/js/**/*.{html,js,vue,blade.php}',
      './resources/views/**/*.{html,js,vue,blade.php}',
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}

