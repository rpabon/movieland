import globals from 'globals';
import pluginJs from '@eslint/js';
import pluginReact from 'eslint-plugin-react';
import pluginVitest from 'eslint-plugin-vitest';

/** @type {import('eslint').Linter.Config[]} */
export default [
  { files: ['**/*.{js,mjs,cjs,jsx}'] },
  {
    languageOptions: {
      globals: {
        ...globals.browser,
        ...globals.es2021,
        ...pluginVitest.environments.env.globals,
      },
    },
  },
  pluginJs.configs.recommended,
  pluginReact.configs.flat.recommended,
  pluginVitest.configs['flat/recommended'],
  {
    rules: {
      'react/react-in-jsx-scope': 'off',
      'react/prop-types': 'off',
    },
  },
  {
    files: ['**/*.test.{js,mjs,cjs,jsx}', '**/*.spec.{js,mjs,cjs,jsx}'],
    rules: {
      'vitest/expect-expect': 'error',
      'vitest/no-disabled-tests': 'warn',
      'vitest/no-focused-tests': 'error',
    },
  },
];
