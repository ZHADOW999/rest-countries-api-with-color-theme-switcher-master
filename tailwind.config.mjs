// import flowbite from "flowbite-react/tailwind";

// /** @type {import('tailwindcss').Config} */
// export default {
//   content: [
//     "./index.html",
//     "./src/**/*.{js,ts,jsx,tsx}",
//     ...flowbite.content(), // Spread the content array provided by Flowbite
//   ],
//   theme: {
//     extend: {
//       colors: {
//         "dark-mode-element": "var(--dark-mode-element)",
//         "dark-mode-bg": "var(--dark-mode-bg)",
//         "light-mode-text": "var(--light-mode-text)",
//         "light-mode-input": "var(--light-mode-input)",
//         "light-mode-bg": "var(--light-mode-bg)",
//         "dark-mode-text": "var(--dark-mode-text)",
//         "light-mode-element": "var(--light-mode-element)",
//       },
//       fontFamily: {
//         "Ns-condensed": "Ns-condensed",
//         "Ns-light": "Ns-light",
//         "Ns-medium": "Ns-medium",
//         "Ns-regular": "Ns-regular",
//         "Ns-semibold": "Ns-semibold",
//         "Ns-bold": "Ns-bold",
//       },
//       boxShadow: {
//         "light-mode-shadow": "0px 0px 10px 0px rgba(0, 0, 0, 1)",
//       },
//       fontSize: {
//         xs: "0.75rem", // 12px
//         sm: "0.875rem", // 14px
//         base: "1rem", // 16px
//         lg: "1.125rem", // 18px
//         xl: "1.25rem", // 20px
//         "2xl": "1.5rem", // 24px
//         "3xl": "1.875rem", // 30px
//         "4xl": "2.25rem", // 36px
//         "5xl": "3rem", // 48px
//       },
//       screens: {
//         sm: "480px",
//         md: "768px",
//         lg: "976px",
//         xl: "1024px",
//         "2xl": "1250px",
//         "3xl": "1440px",
//       },
//     },
//   },
//   plugins: [
//     flowbite.plugin(), // Use the Flowbite plugin
//   ],

  
// };



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
        'Ns-condensed':'Ns-condensed',
        'Ns-light':'Ns-light',
        'Ns-medium':'Ns-medium',
        'Ns-regular':'Ns-regular',
        'Ns-semibold':'Ns-semibold',
        'Ns-bold':'Ns-bold'

      },
      boxShadow:{
        'light-mode-shadow':'0px 0px 10px 0px rgba(0, 0, 0, 1)'
      },
      fontSize:{
        'xs': '0.75rem',     // 12px
        'sm': '0.875rem',    // 14px
        'base': '1rem',      // 16px
        'lg': '1.125rem',    // 18px
        'xl': '1.25rem',     // 20px
        '2xl': '1.5rem',     // 24px
        '3xl': '1.875rem',   // 30px
        '4xl': '2.25rem',    // 36px
        '5xl': '3rem'        // 48px
      },
      screens:{
        'sm': '480px',
        'md': '768px',
        'lg': '976px',
        'xl': '1024px',
        '2xl':'1250px',
        '3xl':'1440px',
      },
    },
  },
  plugins: [
    flowbite.plugin(),

  ],
}

