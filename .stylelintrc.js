module.exports = {
  root: true,
  extends: [
    "stylelint-config-html",
    "stylelint-config-recommended-vue",
    "stylelint-config-recess-order",
    "stylelint-prettier/recommended",
  ],
  rules: {
    "declaration-no-important": true,
    "length-zero-no-unit": true,
    "max-nesting-depth": 4,
    "no-empty-source": null,
    "property-case": "lower",
    "selector-class-pattern": /^[a-z0-9\-]+[a-z0-9\-_]*$/,
    "selector-type-case": "lower",
  },
};
