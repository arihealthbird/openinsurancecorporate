import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          primary: '#e6ccb2',
          secondary: '#34293D',
          accent: '#837E87',
          accentAlt: '#7f5539',
          logo: '#DAD8D2',
        },
        surface: {
          light: '#f7f3ee',
          dark: '#1a1520',
        },
        text: {
          primaryLight: '#1a1520',
          primaryDark: '#f7f3ee',
        },
      },
      fontFamily: {
        sentient: ['var(--font-sentient)', 'serif'],
        satoshi: ['var(--font-satoshi)', 'sans-serif'],
      },
    },
  },
  plugins: [],
}

export default config
