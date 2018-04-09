// ESLint configuration
// http://eslint.org/docs/user-guide/configuring
module.exports = {
  parser: 'babel-eslint',

  parserOptions: {
    "ecmaVersion": 7,
    "sourceType": "module"
  },

  extends: [
    'airbnb-base',
  ],


  globals: {
    __DEV__: true,
  },

  env: {
    browser: true,
  },

  rules: {
    'import/extensions': [
      'error',
      'always',
      {
        js: 'never',
      },
    ],

    // Not supporting nested package.json yet
    // https://github.com/benmosher/eslint-plugin-import/issues/458
    'import/no-extraneous-dependencies': 'off',

    // Recommend not to leave any console.log in your code
    semi: 0,
    // windows os: 0
    'linebreak-style': 0,
    'no-debugger': process.env.NODE_ENV === 'production' ? 2 : 0,
    'no-plusplus': 0,
    'no-underscore-dangle': 0,
    'global-require': 0,
  },
};
