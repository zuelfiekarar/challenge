/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./#2/**/*.{html,js}'],
  theme: {
    extend: {
      colors: {
        'dasar': '#294263',
        'biru': '#203271',
      },
      fontFamily: {
        'inter' : 'Inter',
        'asap' : 'Asap Condensed',
        'caveat' : 'Caveat',
      },
      width : {
        '108' : '27rem'
      },
      height : {
        '108' : '27rem',
        '120' : '30rem',
      },
      margin: {
        '51' : '12.75rem',
        '120' : '30rem',
        '152' : '38rem',
        '132' : '33rem',
      }
    },
  },
  plugins: [],
}

