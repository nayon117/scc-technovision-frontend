/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "first":"#008000",
        "second":"#70e000",
        "third":"#edf6f9",
      } 
    },
  },
  plugins: [require("daisyui")],
}

