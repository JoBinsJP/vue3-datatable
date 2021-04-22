module.exports = {
    root: true,
    env: {
        node: true,
        browser: true,
        es2021: true,

    },
    extends: [
        "plugin:vue/vue3-recommended",
        "eslint:recommended",
        "@vue/typescript/recommended",
        "@vue/prettier",
        "@vue/prettier/@typescript-eslint",
    ],
    parserOptions: {
        ecmaVersion: 2021,
    },
    rules: {
        "no-console": process.env.NODE_ENV === "production" ? "warn" : "off",
        "no-debugger": process.env.NODE_ENV === "production" ? "warn" : "off",
        "prettier/prettier": [
            "error",
            {
                "printWidth": 200,
                "tabWidth": 4,
                "useTabs": false,
                "semi": false,
                "singleQuote": false,
                "trailingComma": "es5",
                "bracketSpacing": true,
                "jsxBracketSameLine": true,
                "arrowParens": "always",
                "requirePragma": true,
                "insertPragma": true,
                "proseWrap": "always",
            },
        ],
        "vue/max-attributes-per-line": [
            "error",
            {
                "singleline": 4,
                "multiline": {
                    "max": 1,
                    "allowFirstLine": true,
                },
            },
        ],
    },
}
