/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './index.html',
    './src/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        background: 'hsl(0 0% 100%)',
        foreground: 'hsl(210 40% 4%)',
        card: 'hsl(0 0% 100%)',
        'card-foreground': 'hsl(210 40% 4%)',
        primary: 'hsl(346 77% 56%)',
        'primary-foreground': 'hsl(0 0% 100%)',
        rose: 'hsl(346 77% 56%)',
        blush: 'hsl(346 100% 92%)',
        cream: 'hsl(45 100% 96%)',
        muted: 'hsl(210 40% 96%)',
        'muted-foreground': 'hsl(215 13% 34%)',
        border: 'hsl(210 40% 96%)',
        input: 'hsl(210 40% 96%)',
        ring: 'hsl(346 77% 56%)',
      },
      boxShadow: {
        soft: '0 2px 8px rgba(0, 0, 0, 0.08)',
        pink: '0 4px 16px rgba(229, 62, 91, 0.15)',
      },
    },
  },
  plugins: [],
};
