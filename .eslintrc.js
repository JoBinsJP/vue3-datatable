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
        "quotes": [
            "error",
            "double",
        ],
        "no-multi-spaces": [
            2,
            {
                "exceptions": {
                    "ExportNamedDeclaration": true,
                    "ImportDeclaration": true,
                },
            },
        ],
        "semi": 0,
        "indent": [
            "error",
            4,
        ],
        "comma-dangle": [
            "error",
            "always-multiline",
        ],
        "vue/html-closing-bracket-spacing": [
            "error",
            {
                "startTag": "never",
                "endTag": "never",
                "selfClosingTag": "never",
            },
        ],
        "vue/html-closing-bracket-newline": [
            "error",
            {
                "singleline": "never",
                "multiline": "never",
            },
        ],
        "vue/html-indent": [
            "error",
            4,
            {
                "attribute": 1,
                "baseIndent": 1,
                "closeBracket": 0,
                "alignAttributesVertically": true,
                "ignores": [],
            },
        ],
        "vue/script-indent": [
            "error",
            4,
            {
                "baseIndent": 1,
                "switchCase": 0,
                "ignores": [],
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
        "space-before-function-paren": [
            "error",
            {
                "anonymous": "never",
                "named": "never",
                "asyncArrow": "always",
            },
        ],
    },
    "overrides": [
        {
            "files": [
                "*.vue",
            ],
            "rules": {
                "indent": "off",
            },
        },
    ],
}
