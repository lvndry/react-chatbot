module.exports = {
  extends: ["plugin:react-hooks/recommended", "airbnb", "prettier"],
  plugins: ["react"],
  env: {
    es6: true,
    browser: true,
  },
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
      experimentalObjectRestSpread: true,
    },
    ecmaVersion: 2018,
    sourceType: "module",
  },
  rules: {},
};
