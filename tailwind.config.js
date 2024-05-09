/** @type {import('tailwindcss').Config} */
export default {
    content: ['./src/**/*.{html,js,svelte,ts}'],
    theme: {
      extend: {
        fontFamily: {
            'clash-display': "ClashDisplay, system-ui, -apple-system, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif",
            'century': "Century, system-ui, -apple-system, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif",
        },
        boxShadow: {
            '3xl': '0 35px 60px -15px rgba(0, 0, 0, 0.3)',
          },
        transitionDuration: {
            '2000': '2000ms',
        },
        transitionProperty: {
            'max-height': 'height',
        },
        animation: {
            bounce: 'bounce 0.55s linear infinite',
        }
      }
    },
    plugins: [
        require('tailwindcss-animated'),
        require('tailwind-animatecss'),
        require('tailwindcss-text-fill-stroke')
      ],
  };