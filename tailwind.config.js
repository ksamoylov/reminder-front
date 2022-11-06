/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ['./src/**/*.{js,jsx,ts,tsx}'],
    theme: {
        screens: {
            sm: '480px',
            md: '768px',
            lg: '976px',
            xl: '1440px',
        },
        colors: {
            purple: '#251B37',
            white: '#FFF',
            black: '#000',
            gray: 'rgba(119, 119, 119, 0.21)',
            'purple-gray': '#B0A8BA',
            'purple-light': '#FCF7FF',
        },
        fontFamily: {
            sans: ['Josefin Sans', 'sans-serif'],
        },
    },
    plugins: [],
}
