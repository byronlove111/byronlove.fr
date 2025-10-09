/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        surface: {
          1: 'var(--surface-1)',
          2: 'var(--surface-2)',
          3: 'var(--surface-3)',
          4: 'var(--surface-4)',
          5: 'var(--surface-5)',
          6: 'var(--surface-6)',
          7: 'var(--surface-7)',
          8: 'var(--surface-8)',
          9: 'var(--surface-9)',
          10: 'var(--surface-10)',
          11: 'var(--surface-11)',
          12: 'var(--surface-12)',
        },
        primary: {
          1: 'var(--primary-1)',
          2: 'var(--primary-2)',
          3: 'var(--primary-3)',
          4: 'var(--primary-4)',
          5: 'var(--primary-5)',
          6: 'var(--primary-6)',
          7: 'var(--primary-7)',
          8: 'var(--primary-8)',
          9: 'var(--primary-9)',
          10: 'var(--primary-10)',
          11: 'var(--primary-11)',
          12: 'var(--primary-12)',
        }
      },
      fontSize: {
        '2': ['0.75rem', '1rem'],
      },
      letterSpacing: {
        '2': '0.025em',
      }
    },
  },
  plugins: [],
}