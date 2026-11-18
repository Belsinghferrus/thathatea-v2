/** @type {import('tailwindcss').Config} */
export default {
    content: [
      "./index.html",
      "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
      extend: {
        colors: {
          'deep-coffee': '#2C1810', // Primary BG / Text / CTA
          'roast-brown': '#4D2F1C', // Secondary Section Backgrounds
          'caramel': '#A76024',     // Accent CTA
          'warm-cream': '#F5DFC3',  // Primary Background
          'soft-ivory': '#F6EEDF',  // Cards / Support Background
        },
        fontFamily: {
          thunder: ['Thunder', 'sans-serif'], // Display / Main Heading
          allura: ['Allura', 'cursive'],      // Decorative / Script / Sub Heading
          mona: ['"Mona Sans"', 'sans-serif'],// Body Content / UI Typography
        },
        // We will add custom screen sizes here later for TV/Large screens
      },
    },
    plugins: [],
  }