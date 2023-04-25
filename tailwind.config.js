/* Here I can overwrite the default tailwind styles by using extend */
module.exports = {
  
  /* under content bracket, make sure to include all the 
  files you have that uses tailwind classes so that it 
  scans those files to generate the output css */

  content: 
    [
      './dist/**/*.{html,css,js}',
      '*.js',
      '*.html',
      './src/*.css',
    
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
        
      },

      animation: {

        blob: 'bloba 7s infinite',
      },

      keyframes: {
        bloba: {
          "0%": { transform: 'translate(0px, 0px) scale(1)' },
          "33%": { transform: 'translate(30px, -50px) scale(1.5)'},
          "66%": { transform: 'translate(-20px, 20px) scale(0.5)' },
          "100%": { transform: 'translate(0px, 0px) scale(1)'},
        },
      },
    
      fontFamily:{
         header: 'Larken',
         silka: 'silka regular',
         bodyBold: 'silka bold',
         
      },

      backgroundImage:{
      bluredbg: "url('img/blured-bg.png')",
      },

      backgroundImageSize:{
      sizethird:'30%',
      sizehalf:'50%',
      },
    },
   },

  plugins: [],


};
