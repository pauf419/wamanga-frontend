module.exports = {
  root: true,
  env: { browser: true, es2020: true },
  parser: "@typescript-eslint/parser",
  plugins: [
    "@typescript-eslint",
    "react",
    "react-hooks",
    "prefer-arrow",
    "promise",
    "prettier", // Add Prettier plugin
  ],
  extends: [
    "eslint:recommended",
    "plugin:@typescript-eslint/recommended",
    "plugin:react/recommended",
    "plugin:react-hooks/recommended",
    "plugin:@next/next/recommended",
    "plugin:prettier/recommended", // Enable Prettier integration
  ],
  ignorePatterns: ["dist", ".eslintrc.cjs"],

  rules: {
    "prettier/prettier": "error", // Force Prettier formatting
    quotes: ["error", "double"],
    "no-restricted-syntax": [
      "error",
      {
        selector:
          "CallExpression[callee.property.name=/^(map|forEach|filter|reduce|every|some)$/] > ArrowFunctionExpression > ObjectPattern",
        message: "Avoid destructuring in parameters when using array methods.",
      },
      {
        selector: "TSAsExpression[typeAnnotation.type=TSUnknownKeyword]",
        message: "Casting to 'unknown' is not allowed.",
      },
    ],

    "react/prop-types": "off",
    "react/react-in-jsx-scope": "off",
    "react/jsx-boolean-value": ["error", "never"],
    "react/jsx-pascal-case": "error",
    "react-hooks/rules-of-hooks": "error",
    "react-hooks/exhaustive-deps": "warn",

    "@typescript-eslint/no-explicit-any": "error",
    "@typescript-eslint/no-non-null-assertion": "error",
    "@typescript-eslint/consistent-type-imports": [
      "error",
      { prefer: "type-imports" },
    ],
    "@typescript-eslint/no-unused-vars": ["error", { argsIgnorePattern: "^_" }],

    "promise/prefer-await-to-then": "error",
    "no-var": "error",
    "prefer-const": "error",
    "no-mixed-spaces-and-tabs": "error",
    "no-console": "error",
    "no-debugger": "warn",
    eqeqeq: ["error", "always"],

    camelcase: "error",
    "id-length": [
      "warn",
      {
        min: 2,
        exceptions: ["i", "j", "k", "n", "e", "x", "y", "w", "h", "t", "_"],
      },
    ],

    "prefer-arrow-callback": "error",
    "no-nested-ternary": "error",
    "array-callback-return": "error",
    "no-lonely-if": "error",
    "no-unused-expressions": "error",
  },

  overrides: [
    {
      files: ["./src/mocks/telegram.ts"],
      rules: { camelcase: "off" },
    },
  ],

  settings: {
    react: { version: "detect" },
  },
};
