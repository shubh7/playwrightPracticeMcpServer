module.exports = {
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaVersion: 2021,
    sourceType: 'module',
  },
  extends: [
    'eslint:recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:jsdoc/recommended',
    'plugin:@typescript-eslint/eslint-recommended',
    'plugin:prettier/recommended',
    'plugin:playwright/recommended',
    'plugin:playwright/playwright-test'
  ],
  plugins: ['@typescript-eslint', 'jsdoc', 'prettier', 'eslint-plugin-prettier', 'playwright'],
  rules: {
    'prettier/prettier': 'error',
    'eslint-plugin-prettier/recommended': 'off',
    'import/extensions': 'off',
    '@typescript-eslint/no-explicit-any': ['off'],
    '@typescript-eslint/no-unused-vars': ['off'],
    "@typescript-eslint/no-unused-vars": ["error"],
    "@typescript-eslint/no-explicit-any": "warn",
    'playwright/expect-expect': 'off', // Disable the expect-expect rule globally
    'playwright/no-conditional-in-test': 'off',
    'playwright/no-wait-for-timeout': 'off',

    // JSDoc rules
    "jsdoc/check-param-names": "error",
    "jsdoc/check-tag-names": "error",
    "jsdoc/check-types": "error",
    "jsdoc/require-description": "error",
    "jsdoc/check-tag-names": [
      "warn",
      {
        "definedTags": ["author", "description"]
      }
    ],
    "jsdoc/require-description": [
      "error",
      {
        "descriptionStyle": "tag"
      }
    ],
    "jsdoc/require-jsdoc": [
      "error",
      {
        "contexts": [
          "MethodDefinition:not([kind='constructor'])", // Exclude constructors
          "FunctionDeclaration",
          "ArrowFunctionExpression"
        ]
      }
    ],
    "jsdoc/require-param": "error",
    "jsdoc/require-param-description": "error",
    "jsdoc/require-param-type": "off", // TypeScript provides types
    "jsdoc/require-returns": "error",
    "jsdoc/require-returns-check": "error",
    "jsdoc/require-returns-description": "error",
    "jsdoc/require-returns-type": "off" // TypeScript provides return types
  },
  overrides: [
    {
      files: ["tests/**/*.ts"], // Specify the test files directory
      rules: {
        "jsdoc/require-jsdoc": "off"
      }
    }
  ],
  settings: {
    jsdoc: {
      mode: "typescript"
    }
  }
  // Add other project-specific rules or overrides
};
