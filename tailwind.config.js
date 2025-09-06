/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx,ts,tsx}"],
  darkMode: "class",
 safelist: [
    'bg-hero-mobile',
    'bg-hero-desktop',
    'sm:bg-hero-desktop'
  ],
  theme: {
    extend: {
      screens: {
      xs: "480px", // or whatever value you want
    },
      fontFamily: {
        poppins: ["Poppins", "sans-serif"],
      },
    },
  },

  plugins: [],
}
