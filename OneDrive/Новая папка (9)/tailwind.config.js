/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
      "./*.html",
      "./src/**/*.{html,js}",
    ],
    theme: {
      extend: {
        screens: {
          'custom': '725px',
        },
      },
    },
    plugins: [],
  }