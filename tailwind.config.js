/** @type {import('tailwindcss').Config} */

const defaultTheme = require('tailwindcss/defaultTheme');

module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx}"
  ],
  theme: {
    extend:{
      fontFamily:{
        libre: ['"Libre Baskerville"', ...defaultTheme.fontFamily.sans],
        roboto: ['"Roboto Mono", monospace ', ...defaultTheme.fontFamily.sans],
        inconsolata: ["'Inconsolata', monospace",...defaultTheme.fontFamily.sans],
        Nanum: ["'Nanum Gothic',sans-serif", ...defaultTheme.fontFamily.sans],
        poppins: ["'Poppins', sans-serif", ...defaultTheme.fontFamily.sans],
        robotoSlab:["'Roboto Slab', serif",...defaultTheme.fontFamily.sans],
        Lora:["'Lora', serif",...defaultTheme.fontFamily.sans]
      },
      colors:{
        'comp-theme':'#fbc56f',
        'main-theme':'#2c6150'
      }
    },
    screens: {
      'sm':'480px',
      'md':'768px',
      'lg':'976px',
      'xl':'1440px'
    },
    animation: {
      fade: 'fadeOut 2s ease-in-out',
    },

    // that is actual animation
    keyframes: theme => ({
      fadeOut: {
        '0%': { opacity: 0},
        '100%': { opacity: 1},
      },
    }),
  },
  plugins: [],
}
