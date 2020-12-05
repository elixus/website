// tailwind.config.js
const colors = require('tailwindcss/colors');

module.exports = {
    darkMode: 'media',
    purge: [
        './src/**/*.html',
    ],
    future: {
        removeDeprecatedGapUtilities: true,
        purgeLayersByDefault: true,
    },
    theme: {
        extend: {
            fontFamily: {
                roboto: 'Roboto'
            },
            colors: {
                primary: {
                    light: '#58BDEB',
                    DEFAULT: '#1595CD'
                },
                'blue-gray': colors.blueGray
            }
        }
    },
    variants: {
        extend: {
            translate: ['motion-reduce'],
        }
    },
    plugins: [],
}
