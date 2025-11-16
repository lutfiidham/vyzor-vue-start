import antfu from '@antfu/eslint-config'

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
    // Override specific rules we want to customize
    'vue/multi-word-component-names': 'off',
    'vue/require-default-prop': 'off',
    'no-console': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
  },
})
