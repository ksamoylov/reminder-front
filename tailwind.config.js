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
            'purple': '#251B37',
            'white': '#fff',
            'black': '#000',
            'gray': 'rgba(119, 119, 119, 0.21)',
        },
        fontFamily: {
            sans: ['Josefin Sans', 'sans-serif'],
        },
    },
    plugins: [],
}
