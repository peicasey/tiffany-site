/** @type {import('tailwindcss').Config} */
const colors = require('tailwindcss/colors')
// const defaultTheme = require("tailwindcss/defaultTheme");

module.exports = {
  content: [
    // './app/**/*.{js,ts,jsx,tsx,mdx}', // Note the addition of the `app` directory.
    // './pages/**/*.{js,ts,jsx,tsx,mdx}',
    // './components/**/*.{js,ts,jsx,tsx,mdx}',
 
    // Or if using `src` directory:
    './src/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    colors: {
      lilac: '#f2effa',
      moody: '#463f57',
      blurple: '#5566a7',
      magenta: '#9e79c9',
      mustard: '#f6aa00',
      clementime: '#f26f00',
      transparent: 'transparent',
      current: 'currentColor',
      black: colors.black,
      white: colors.white,
      gray: colors.gray,
      orange: colors.orange,
      amber: colors.amber,
      indigo: colors.indigo,
      violet: colors.violet,
      purple: colors.purple,
    },
    extend: 
    {
      fontFamily: {
        'caprasimo': ['Caprasimo', 'cursive'],
        // 'caprasimo': ["Caprasimo", ...defaultTheme.fontFamily.sans],
      },
    },
  },
  plugins: [],
}


// import type { Config } from 'tailwindcss'
// import DefaultColors from 'tailwindcss/colors'

// const config: Config = {
//   content: [
//     './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
//     './src/components/**/*.{js,ts,jsx,tsx,mdx}',
//     './src/app/**/*.{js,ts,jsx,tsx,mdx}',
//   ],
//   darkMode: "class",
//   theme: {
//     colors: {
//       lilac: '#f2effa',
//       moody: '#463f57',
//       blurple: '#5566a7',
//       magenta: '#9e79c9',
//       mustard: '#f6aa00',
//       clementime: '#f26f00',
//       transparent: 'transparent',
//       current: 'currentColor',
//       black: DefaultColors.black,
//       white: colors.white,
//       gray: colors.gray,
//       orange: colors.orange,
//       amber: colors.amber,
//       indigo: colors.indigo,
//       violet: colors.violet,
//       purple: colors.purple,
//     },
//     extend: {
//       backgroundImage: {
//         'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
//         'gradient-conic':
//           'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
//       },
//     },
//   },
//   plugins: [],
// }
// export default config
