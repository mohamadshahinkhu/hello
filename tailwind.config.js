/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}", "./node_modules/flowbite/**/*.js"],
   plugins: [require("daisyui"),require('flowbite/plugin')],
  theme: {
    extend: {},
  },
  plugins: [],
}
