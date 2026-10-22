/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        primary: {
          50: '#f0f7ff',
          100: '#e0effe',
          200: '#bae0fd',
          300: '#7cc7fb',
          400: '#38a8f7',
          500: '#0e8ce9',
          600: '#026fc7',
          700: '#0358a1',
          800: '#074c85',
          900: '#0c3f6e',
          950: '#082849',
        },
        accent: {
          50: '#fdf4ff',
          100: '#fae8ff',
          500: '#d946ef',
          600: '#c026d3',
        },
        study: {
          math: '#3b82f6',
          cs: '#8b5cf6',
          physics: '#06b6d4',
          chem: '#10b981',
          bio: '#22c55e',
          lit: '#f59e0b',
          econ: '#ef4444',
          history: '#d97706',
          other: '#6366f1'
        }
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', '-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'Roboto', 'sans-serif'],
      },
      animation: {
        'pulse-slow': 'pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'bounce-short': 'bounce 1s ease-in-out 2',
      }
    },
  },
  plugins: [],
}
