import js from '@eslint/js'
import pluginVue from 'eslint-plugin-vue'
import pluginPrettier from 'eslint-plugin-prettier'
import globals from 'globals'

// 🧠 import parser Vue
import vueParser from 'vue-eslint-parser'

export default [
  js.configs.recommended, // aturan dasar JS

  {
    files: ['resources/js/**/*.{js,vue}'],

    // 🧩 tambahkan parser agar bisa baca <template> & <script setup>
    languageOptions: {
      parser: vueParser,
      parserOptions: {
        parser: '@babel/eslint-parser', // biar dukung sintaks modern JS
        ecmaVersion: 2020,
        sourceType: 'module',
        ecmaFeatures: { jsx: false },
      },
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
      // Aturan Vue 3 dasar
      ...pluginVue.configs['flat/recommended'].rules,

      // Nonaktifkan aturan yang terlalu ketat
      'vue/multi-word-component-names': 'off',

      // Integrasi Prettier
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
