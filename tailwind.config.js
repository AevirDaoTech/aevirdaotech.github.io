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
    },
  },
  plugins: [],
  corePlugins: {
    preflight: false, // 禁用 Tailwind 的默认样式重置，避免与 Docusaurus 的 Infima 样式冲突
  },
}

