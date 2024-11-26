const flowbite = require("flowbite-react/tailwind");

/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    flowbite.content(),

  ],
  theme: {
    extend: {
      colors:{
        "dark-mode-element":"var(--dark-mode-element)",
        "dark-mode-bg":"var(--dark-mode-bg)",
        "light-mode-text":"var(--light-mode-text)",
        "light-mode-input":"var(--light-mode-input)",
        "light-mode-bg":"var( --light-mode-bg)",
        "dark-mode-text":"var(--dark-mode-text)",
        "light-mode-element":"var(--light-mode-element)",
      },

      fontFamily:{
        'Ns-condense':'Ns-condense',
        'Ns-light':'Ns-light',
        'Ns-medium':'Ns-medium',
        'Ns-regular':'Ns-regular',
      }
    },
  },
  plugins: [
    flowbite.plugin(),

  ],
}

