/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.ts",
    "./**/*.html",
    "./node_modules/flowbite/**/*.js"
  ],
  theme: {
    extend: {},
  },
  plugins: [
    require('flowbite/plugin')
  ],
}
