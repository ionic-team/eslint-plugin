# @ionic/eslint-plugin

Common ESLint rules & preferences for Ionic.

## Usage

### Install

```
npm i -D eslint @ionic/eslint-plugin
```

### Configure

Create `.eslintrc.js`, or otherwise configure ESLint to use the Ionic ESLint Plugin.

* You must manually configure `env` to setup your [ESLint environment](https://eslint.org/docs/user-guide/configuring#specifying-environments).
* You must manually configure `parserOptions` to point to your `tsconfig.json` and configure any additional options.

```js
module.exports = {
  env: {
    browser: true,
    node: true,
    es6: true,
  },
  parserOptions: {
    project: './tsconfig.json',
    ecmaFeatures: {
      jsx: true,
    },
  },
  plugins: ['@ionic'],
  extends: ['plugin:@ionic/recommended'], // or use plugin:@ionic/strict
  rules: {
    // additional rule configuration
  }
};
```

#### Flavors

* `plugin:@ionic/recommended`: at the very least, these are recommended rules
* `plugin:@ionic/strict`: recommended, but stricter set of rules
