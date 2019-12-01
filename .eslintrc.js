module.exports = {
    "env": {
        "browser": true,
        "commonjs": true,
        "es6": true
    },
    "extends": "eslint:recommended",
    "globals": {
        "Atomics": "readonly",
        "SharedArrayBuffer": "readonly"
    },
    "parserOptions": {
        "ecmaVersion": 2018
    },
    "rules": {
      "indent": ["error", 2],
      "quotes": ["error", "double"],
      "semi": ["error", "always"],
      "camelcase": ["error", { "properties": "always" }],
      "keyword-spacing": ["error", { "before": true }],
      "comma-spacing": ["error", { "before": false, "after": true }],
      "space-before-blocks": ["error", "always"],
      "key-spacing": ["error", { "afterColon": true }],
      "no-multi-spaces": ["error", { "ignoreEOLComments": true }],
      "no-multiple-empty-lines": ["error", { "max": 1 }]
    }
};