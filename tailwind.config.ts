import type { Config } from 'tailwindcss';

const config: Config = {
  darkMode: ['class'],
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        // Couleurs Chantier Film (depuis styles.css)
        'cf-white': '#FCFCFC',
        'cf-dark': '#212125',
        'cf-blue-dark': '#4E6D88',
        'cf-blue-primary': '#0055FF',
        'cf-blue-light': '#A5B3C5',
        'cf-blue-lightest': '#E0E8F4',
        
        // Mapping pour shadcn/ui
        background: '#FCFCFC',
        foreground: '#212125',
        card: {
          DEFAULT: '#FFFFFF',
          foreground: '#212125',
        },
        popover: {
          DEFAULT: '#FFFFFF',
          foreground: '#212125',
        },
        primary: {
          DEFAULT: '#0055FF',
          foreground: '#FCFCFC',
        },
        secondary: {
          DEFAULT: '#E0E8F4',
          foreground: '#212125',
        },
        muted: {
          DEFAULT: '#E0E8F4',
          foreground: '#4E6D88',
        },
        accent: {
          DEFAULT: '#E0E8F4',
          foreground: '#0055FF',
        },
        destructive: {
          DEFAULT: '#ef4444',
          foreground: '#FCFCFC',
        },
        border: '#A5B3C5',
        input: '#A5B3C5',
        ring: '#0055FF',
      },
      fontFamily: {
        sans: ['Nunito', 'sans-serif'],
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      borderRadius: {
        lg: 'var(--radius)',
        md: 'calc(var(--radius) - 2px)',
        sm: 'calc(var(--radius) - 4px)',
      },
      keyframes: {
        'accordion-down': {
          from: {
            height: '0',
          },
          to: {
            height: 'var(--radix-accordion-content-height)',
          },
        },
        'accordion-up': {
          from: {
            height: 'var(--radix-accordion-content-height)',
          },
          to: {
            height: '0',
          },
        },
        fadeInUp: {
          from: {
            opacity: '0',
            transform: 'translateY(20px)',
          },
          to: {
            opacity: '1',
            transform: 'translateY(0)',
          },
        },
        fadeInRight: {
          from: {
            opacity: '0',
            transform: 'translateX(-20px)',
          },
          to: {
            opacity: '1',
            transform: 'translateX(0)',
          },
        },
        float: {
          '0%': {
            transform: 'translateY(0px)',
          },
          '50%': {
            transform: 'translateY(-20px)',
          },
          '100%': {
            transform: 'translateY(0px)',
          },
        },
        pulse: {
          '0%': {
            boxShadow: '0 0 0 0 rgba(0, 85, 255, 0.6)',
          },
          '70%': {
            boxShadow: '0 0 0 10px rgba(0, 85, 255, 0)',
          },
          '100%': {
            boxShadow: '0 0 0 0 rgba(0, 85, 255, 0)',
          },
        },
        accentPulse: {
          '0%, 100%': {
            transform: 'translateY(0) rotate(-1deg)',
          },
          '50%': {
            transform: 'translateY(-3px) rotate(-1deg)',
          },
        },
      },
      animation: {
        'accordion-down': 'accordion-down 0.2s ease-out',
        'accordion-up': 'accordion-up 0.2s ease-out',
        'fade-in-up': 'fadeInUp 0.8s forwards',
        'fade-in-right': 'fadeInRight 0.8s forwards',
        'float': 'float 6s ease-in-out infinite',
        'pulse-custom': 'pulse 2s infinite',
        'accent-pulse': 'accentPulse 3s ease-in-out infinite',
      },
    },
  },
  plugins: [require('tailwindcss-animate')],
};
export default config;