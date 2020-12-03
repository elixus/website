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
                'blue-gray': colors.blueGray
            }
        }
    },
    variants: {},
    plugins: [],
}
