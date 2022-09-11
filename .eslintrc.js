module.exports = {
  root: true,
  env: {
    es2021: true,
  },
  extends: [
    'plugin:vue/vue3-recommended',
    '@vue/airbnb',
    '@vue/typescript/recommended',
  ],
  parserOptions: {
    ecmaVersion: 2020,
    parser: '@typescript-eslint/parser',
  },
  settings: {
    'import/resolver': {
      alias: {
        map: [['@', './src'], ['@tests', './tests']],
        extensions: ['.js', '.jsx', '.ts', '.tsx', '.vue'],
      },
    },
  },
  rules: {
    'no-console': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
    'max-len': [1, { code: 120 }],
    'linebreak-style': 'off',
    'no-return-assign': 'off',
    'no-explicit-any': 'off',
    'no-underscore-dangle': 'off',
    'lines-between-class-members': ['error', 'always', { exceptAfterSingleLine: true }],
    'no-param-reassign': 'off',
    'arrow-parens': 'off',
    'no-restricted-globals': 'off',
    'no-plusplus': 'off',
    'no-nested-ternary': 'off',

    // Vue
    'vue/multi-word-component-names': 'off',
    'vue/max-attributes-per-line': ['error', {
      singleline: 2,
      multiline: 1,
    }],

    // Vue script setup: Fixes lint errors
    'vue/script-setup-uses-vars': 'error',

    // TS
    '@typescript-eslint/ban-ts-ignore': 'off',
    '@typescript-eslint/ban-ts-comment': 'off',
    '@typescript-eslint/no-empty-function': 'off',
    '@typescript-eslint/no-this-alias': 'off',
    '@typescript-eslint/ban-types': 'off',
    '@typescript-eslint/no-use-before-define': 'warn',

    // Accessibility
    'vuejs-accessibility/click-events-have-key-events': 'warn',
    'vuejs-accessibility/mouse-events-have-key-events': 'warn',
    'vuejs-accessibility/form-control-has-label': 'warn',
    'vuejs-accessibility/label-has-for': 'warn',
    'vuejs-accessibility/interactive-supports-focus': 'warn',
    'vuejs-accessibility/alt-text': 'warn',

    // ESLint bug
    'no-shadow': 'off',
    '@typescript-eslint/no-shadow': 'error',

    // Vite should be in dependencies
    'import/no-extraneous-dependencies': ['error', { devDependencies: true }],
  },
};
