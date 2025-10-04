import js from '@eslint/js'
import pluginVue from 'eslint-plugin-vue'
import pluginPrettier from 'eslint-plugin-prettier'
import globals from 'globals'
import vueParser from 'vue-eslint-parser'

export default [
  js.configs.recommended,

  // 🧩 Konfigurasi khusus untuk file Node.js seperti vite.config.js, tailwind.config.js, dll
  {
    files: ['vite.config.{js,ts}', 'tailwind.config.{js,ts}', 'postcss.config.{js,ts}'],
    languageOptions: {
      ecmaVersion: 2020,
      sourceType: 'module',
      globals: {
        ...globals.node, // biar __dirname, process, require, dsb dianggap valid
      },
    },
    rules: {
      // Nonaktifkan aturan browser yang gak relevan di Node
      'no-undef': 'off',
    },
  },

  // 🧩 Aturan untuk file Vue & JS di dalam aplikasi
  {
    files: ['resources/js/**/*.{js,vue}'],
    languageOptions: {
      parser: vueParser,
      parserOptions: {
        parser: '@babel/eslint-parser',
        requireConfigFile: false, // biar gak butuh .babelrc
        ecmaVersion: 2020,
        sourceType: 'module',
        ecmaFeatures: { jsx: false },
      },
      globals: {
        ...globals.browser,
        ...globals.node,
        __BASE_PATH__: 'readonly',
      },
    },
    plugins: {
      vue: pluginVue,
      prettier: pluginPrettier,
    },
    rules: {
      ...pluginVue.configs['flat/recommended'].rules,
      'vue/multi-word-component-names': 'off', // biar gak maksa nama 2 kata
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
