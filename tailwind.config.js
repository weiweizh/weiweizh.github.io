/* Here I can overwrite the default tailwind styles by using extend */
module.exports = {
  content: 
    [
      './dist/**/*.{html,css,js}',
    ],
  theme: {
    extend: {
      colors:{
        primary: {
          1000:'#3A3F3E',
          400:'#AAACAC',
          600:'#858887',
        
        },
        secondary:{
          yellow: '#F9ECC6',
          teal: '#D5EDE8',
        },
        tertiary: '#FEFEFE',
        
      }
    },
    fontFamily:{
      header: 'Bulter',
      body:'Plus Jakarta Sans',
    },
    backgroundImage:{
      bluredbg: "url('img/blured-bg.png')",
    },
    backgroundImageSize:{
      sizethird:'30%',
      sizehalf:'50%',
    }
  },
  plugins: [],
}