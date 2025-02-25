import { dirname } from 'path';
import { fileURLToPath } from 'url';
import { FlatCompat } from '@eslint/eslintrc';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const compat = new FlatCompat({
  baseDirectory: __dirname,
});

const eslintConfig = [
  ...compat.extends(
    'next/core-web-vitals',
    'next/typescript',
    'plugin:prettier/recommended',
  ),
  {
    rules: {
      semi: 'error',
      'prefer-const': 'error',
      quotes: [2, 'single', { avoidEscape: true }],
      'prettier/prettier': ['error', { singleQuote: true }],
    },
    ignores: ['./src/types'],
  },
];

export default eslintConfig;
