module.exports = {
  env: {
    browser: true,
    es6: true,
  },
  extends: [
    'prettier',
    'plugin:react/recommended',
    'airbnb',
  ],
  globals: {
    Atomics: 'readonly',
    SharedArrayBuffer: 'readonly',
  },
  parser: "babel-eslint",
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 2018,
    sourceType: 'module',
  },
  plugins: [
    'react',
    'prettier'
  ],
  rules: {
    'prettier/prettier': 'error',
    'react/jsx-filename-extension': [
      'warn', {
        extensions: ['.jsx', '.js']
      }
    ],
    'import/prefer-default-export': 'off',
    'react/jsx-props-no-spreading': 'off',
    'react/prefer-stateless-function': 'off',
    'react/state-in-constructor': 'off',
    'react/destructuring-assignment': 'off',
    'react/no-access-state-in-setstate': 'off',
    'no-console': ['error', { allow: ['tron'] }],
    'class-methods-use-this': 'off',
    'no-param-reassign': 'off',
    'camelcase': 'off',
    'no-unused-vars': ['error', {'argsIgnorePattern': 'next'}],
    'linebreak-style': [2, 'windows'],
    'arrow-parens': 'off'
  },
};
