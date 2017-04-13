module.exports = {
  // Prevent parent eslintrc from interfering
  "root": true,
  "extends": [
    "eslint:recommended",
    "plugin:react/recommended",
    "prettier",
    "prettier/react"
  ],
  "env": {
    "es6": true,
    "jest": true
  },
  "parser": "babel-eslint",
  "parserOptions": {
    "ecmaVersion": 2017,
    "sourceType": "module",
    "ecmaFeatures": {
      "jsx": true
    }
  },
  "plugins": [
    "react",
    "prettier"
    // TODO: consider adding jsx-a11y and import
  ],
  "rules": {
    "prettier/prettier": "error"
  }
}