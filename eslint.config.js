import { defineConfig } from "eslint/config";
import globals from "globals";

export default defineConfig({
  files: ["src/**/*.{js,mjs,cjs,jsx,html,css}"],
  languageOptions: { globals: globals.browser },
  extends: ["airbnb", "prettier"],
});
