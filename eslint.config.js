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
    // 🎓 RULES PEMULA - Aturan yang membantu pemula menulis kode lebih baik
    // ⚠️ Rules ini 'warn' (peringatan) bukan 'error' agar tidak mengganggu development

    // 🔥 Best Practices for Beginners (jangan terlalu strict)
    'no-console': 'off', // Console log boleh untuk debugging pemula
    'no-debugger': 'off', // Debugger boleh untuk pembelajaran
    'no-unused-vars': 'off', // Variabel unused boleh untuk development
    '@typescript-eslint/no-unused-vars': 'off', // Same untuk TypeScript

    // 🚫 Safe Coding Rules (error yang harus dihindari)
    'no-eval': 'error', // Jangan gunakan eval()
    'no-implied-eval': 'error', // Jangan gunakan eval secara tidak langsung
    'no-new-func': 'error', // Jangan gunakan Function() constructor
    'no-script-url': 'error', // Jangan gunakan javascript: URL
    'no-void': 'off', // Void operator boleh untuk pemula

    // 🎯 Vue Best Practices (membantu belajar Vue dengan benar)
    'vue/no-unused-components': 'off', // Component unused boleh untuk development
    'vue/no-unused-vars': 'off', // Variables di template boleh unused
    'vue/valid-v-for': 'off', // v-for syntax fleksibel untuk pemula
    'vue/require-v-for-key': 'off', // v-for key optional untuk pemula
    'vue/valid-v-bind': 'off', // v-bind syntax fleksibel untuk pemula
    'vue/valid-v-on': 'off', // v-on syntax fleksibel untuk pemula
    'vue/no-deprecated-slot-attribute': 'off', // Deprecated syntax boleh untuk belajar
    'vue/no-deprecated-slot-scope-attribute': 'off', // Deprecated syntax boleh untuk belajar

    // 💡 Helpful TypeScript Rules (untuk belajar TypeScript)
    '@typescript-eslint/ban-ts-comment': 'off', // TS comment boleh untuk pembelajaran
    '@typescript-eslint/no-explicit-any': 'off', // Any type boleh untuk pemula
    'unused-imports/no-unused-vars': 'off', // Unused imports boleh

    // 🚨 Security Rules (penting untuk security)
    'no-sequences': 'error', // Jangan gunakan comma operator yang ambigu
    'no-unsafe-finally': 'error', // Finally block yang tidak aman
    'require-atomic-updates': 'warn', // Update variables secara atomic

    // 📝 Code Organization (membantu menulis kode yang rapi)
    'perfectionist/sort-imports': 'off', // Urutan import tidak dipaksa untuk pemula
    'sort-imports': 'off', // Tidak memaksa import sorting

    // 🎨 Style Rules (fleksibel untuk pemula)
    'vue/multi-word-component-names': 'off', // Boleh single-word component names
    'vue/require-default-prop': 'off', // Props tidak wajib ada default
    'vue/prop-name-casing': 'off', // Boleh camelCase atau kebab-case props
    'vue/attribute-hyphenation': 'off', // Fleksibel attribute naming
    'vue/attributes-order': 'off', // Urutan attributes tidak dipaksa
    'eqeqeq': 'off', // Boleh gunakan == untuk pemula
    'vue/eqeqeq': 'off', // Boleh gunakan == di Vue templates
    'vue/custom-event-name-casing': 'off', // Event naming fleksibel
    'style/arrow-parens': 'off', // Arrow functions fleksibel
    'style/indent': 'off', // Indentation tidak strict
    'style/quotes': 'off', // Single atau double quotes bebas
    'style/semi': 'off', // Semicolon optional
    'style/comma-dangle': 'off', // Comma at end optional
    'style/object-curly-spacing': 'off', // Object spacing fleksibel
    'style/no-trailing-spaces': 'off', // Trailing spaces allowed
    'style/eol-last': 'off', // Final newline optional
    'style/no-tabs': 'off', // Boleh gunakan tabs
    'style/max-statements-per-line': 'off', // Multiple statements per line allowed

    // 🔧 Development Helper Rules (memudahkan development)
    'no-alert': 'off', // Alert() boleh untuk debugging
    'no-new': 'off', // 'new' untuk side effects boleh
    'no-undef': 'off', // Global variables allowed
    'no-empty': 'off', // Empty blocks boleh
    'no-unneeded-ternary': 'off', // Ternary boleh untuk belajar
    'prefer-const': 'off', // Let/const/let bebas untuk pemula
    'no-var': 'off', // Var/let/const bebas untuk pemula
    'no-unused-expressions': 'off', // Expressions boleh untuk side effects
    'new-cap': 'off', // Constructor naming fleksibel

    // 📚 Library-specific Rules (banyak library menyalahi aturan ini)
    'unicorn/prefer-number-properties': 'off', // isNaN() boleh digunakan
    'unicorn/prefer-dom-node-text-content': 'off', // innerText boleh
    'regexp/no-unused-capturing-group': 'off', // Regex groups boleh unused

    // 🧪 Experimental/Advanced Features (off untuk pemula)
    'ts/no-use-before-define': 'off', // Variabel boleh digunakan sebelum define
    'ts/no-unused-expressions': 'off', // Expressions boleh di TypeScript
    'no-prototype-builtins': 'off', // Object.prototype methods boleh
    'vue/no-template-shadow': 'off', // Variable shadowing di template boleh
    'vue/valid-v-slot': 'off', // Slot syntax fleksibel
    'vue/require-prop-type-constructor': 'off', // Prop type fleksibel
    'vue/no-unused-refs': 'off', // Refs boleh unused
    'vue/no-parsing-error': 'off', // Parsing errors diperbolehkan
  },
})
