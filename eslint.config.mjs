import { dirname } from "path";
import { fileURLToPath } from "url";
import { FlatCompat } from "@eslint/eslintrc";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const compat = new FlatCompat({
  baseDirectory: __dirname,
});

const eslintConfig = [
  ...compat.extends("next/core-web-vitals", "next/typescript"),
  {
    plugins: ['prettier'],
    extends: [
      'prettier'
    ],
    ignores: [
      "node_modules/**",
      ".next/**",
      "out/**",
      "build/**",
      "next-env.d.ts",
    ],
    rules: {
      'prettier/prettier': ['error', {
        singleQuote: true,
        semi: true,
        trailingComma: 'es5',
        bracketSpacing: true,
        arrowParens: 'always',
        printWidth: 100,
      }]
    }
  },
];

export default eslintConfig;
