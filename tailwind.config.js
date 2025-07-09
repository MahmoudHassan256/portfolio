/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class', // important to toggle dark mode via a class
  content: [
    './index.html',
    './src/**/*.{js,jsx,ts,tsx}'
  ],
  theme: {
    extend: {
      // Add your colors or extensions here if needed
    },
  },
  plugins: [],
};
