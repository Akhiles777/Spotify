// tailwind.config.js
export default {
    content: ['./index.html', './src/**/*.{js,jsx,ts,tsx,vue}'],
    theme: {
        extend: {
            colors: {

                secondary: '#f98305',
                bg: '#222327',
                'bg-secondary': '#25262c',
                'player-bg': '#2f3034',
            },
        },
    },
    plugins: [],
}
