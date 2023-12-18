const defaultTheme = require('tailwindcss/defaultTheme')

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        'gold': '#CDB450',
      },
      fontFamily:{
        sans:['Inter', ...defaultTheme.fontFamily.sans]
      },
      animation:{
        'fade-in': 'fade-in 0.5s linear forwards',
        marquee: 'marquee var(--marquee-duration) linear infinite',
        'spin-slow': 'spin 4s linear infinite',
        'spin-slower': 'spin 6s linear infinite',
        'spin-reverse': 'spin-reverse 1s linear infinite',
        'spin-reverse-slow': 'spin-reverse 42 linear infinite',
        'spin-reverse-slower': 'spin-reverse 6s linear infinite'
      },
      keyframes: {
        'fade-in': {
          from: {
            opacity: 0
          },
          to: {
            opacity: 1
          }
        },
        marquee: {
          '100%': {
            transform: 'translateY(-50%)',
          }
        },
        'spin-reverse': {
          to: {
            transform: "rotate(-360deg)",
          }
        }
      },
      colors: ({colors}) => ({
        gray: colors.neutral
      })
    },
  },
  plugins: [],
}
