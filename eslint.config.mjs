/* eslint-disable import/no-anonymous-default-export */
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import { FlatCompat } from '@eslint/eslintrc';
import js from '@eslint/js';
import typescriptEslintEslintPlugin from '@typescript-eslint/eslint-plugin';
import tsParser from '@typescript-eslint/parser';
import prettier from 'eslint-plugin-prettier';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const compat = new FlatCompat({
  baseDirectory: __dirname,
  recommendedConfig: js.configs.recommended,
  allConfig: js.configs.all
});

export default [
  ...compat.extends('next', 'next/core-web-vitals', 'prettier'),
  {
    plugins: {
      prettier
    },
    rules: {
      'prettier/prettier': 'error',
      'for-direction': 'error',
      'getter-return': 'error',
      'no-compare-neg-zero': 'error',
      'no-cond-assign': 'error',
      'no-console': 'warn',
      'no-debugger': 'warn',
      'no-dupe-args': 'error',
      'no-dupe-else-if': 'error',
      'no-dupe-keys': 'error',
      'no-duplicate-case': 'error',
      'no-empty': 'error',
      'no-extra-boolean-cast': 'error',
      'no-extra-semi': 'error',
      'no-sparse-arrays': 'error',
      'no-template-curly-in-string': 'error',
      'no-unreachable': 'error',
      'use-isnan': 'error',
      'valid-typeof': 'error',
      'array-callback-return': 'error',
      'consistent-return': 'error',
      curly: ['error', 'all'],
      'default-case': 'error',
      'default-case-last': 'error',
      'dot-location': ['error', 'property'],
      eqeqeq: ['error', 'always'],
      'grouped-accessor-pairs': ['error', 'getBeforeSet'],
      'no-alert': 'warn',
      'no-else-return': [
        'error',
        {
          allowElseIf: false
        }
      ],
      'no-empty-function': 'error',
      'no-floating-decimal': 'error',
      'no-labels': 'error',
      'no-lone-blocks': 'error',
      'no-loop-func': 'error',
      'no-multi-spaces': 'error',
      'no-multi-str': 'error',
      'no-return-assign': 'error',
      'no-self-compare': 'error',
      'no-useless-concat': 'error',
      'no-useless-escape': 'error',
      'no-useless-return': 'error',
      yoda: 'error',
      'no-use-before-define': 'error',
      'arrow-body-style': ['error', 'always'],
      'arrow-parens': 'error',
      'arrow-spacing': [
        'error',
        {
          before: true,
          after: true
        }
      ],
      'constructor-super': 'error',
      'no-const-assign': 'error',
      'no-dupe-class-members': 'error',
      'no-duplicate-imports': 'error',
      'no-this-before-super': 'error',
      'no-useless-constructor': 'error',
      'no-var': 'error',
      'prefer-const': 'error',
      'prefer-template': 'error'
    },
    ignores: ['docs/', 'test/', 'wizard/', 'next.config.js', 'postcss.config.cjs', 'test.js']
  },
  ...compat.extends('plugin:@typescript-eslint/recommended', 'prettier').map((config) => {
    return {
      ...config,
      files: ['**/*.+(ts|tsx)']
    };
  }),
  {
    files: ['**/*.+(ts|tsx)'],
    plugins: {
      '@typescript-eslint': typescriptEslintEslintPlugin
    },
    languageOptions: {
      parser: tsParser
    },
    rules: {
      '@typescript-eslint/explicit-function-return-type': 'off',
      '@typescript-eslint/explicit-module-boundary-types': 'off',
      'no-use-before-define': [0],
      '@typescript-eslint/no-use-before-define': [1],
      '@typescript-eslint/no-explicit-any': 'off',
      '@typescript-eslint/no-var-requires': 'off'
    }
  }
];
