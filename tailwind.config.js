/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/**/*.{js,jsx,ts,tsx,md,mdx}',
    './src/theme/**/*.{js,jsx,ts,tsx}',
    './docs/**/*.{md,mdx}',
    './blog/**/*.{md,mdx}',
    './docusaurus.config.ts',
  ],
  theme: {
    extend: {
      colors: {
        aevir: {
          orange: '#FF6820', // Consensus Orange
          black: '#0A0A0F',  // Void Black
          gray: '#D9D9D9',   // Rational Gray
          white: '#FFFFFF',  // Pure White
        },
      },
      fontFamily: {
        orbitron: ['Orbitron', 'sans-serif'],
        space: ['Space Grotesk', 'sans-serif'],
      },
      backgroundImage: {
        'grid-pattern': "linear-gradient(to right, #f0f0f0 1px, transparent 1px), linear-gradient(to bottom, #f0f0f0 1px, transparent 1px)",
      },
      animation: {
        'float': 'float 6s ease-in-out infinite',
        'spin-slow': 'spin-slow 12s linear infinite',
        'pulse-glow': 'pulse-glow 3s ease-in-out infinite',
        'scan': 'scan 3s linear infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-10px)' },
        },
        'spin-slow': {
          from: { transform: 'rotate(0deg)' },
          to: { transform: 'rotate(360deg)' },
        },
        'pulse-glow': {
          '0%, 100%': { 
            opacity: '0.6',
            filter: 'drop-shadow(0 0 2px rgba(255, 104, 32, 0.5))'
          },
          '50%': { 
            opacity: '1',
            filter: 'drop-shadow(0 0 8px rgba(255, 104, 32, 0.8))'
          },
        },
        scan: {
          '0%': { transform: 'translateY(-100%)', opacity: '0' },
          '50%': { opacity: '1' },
          '100%': { transform: 'translateY(100%)', opacity: '0' },
        },
      },
    },
  },
  plugins: [],
  corePlugins: {
    preflight: false, // 禁用 Tailwind 的默认样式重置，避免与 Docusaurus 的 Infima 样式冲突
  },
}

