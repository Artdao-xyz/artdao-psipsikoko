/** @type {import('tailwindcss').Config} */
export default {
    content: ['./src/**/*.{html,js,svelte,ts}'],
    theme: {
      extend: {
        boxShadow: {
            '3xl': '0 35px 60px -15px rgba(0, 0, 0, 0.3)',
          },
        transitionDuration: {
            '2000': '2000ms',
        },
        transitionProperty: {
            'max-height': 'height',
        },
      }
    },
    plugins: []
  };