module.exports = {
    root: true,
    env: {
        node: true,
    },
    extends: [
        "eslint:recommended",
        "plugin:vue/vue3-recommended",
        "plugin:prettier/recommended",
    ],
    parserOptions: {
        ecmaVersion: 2020,
    },
    rules: {
        "vue/multi-word-component-names": "off", // biar nama komponen boleh satu kata
        "prettier/prettier": [
            "error",
            {
                singleQuote: true,
                semi: false,
                trailingComma: "es5",
                endOfLine: "auto",
            },
        ],
    },
};
