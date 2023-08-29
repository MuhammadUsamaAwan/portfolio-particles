import type { Config } from 'tailwindcss';

const config: Config = {
  content: ['./src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      minHeight: {
        screen: '100dvh',
      },
      height: {
        screen: '100dvh',
      },
      container: {
        padding: {
          DEFAULT: '0.9375rem',
        },
      },
      screens: {
        lg: '960px',
        xl: '1200px',
      },
      colors: {
        border: 'hsl(var(--border),  <alpha-value>)',
        input: 'hsl(var(--input),  <alpha-value>)',
        ring: 'hsl(var(--ring),  <alpha-value>)',
        background: 'hsl(var(--background),  <alpha-value>)',
        foreground: 'hsl(var(--foreground),  <alpha-value>)',
        primary: {
          DEFAULT: 'hsl(var(--primary),  <alpha-value>)',
          foreground: 'hsl(var(--primary-foreground),  <alpha-value>)',
        },
        secondary: {
          DEFAULT: 'hsl(var(--secondary),  <alpha-value>)',
          foreground: 'hsl(var(--secondary-foreground),  <alpha-value>)',
        },
        destructive: {
          DEFAULT: 'hsl(var(--destructive),  <alpha-value>)',
          foreground: 'hsl(var(--destructive-foreground),  <alpha-value>)',
        },
        muted: {
          DEFAULT: 'hsl(var(--muted),  <alpha-value>)',
          foreground: 'hsl(var(--muted-foreground),  <alpha-value>)',
        },
        accent: {
          DEFAULT: 'hsl(var(--accent),  <alpha-value>)',
          foreground: 'hsl(var(--accent-foreground),  <alpha-value>)',
        },
        popover: {
          DEFAULT: 'hsl(var(--popover),  <alpha-value>)',
          foreground: 'hsl(var(--popover-foreground),  <alpha-value>)',
        },
        card: {
          DEFAULT: 'hsl(var(--card),  <alpha-value>)',
          foreground: 'hsl(var(--card-foreground),  <alpha-value>)',
        },
      },
      borderRadius: {
        lg: 'var(--radius)',
        md: 'calc(var(--radius) - 2px)',
        sm: 'calc(var(--radius) - 4px)',
      },
      backgroundImage: {
        explosion: 'url("/bg-explosion.png")',
        circles: 'url("/bg-circles.png")',
        circleStar: 'url("/circle-star.svg")',
        site: 'url("/site-bg.svg")',
      },
      animation: {
        'spin-slow': 'spin 6s linear infinite',
      },
    },
  },
  plugins: [require('tailwind-scrollbar')],
};
export default config;
