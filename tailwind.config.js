/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,jsx}"],
  theme: {
    extend: {
      
      display: ["group-hover"],

      colors: {
        'cBlack' : '#000000',
        'cGray' : '#121212',
        'cFirst' : '#eab308',
        'cSecond' : '#9ca3af'

      },
  
    },
  },
  plugins: [],
}
