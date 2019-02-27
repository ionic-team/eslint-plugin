module.exports = {
  configs: {
    base: {
      parser: '@typescript-eslint/parser',
      plugins: ['@typescript-eslint'],
      extends: ['plugin:@typescript-eslint/recommended', 'eslint:recommended'],
    },
    recommended: {
      extends: ['plugin:@ionic/base'],
      rules: {
        'no-unused-vars': 'off', // @typescript-eslint/no-unused-vars is enabled
      },
    },
    strict: {
      extends: ['plugin:@ionic/recommended'],
      rules: {
        'comma-dangle': 'error',
      }
    },
  },
};
