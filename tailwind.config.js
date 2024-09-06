/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,jsx}"],
  theme: {
    extend: {
      inset: {
        '-30': '-30px',
        '-54': '-54px',
      },
    },
  },
  plugins: [],
}