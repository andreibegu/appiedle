import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      animation: {
        'shake': 'shake 0.6s cubic-bezier(.36,.07,.19,.97) both',
        'jump': 'jump .5s both',
      },
      keyframes: {
        'shake': {
          '10%, 90%': {
            transform: 'translate3d(-1px, 0, 0)'
          },
          '20%, 80%': {
            transform: 'translate3d(2px, 0, 0)'
          },
          '30%, 50%, 70%': {
            transform: 'translate3d(-4px, 0, 0)'
          },
          '40%, 60%': {
            transform: 'translate3d(4px, 0, 0)'
          }
        },
        'jump': {
          '0%, 100%': {
            transform: 'scale(100%)',
          },
          '10%': {
            transform: 'scale(90%)',
          },
          '50%': {
            transform: 'scale(110%)',
          },
        },
      }
    },
  },
  plugins: [],
};
export default config;
