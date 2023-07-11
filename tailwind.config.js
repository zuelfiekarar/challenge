/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./#2/**/*.{html,js}'],
  theme: {
    extend: {
      colors: {
        'dasar': '#294263',
      },
      fontFamily: {
        'inter' : 'Inter',
        'asap' : 'Asap Condensed'
      },
      width : {
        '108' : '27rem'
      },
      height : {
        '108' : '27rem'
      },
      margin: {
        '7.5' : '1.875'
      }
    },
  },
  plugins: [],
}

