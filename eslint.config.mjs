import path from "node:path"
import { fileURLToPath } from "node:url"

import eslintPluginPrettier from "eslint-plugin-prettier"
import nextConfig from "eslint-config-next"
import tseslint from "typescript-eslint"

const __dirname = path.dirname(fileURLToPath(import.meta.url))

export default tseslint.config(
  {
    ignores: [
      "**/node_modules/**",
      ".next/**",
      "out/**",
      "build/**",
      "public/**",
      "docker-compose.yml",
      "**/*.config.{js,cjs,mjs,ts}",
      "**/*.d.ts",
      "*.config.{js,cjs,mjs,ts}",
    ],
  },
  ...nextConfig,
  ...tseslint.configs.recommendedTypeChecked,
  ...tseslint.configs.stylisticTypeChecked,
  {
    files: ["**/*.{ts,tsx}"],
    languageOptions: {
      parserOptions: {
        project: ["./tsconfig.json"],
        tsconfigRootDir: __dirname,
      },
    },
  },
  {
    plugins: {
      prettier: eslintPluginPrettier,
    },
    rules: {
      "no-alert": "off",
      "no-restricted-globals": ["off", "confirm"],
      "react/require-default-props": "off",
      "@typescript-eslint/no-explicit-any": "off",
      "import/no-extraneous-dependencies": "off",
      "react/react-in-jsx-scope": "off",
      "react/jsx-filename-extension": [
        "warn",
        {
          extensions: [".ts", ".tsx"],
        },
      ],
      "no-useless-catch": "off",
      "@typescript-eslint/no-unsafe-assignment": "off",
      "@typescript-eslint/no-unsafe-member-access": "off",
      "@typescript-eslint/no-unsafe-call": "off",
      "@typescript-eslint/no-unsafe-return": "off",
      "@typescript-eslint/no-unsafe-argument": "off",
      "prettier/prettier": [
        "error",
        {
          endOfLine: "auto",
        },
      ],
    },
  },
)
