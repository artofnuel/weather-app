/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./public/*.html'],
  theme: {
    screens: {
      sm: '480px',
      md: '768px',
      lg: '976px',
      xl: '1440px',
      },
    extend: {
      backgroundImage: {
        'search': "url('../images/search.svg')",
        'search2': "url('../images/search2.svg')",
        'pexels': "url('../images/pexels-bkg.jpg')",
        'pexels2': "url('../images/pexels-bkg2.jpg')"
      },
      fontFamily: {
        "poppins": 'Poppins, sans-serif',
        "abril": 'Abril Fatface, cursive',
      },
      colors: {
        // primary
        bkg: '#0f0e17',
        card: '#fffffe',
        button: '#7f5af0',
      }
    },
  },
  plugins: [],
}
