import { FlatCompat } from '@eslint/eslintrc';
import typescriptEslint from '@typescript-eslint/eslint-plugin';
import react from 'eslint-plugin-react';
import reactHooks from 'eslint-plugin-react-hooks';
import { dirname } from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const compat = new FlatCompat({
  baseDirectory: __dirname,
});

const eslintConfig = [
  ...compat.extends('next/core-web-vitals', 'next/typescript', 'plugin:prettier/recommended', 'prettier'),
  { files: ['**/*.{js,jsx,ts,tsx}'] },
  {
    ignores: [
      'node_modules/*',
      '.next/*',
      'public/workbox-*.js',
      'public/workbox-*.js.map',
      'public/sw.js',
      'public/sw.js.map',
      'next.config.ts',
    ],
  },
  { plugins: { 'react-hooks': reactHooks, '@typescript-eslint': typescriptEslint, react } },
  {
    rules: {
      camelcase: 'off',
      'linebreak-style': 0,
      'import/no-anonymous-default-export': 0,
      '@typescript-eslint/no-unused-vars': 'error',
      'no-unused-vars': 'off',
      'no-use-before-define': 'off',
      'react/jsx-key': 'error',

      'react/jsx-filename-extension': [2, { extensions: ['.js', '.jsx', '.ts', '.tsx'] }],
      'import/prefer-default-export': 'off',
      'react/react-in-jsx-scope': 'off',
      'react/function-component-definition': 'off',
      'max-len': ['error', { code: 120, ignorePattern: '^import .* | d=' }],
      'react/display-name': 'off',
      'no-console': 'warn',
      'react-hooks/rules-of-hooks': 'error',
      'react-hooks/exhaustive-deps': 'warn',
      '@typescript-eslint/explicit-function-return-type': 0,
      '@typescript-eslint/explicit-member-accessibility': 0,
      '@typescript-eslint/indent': 0,
      '@typescript-eslint/no-useless-constructor': 'warn',
      '@typescript-eslint/no-explicit-any': 'warn',
      '@typescript-eslint/no-inferrable-types': 'warn',
      '@typescript-eslint/no-use-before-define': ['error'],
    },
  },
];

export default eslintConfig;
