import antfu from '@antfu/eslint-config'
import pluginVue from 'eslint-plugin-vue'
import pluginPromise from 'eslint-plugin-promise'
import pluginSonar from 'eslint-plugin-sonarjs'
import pluginRegexp from 'eslint-plugin-regexp'
import pluginRegex from 'eslint-plugin-regex'

export default antfu({
  vue: true,
  typescript: true,
  prettier: true,

  ignores: [
    'node_modules',
    'dist',
    'vendor',
    '*.d.ts',
    '*.json',
    'resources/ts/plugins/iconify/*.js',
  ],

  rules: {
    // 🧹 General cleanup
    'no-console': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
    semi: ['error', 'never'],
    'arrow-parens': ['error', 'as-needed'],
    'comma-dangle': ['error', 'always-multiline'],
    'object-curly-spacing': ['error', 'always'],
    camelcase: 'error',
    'newline-before-return': 'error',
    'comma-spacing': ['error', { before: false, after: true }],
    'key-spacing': ['error', { afterColon: true }],
    indent: ['error', 2],

    // 🧠 TypeScript
    '@typescript-eslint/no-explicit-any': 'off',
    '@typescript-eslint/no-unused-vars': [
      'error',
      { varsIgnorePattern: '^_+$', argsIgnorePattern: '^_+$' },
    ],
    '@typescript-eslint/no-shadow': ['error'],
    '@typescript-eslint/consistent-type-imports': 'error',

    // 🌈 Vue rules
    'vue/multi-word-component-names': 'off',
    'vue/require-default-prop': 'off',
    'vue/no-reserved-component-names': 'error',
    'vue/no-template-target-blank': 'error',
    'vue/block-tag-newline': 'error',
    'vue/component-name-in-template-casing': [
      'error',
      'PascalCase',
      { registeredComponentsOnly: false },
    ],
    'vue/padding-line-between-blocks': 'error',
    'vue/prefer-true-attribute-shorthand': 'error',

    // 🪄 Promise & Sonar
    'promise/always-return': 'off',
    'promise/catch-or-return': 'off',
    'sonarjs/cognitive-complexity': 'off',
    'sonarjs/no-duplicate-string': 'off',

    // 🎯 Regex rules (path alias enforcement)
    'regex/invalid': [
      'error',
      [
        {
          regex: '@/assets/images',
          replacement: '@images',
          message: 'Use "@images" alias for image imports',
        },
        {
          regex: '@/assets/styles',
          replacement: '@styles',
          message: 'Use "@styles" alias for styles',
        },
      ],
    ],
  },

  settings: {
    'import/resolver': {
      node: true,
      typescript: true,
    },
  },

  plugins: {
    vue: pluginVue,
    promise: pluginPromise,
    sonarjs: pluginSonar,
    regexp: pluginRegexp,
    regex: pluginRegex,
  },
})
