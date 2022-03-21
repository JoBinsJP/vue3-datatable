module.exports = {
    content: [
        "./index.html",
        "./src/**/*.{vue,js,ts,jsx,tsx}",
        "./lib/**/*.{vue,js,ts,jsx,tsx}",
    ],
    prefix: "dt-",
    theme: {
        extend: {},
    },
    corePlugins: {
        preflight: false,
    },
    plugins: [],
}
