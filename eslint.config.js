import js from '@eslint/js'
import pluginVue from 'eslint-plugin-vue'
import pluginPrettier from 'eslint-plugin-prettier'
import globals from 'globals'

export default [
  js.configs.recommended, // aturan dasar JS

  {
    files: ['resources/js/**/*.{js,vue}'],
    languageOptions: {
      ecmaVersion: 2020,
      sourceType: 'module',
      globals: {
        ...globals.browser,
        ...globals.node,
      },
    },
    plugins: {
      vue: pluginVue,
      prettier: pluginPrettier,
    },
    rules: {
      // tambahkan aturan vue manual biar gak error
      ...pluginVue.configs['flat/recommended'].rules,

      // Nonaktifkan aturan yang terlalu ketat
      'vue/multi-word-component-names': 'off',

      // Integrasi prettier
      'prettier/prettier': [
        'error',
        {
          singleQuote: true,
          semi: false,
          trailingComma: 'es5',
          printWidth: 100,
          endOfLine: 'auto',
        },
      ],
    },
  },
]
