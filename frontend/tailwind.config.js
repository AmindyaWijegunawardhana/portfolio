/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        dark: {
          0: '#ffffff',
          50: '#f9fafb',
          100: '#f3f4f6',
          200: '#e5e7eb',
          900: '#111827',
          950: '#0f172a',
        },
        neon: {
          blue: '#0ea5e9',
          purple: '#a855f7',
          pink: '#ec4899',
          cyan: '#06b6d4',
        },
        glass: 'rgba(15, 23, 42, 0.7)',
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic': 'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
        'neon-glow': 'linear-gradient(135deg, #0ea5e9, #a855f7)',
      },
      boxShadow: {
        'glow-blue': '0 0 25px rgba(14, 165, 233, 0.5)',
        'glow-purple': '0 0 25px rgba(168, 85, 247, 0.5)',
        'glow-cyan': '0 0 25px rgba(6, 182, 212, 0.5)',
        'glass': '0 8px 32px rgba(31, 38, 135, 0.37)',
      },
      animation: {
        'pulse-glow': 'pulse-glow 2s ease-in-out infinite',
        'float': 'float 3s ease-in-out infinite',
        'shimmer': 'shimmer 2s infinite',
      },
      keyframes: {
        'pulse-glow': {
          '0%, 100%': { opacity: '1' },
          '50%': { opacity: '0.5' },
        },
        'float': {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-20px)' },
        },
        'shimmer': {
          '0%': { backgroundPosition: '-1000px 0' },
          '100%': { backgroundPosition: '1000px 0' },
        },
      },
    },
  },
  plugins: [],
}
