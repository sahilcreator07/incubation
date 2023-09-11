/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./*'],
  theme: {
    extend: {
      colors: {
        'lightb' : '#f5f5f5',
        'secondary': '#d6d6d6',
        'brightb' : '#0A2B88',
        'bg' : '#F5F5F5',
        'dtext': '0d1117',
        'text': '#333333',
      },
      fontFamily: {
        'sans': ['ui-sans-serif', 'system-ui'],
        'serif': ['ui-serif', 'Georgia'],
        'mono': ['ui-monospace', 'system-ui'],
        'robo' : ['Roboto Mono','ui-monospace', 'system-ui'],
        'roboto': ['Roboto Slab', 'ui-serif', 'system-ui'],
        'name':['Merienda','ui-cursive','system-ui'],
        'hand':['Patrick Hand','ui-cursive','system-ui'],
        'play':['ADLaM Display', 'cursive','system-ui'],
        'poppins':['Poppins','ui-sans-serif','system-ui'],
        'nav' : ['Acme','ui-sans-serif','system-ui'],
      },
    },
  },
  plugins: [],
}

