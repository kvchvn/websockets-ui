import js from "@eslint/js";
import { defineConfig } from "eslint/config";
import eslintPluginPrettierRecommended from "eslint-plugin-prettier/recommended";
import eslintPluginSimpleImportSort from "eslint-plugin-simple-import-sort";
import eslintPluginUnusedImports from "eslint-plugin-unused-imports";
import globals from "globals";
import tseslint from "typescript-eslint";

export default defineConfig([
  {
    files: ["**/*.{js,ts}"],
    plugins: {
      js,
      "unused-imports": eslintPluginUnusedImports,
      "simple-import-sort": eslintPluginSimpleImportSort,
    },
    extends: ["js/recommended"],
    languageOptions: { globals: globals.node },
    rules: {
      "unused-imports/no-unused-imports": "error",
      "simple-import-sort/imports": "error",
    },
  },
  ...tseslint.configs.recommended,
  {
    files: ["**/*.ts"],
    rules: {},
  },
  eslintPluginPrettierRecommended,
]);
