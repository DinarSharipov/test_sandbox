module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: [
    'airbnb',
    'plugin:import/recommended',
    'plugin:import/typescript',
  ],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 13,
    sourceType: 'module',
  },
  settings: {
    'import/resolver': {
      typescript: {
        alwaysTryTypes: true,
      },
    },
  },
  plugins: [
    'react',
    '@typescript-eslint',
    'import',
  ],
  ignorePatterns: [
    'public/',
    'node_modules/',
  ],
  rules: {
    'no-unused-vars': 'off',
    '@typescript-eslint/no-unused-vars': ['error'],

    'no-use-before-define': 'off',
    '@typescript-eslint/no-use-before-define': ['error'],

    'no-undef': 'off',

    'no-shadow': 'off',
    '@typescript-eslint/no-shadow': ['error'],

    indent: 'off',
    '@typescript-eslint/indent': ['error', 2, { SwitchCase: 1 }],

    'brace-style': 'off',
    '@typescript-eslint/brace-style': ['error'],

    '@typescript-eslint/no-explicit-any': 'error',
    'no-restricted-syntax': 1,
    'spaced-comment': ['error', 'always'],
    'no-underscore-dangle': 'off',

    'jsx-a11y/click-events-have-key-events': 'off',
    'jsx-a11y/no-static-element-interactions': 'off',

    'import/extensions': 'off',
    'import/prefer-default-export': 'off',
    curly: ['error', 'all'],
    'no-plusplus': 'off',
    '@typescript-eslint/member-delimiter-style': ['error'],
  },
};
