/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          deep: '#1a1d3a',
          medium: '#242856',
          light: '#2d3561',
        },
        accent: {
          gold: '#FFB830',
          cyan: '#00D9FF',
          purple: '#9333EA',
          emerald: '#10B981',
          rose: '#F43F5E',
          indigo: '#6366F1',
        },
        text: {
          primary: '#F8FAFC',
          secondary: '#CBD5E1',
          muted: '#94A3B8',
        },
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
        display: ['Sora', 'sans-serif'],
        mono: ['JetBrains Mono', 'monospace'],
      },
    },
  },
  plugins: [],
}