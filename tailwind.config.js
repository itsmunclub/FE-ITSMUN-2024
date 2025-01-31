/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      height: {
        '4/7': '57.142857%', // 4 / 7 as a percentage
        '3/7': '42.857143%', // 3 / 7 as a percentage
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors: {
        MUN: {
          burntSienna: "#DD704F",
          solidPink: "#8D314D",
          steelTeal: "#597F8E",
          englishViolet: "#53405F",
          deepChampagne: "#F7D0A2",
          "burntSienna-100": "#EE8F72",
          "solidPink-100": "#BB466A",
          "steelTeal-100": "#7AABBF",
          "englishViolet-100": "#7E5F92",
          "deepChampagne-100": "#E6D1BF",
          darkForest: "#004244",
          beigeBanner: "#E7DEC3",
          UCLAGold: "#FFB600",
          Persimmon: "#ED560A",
          bananaYellow: "#FCD63A",
          Fulvous: "#E99100",
          Corn: "#FBE665",
          vanDykeBrown: "#603B28",
          desertSand: "#EBCE9E",
          darkVanilla: "#D7C1AE",
          darkOrchid: "#8C28CB",
          Crayola: "#FCD265",
          "sidebar-linen": "#F9F0E0",
          "bg-light": "#F3E1D1",
          "bg-beige-dark": "#CFAF92",
          "bg-purple-dark": "#403149",
        },
      },
      screens: {
        '2sm': { 'min': '400px'},
        'max-2sm': { 'max': '400px'},
        'max-sm': { 'max': '640px' },
        'max-md': { 'max': '768px' },
        'max-lg': { 'max': '1024px' },
        'max-2lg': { 'max': '1023px' },
        'max-xl': { 'max': '1280px' },
        'xxl': { 'min': '1300px'},
        'max-2xl': { 'max': '1536px'},
      },
      fontFamily: {
        spritz: ['SpritzAndDelicious'],
        monolisa: ['MonoLisa'],
        monolisabold: ['MonoLisaBold'],
        montserrat: ['var(--font-montserrat)', 'sans-serif'],
        inter: ['var(--font-inter)', 'sans-serif'],
        frankRuhlLibre: ['var(--font-frank-ruhl-libre)', 'serif'],
      },
      animation: {
        'infinite-scroll-left': 'infinite-scroll-left 20s linear infinite',
        'infinite-scroll-right': 'infinite-scroll-right 20s linear infinite',
      },
      keyframes: {
        'infinite-scroll-left': {
          "0%": { transform: "translateX(0)" },
          "100%": { transform: "translateX(calc(-50% - 20px))" },
        },
        'infinite-scroll-right': {
          "0%": { transform: "translateX(calc(-50% - 10px))" },
          "100%": { transform: "translateX(0)" },
        },
      },
      rotate: {
        '18.6': '18.6deg',
        'min-15.4': '-15.4deg',
      },
    },
  },
  plugins: [
    require('tailwindcss-text-stroke'),
    require('@tailwindcss/typography'),
  ],
};
