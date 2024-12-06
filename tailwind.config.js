/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#f97316',
          foreground: '#ffffff',
        },
        secondary: {
          DEFAULT: '#dc2626',
          foreground: '#ffffff',
        },
        destructive: {
          DEFAULT: '#ef4444',
          foreground: '#ffffff',
        },
        accent: {
          DEFAULT: '#fed7aa',
          foreground: '#000000',
        },
      },
    },
  },
  plugins: [],
};