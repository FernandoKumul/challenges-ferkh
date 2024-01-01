/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'Dark-Slate-Grey': 'hsl(234, 29%, 20%)',
        'Charcoal-Grey': 'hsl(235, 18%, 26%)',
        Grey: 'hsl(231, 7%, 60%)',
        White: 'hsl(0, 0%, 100%)',
        tomato: 'hsl(4, 100%, 67%)',

        'very-dark-magenta': 'hsl(300, 43%, 22%)',
        'soft-pink': 'hsl(333, 80%, 67%)',
        'dark-grayish-magenta': 'hsl(303, 10%, 53%)',
        'light-grayish-magenta': 'hsl(300, 24%, 96%)'
      },
      fontFamily: {
        'league-spartan': ['League Spartan']
      }
    },
  },
  plugins: [],
}

