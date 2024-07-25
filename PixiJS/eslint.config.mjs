import typescriptPlugin from "@typescript-eslint/eslint-plugin";
import parser from "@typescript-eslint/parser";
import prettier from "eslint-config-prettier";

export default [
  {
    files: ["src/**/*.{js,ts,cjs,mjs,json}", "tests/**/*.{js,ts,cjs,mjs,json}"],
    languageOptions: {
      ecmaVersion: "latest",
      sourceType: "module",
    },
    parser,
    parserOptions: {
      ecmaVersion: "latest",
      sourceType: "module",
    },
    plugins: {
      "@typescript-eslint": typescriptPlugin,
      prettier,
    },
    rules: {
      ...typescriptPlugin.configs.recommended.rules,
      ...prettier.rules,
      "prettier/prettier": "error",
      "no-console": "warn",
      "no-unused-vars": "warn",
      "@typescript-eslint/no-unused-vars": [
        "warn",
        { argsIgnorePattern: "^_" },
      ],
      "brace-style": ["error", "1tbs", { allowSingleLine: true }],
      "object-curly-spacing": ["error", "always"], // Ensure spacing inside curly braces
    },
  },
];
