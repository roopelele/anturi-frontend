module.exports = {
  env: {
    browser: true,
    es6: true
  },
  extends: ['eslint:recommended', 'plugin:react/recommended'],
  parserOptions: {
    ecmaFeatures: {
      jsx: true
    },
    ecmaVersion: 2018,
    sourceType: 'module'
  },
  plugins: ['react'],
  rules: {
    indent: ['error', 2],
    'linebreak-style': ['off', 'unix'],
    quotes: ['warn', 'single'],
    semi: ['error', 'never'],
    eqeqeq: 'error',
    'no-trailing-spaces': 'warn',
    'object-curly-spacing': ['warn', 'always'],
    'arrow-spacing': ['error', {before: true, after: true}],
    'no-console': 0,
    'no-unreachable': 0,
    'no-undef': 0,
    'react/prop-types': 0,
    'no-unused-vars': ['warn']
  }
}
