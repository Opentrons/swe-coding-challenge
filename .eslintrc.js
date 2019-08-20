'use strict'

module.exports = {
  parser: 'babel-eslint',

  extends: [
    'standard',
    'plugin:react/recommended',
    'plugin:prettier/recommended',
    'prettier/react',
    'prettier/standard',
  ],

  plugins: ['react', 'react-hooks', 'prettier'],

  rules: {
    'react/display-name': 'off',
    'react-hooks/rules-of-hooks': 'error',
    'react-hooks/exhaustive-deps': 'warn',
  },

  env: {
    browser: true,
  },

  settings: {
    react: {
      version: '16.9',
    },
  },

  overrides: [
    {
      files: ['.*.js', '*.config.js'],
      env: { browser: false, node: true },
    },
    {
      files: ['**/__tests__/**.js', 'scripts/*.js'],
      env: { node: true, jest: true },
    },
  ],
}
