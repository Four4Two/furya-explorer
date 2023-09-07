/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: ['class'],
  content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        yes: '#3fb68b',
        no: '#ff5353',
        info: '#00b2ff',
        main: 'var(--text-main)',
        secondary: 'var(--text-secondary)',
        active: 'var(--bg-active)',
      },
    },
  },
  plugins: [require('daisyui')],
  daisyui: {
    themes: [
      {
        light: {
          ...require('daisyui/src/theming/themes')['[data-theme=lofi]'],
          '.btn-success': {
            'background-color': '#03A64A',
            'btn-su': {
              'background-color': '#04BF8A',
            },
          },
        },
      },
      {
        dark: {
          ...require('daisyui/src/theming/themes')['[data-theme=black]'],
          '.btn-success': {
            'background-color': '#03A64A',
            '.btn-su': {
              'background-color': '#04BF8A',
            },
          },
        },
      },
    ],
  },
};
