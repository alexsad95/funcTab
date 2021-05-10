module.exports = {
  root: true,
  env: {
    node: true,
    webextensions: true,
  },
  extends: [
    'plugin:vue/essential',
    '@vue/airbnb',
  ],
  parserOptions: {
    parser: 'babel-eslint',
  },
  rules: {
    'no-console': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
    'no-restricted-syntax': 'off',
    'no-param-reassign': 'off',
    "arrow-parens": [
      "error",
      "as-needed",
      {
        "requireForBlockBody": true
      }
    ],
    "class-methods-use-this": "off",
    "eol-last": "off",
    "import/no-unresolved": "off",
    "indent": "off",
    "linebreak-style": "off",
    "max-len": [
      "error",
      {
        "code": 140
      }
    ],
    "no-console": "off",
    "no-empty": "off",
    "no-plusplus": [
      "error",
      {
        "allowForLoopAfterthoughts": true
      }
    ],
    "no-return-await": "off",
    "no-underscore-dangle": "off",
    "object-curly-newline": [
      "error",
      {
        "ImportDeclaration": "never",
        "ObjectPattern": {
          "multiline": true
        }
      }
    ],
    "operator-linebreak": [
      "error",
      "after"
    ],
    "quotes": [
      "error",
      "single"
    ],
    "semi": [
      "error",
      "always"
    ]
  }
};
