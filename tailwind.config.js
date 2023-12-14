/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class',
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        // 'primary': '#1a56db',
        // 'primarydark': '#1e1b4b',
        // 'primarylight': '#C0D4FF',
        // 'secondary' : '#6366f1',
        // 'primaryHover': '#e5f0fa',
        // 'primarylighthover': '#1e40af',
        // 'primarydarkhover' : '#374151',        
         
        'primarydark' : '#222529',
        'primary-text-normal':'#747579',
        'primary-text-normal-dark':'#a1a1a8',
        'primary-text-heading': '#24292d',
        'primary'              : 'rgba(6, 106, 201, 1)', //#066ac9
        'primary-light'        : 'rgba(6, 106, 201, 0.1)',
        'primary-dark-hover'   : 'rgba(6, 106, 201, 0.2)',
        'primary-border-light' : '#dde0e3',
        'primary-green'        : 'rgba(12, 188, 135, 1)',
        'primary-green-light'  : 'rgba(12, 188, 135, 0.1)',
        'primary-dark'         : 'rgba(36, 41, 45, 1)',
        'primary-yellow'       : 'rgba(247, 195, 46, 1)',
        'primary-yellow-light' : 'rgba(247, 195, 46, 0.15)',
        'primary-purple'       : 'rgba(111, 66, 193, 1)',
        'primary-purple-light' : 'rgba(111, 66, 193, 0.1)',
        'primary-info'         : 'rgba(23, 162, 184, 1)',
        'primary-info-light'   : 'rgba(23, 162, 184, 0.1)',
        'primary-grayText'     : '#747579',
        'light-line'           : '#dde0e3',
        'border-dark' :'rgba(255, 255, 255, 0.07)',
        'dark-nav':'#c5c6cc',

        },
        transitionProperty: {
          'height': 'height',
        }
    },
  },
  plugins: [],
}

