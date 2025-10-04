import js from '@eslint/js'
import pluginVue from 'eslint-plugin-vue'
import pluginPrettier from 'eslint-plugin-prettier'
import globals from 'globals'
import vueParser from 'vue-eslint-parser'
import babelParser from '@babel/eslint-parser'
import tsParser from '@typescript-eslint/parser'

export default [
  js.configs.recommended,

  // 🧩 Konfigurasi untuk file Node.js (vite.config.js, tailwind.config.js, dsb)
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
      'no-undef': 'off', // Nonaktifkan aturan browser di environment Node
    },
  },

  // 🧩 Aturan untuk file Vue & JS di dalam aplikasi
  {
    files: [
      'resources/**/**/*.{js,vue,ts}',
      'resources/stores/**/*.{js,vue,ts}',
      'resources/utils/**/*.{js,vue,ts}',
      'resources/UI/**/*.{js,vue,ts}',
    ],
    languageOptions: {
      parser: vueParser,
      parserOptions: {
        parser: {
          // otomatis: <script lang="ts"> → pakai TS parser
          ts: tsParser,
          // otomatis: <script> biasa → pakai Babel parser
          js: babelParser,
        },
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

      // ✨ Aturan tambahan Ndoro
      'vue/multi-word-component-names': 'off',
      'no-unused-vars': 'warn',
      'no-useless-escape': 'warn',

      // 💅 Integrasi Prettier
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
