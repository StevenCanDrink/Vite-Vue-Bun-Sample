/* eslint-env node */
require("@rushstack/eslint-patch/modern-module-resolution");
module.exports = {
  root: true,
  env: {
    Bun: true,
  },
  extends: [
    "eslint:recommended",
    "plugin:vue/vue3-essential",
    "plugin:vue/vue3-recommended",
    "@vue/eslint-config-typescript/recommended",
    "@vue/eslint-config-prettier",
    "plugin:storybook/recommended",
    "plugin:vuejs-accessibility/recommended",
  ],
  plugins: ["vuejs-accessibility"],
  parserOptions: {
    ecmaVersion: "latest",
  },
  globals: {
    Node: true,
    google: true,
  },
  ignorePatterns: ["auto-import.d.ts", "components.d.ts", "i18n.d.ts"],
  rules: {
    "vuejs-accessibility/no-static-element-interactions": "off",
    "no-duplicate-imports": "error",
    "vue/multi-word-component-names": [
      "error",
      {
        ignores: ["index"],
      },
    ],

    "vue/no-template-target-blank": [
      "error",
      {
        allowReferrer: false,
        enforceDynamicLinks: "always",
      },
    ],
    "vue/component-tags-order": [
      "error",
      {
        order: ["script", "template", "style"],
      },
    ],
    "no-unused-vars": "off",
    "@typescript-eslint/no-unused-vars": [
      "warn",
      {
        argsIgnorePattern: "^_",
        varsIgnorePattern: "^_",
        caughtErrorsIgnorePattern: "^_",
      },
    ],
  },
  overrides: [
    {
      files: ["cypress/e2e/**.{cy,spec}.{js,ts,jsx,tsx}"],
      extends: ["plugin:cypress/recommended"],
    },
    {
      files: ["src/pages/**/*.vue"],
      rules: {
        "vue/multi-word-component-names": "off",
      },
    },
    {
      files: ["src/**/*.vue"],
      rules: {
        "vue/v-slot-style": ["error", "shorthand"],
        "vue/require-default-prop": "off",
      },
    },
  ],
};
