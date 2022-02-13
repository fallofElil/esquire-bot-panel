module.exports = {
  root: true,
  plugins: ['react', 'prettier', '@typescript-eslint'],
  rules: {
    'react/prop-types': 'off',
  },
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
    ecmaFeatures: {
      jsx: true
    },
    settings: {
      react: {
        version: '17.0.2',
      }
    },
    project: './tsconfig.json',
  },
};
