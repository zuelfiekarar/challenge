/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./#2/**/*.{html,js}','./#3/**/*.{html,js}' ],
  theme: {
    extend: {
      colors: {
        'dasar': '#294263',
        'biru': '#203271',
        'ijo_tumbuh' :'#2a9d8f',
      },
      fontFamily: {
        'inter' : 'Inter',
        'asap' : 'Asap Condensed',
        'caveat' : 'Caveat',
        'poppins' : 'Poppins',
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
        '26' : '6.5rem',
        '108' : '27rem',
        '120' : '30rem',
        '152' : '38rem',
        '132' : '33rem',
      },
      translate: {
        '120' : '30rem'
      },
      skew: {
        '45' : '45deg'
      }
    },
  },
  plugins: [],
}

