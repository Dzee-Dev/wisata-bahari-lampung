/** @type {import('tailwindcss').Config} */

export default {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      colors: {
        tropical: {
          green: '#2ecc71',
          blue: '#1abc9c',
          yellow: '#f1c40f',
          coral: '#e67e22',
        },
      },
      fontFamily: {
        pacifico: ['Pacifico', 'cursive'],
        poppins: ['Poppins', 'sans-serif'],
      },
    },
  },
  plugins: [],
}