const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
  purge: [
    './components/**/*.{vue,js}',
    './layouts/**/*.vue',
    './pages/**/*.vue',
    './store/**/*.{js,ts}',
    './plugins/**/*.{js,ts}',
    './nuxt.config.{js,ts}',
    './formulate.config.js',
  ],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        'robins-egg-blue': {
          50: '#f2fdfd',
          100: '#e6fafb',
          200: '#bff3f6',
          300: '#99ecf0',
          400: '#4ddde5',
          500: '#00cfda',
          600: '#00bac4',
          700: '#009ba4',
          800: '#007c83',
          900: '#00656b',
        },
        'mint-green': {
          50: '#f8fffb',
          100: '#f1fff7',
          200: '#dbfeeb',
          300: '#c5fdde',
          400: '#9afcc6',
          500: '#6ffbad',
          600: '#64e29c',
          700: '#53bc82',
          800: '#439768',
          900: '#367b55',
        },
        'blue-ribbon': {
          50: '#f2f6fe',
          100: '#e6edfd',
          200: '#bfd2f9',
          300: '#99b6f5',
          400: '#4d80ee',
          500: '#0049e6',
          600: '#0042cf',
          700: '#0037ad',
          800: '#002c8a',
          900: '#002471',
        },
        arapawa: {
          50: '#f2f3f8',
          100: '#e6e7f0',
          200: '#c0c2da',
          300: '#9a9ec3',
          400: '#4e5597',
          500: '#020c6a',
          600: '#020b5f',
          700: '#020950',
          800: '#010740',
          900: '#010634',
        },
      },
      fontFamily: {
        sans: ['Inter var', ...defaultTheme.fontFamily.sans],
      },
    },
  },
  variants: {
    extend: {
      opacity: ['disabled'],
    },
  },
  plugins: [
    // require('@tailwindcss/forms')({
    //   strategy: 'class',
    // }),
    require('@tailwindcss/forms'),
    require('@tailwindcss/typography'),
  ],
}
