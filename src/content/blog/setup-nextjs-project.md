---
title: "Setup nextjs project"
---

# How to setup nextjs project

## #Install nextjs

<br>

```bash
npx create-next-app@latest
# or for using pnpm
pnpm dlx create-next-app@latest
```

<br>

## #Prettier & Eslint

<br>

to config a prettier you need to create .prettierrc file in root path in project

is many prettier plugins useful of any project i like to use in many project such as sort import , tailwind class sort etc.

<br>

### - Sort import plugin & tailwind class sort

<br>

sort import to auto sort import and prettier-plugin-tailwind to keep Tailwind classes in order. This keeps code clean and consistent on save.

<br>

```bash
pnpm add -D prettier prettier-plugin-organize-imports prettier-plugin-tailwind
```

<br>

```json
// .prettierrc
{
  "semi": true,
  "trailingComma": "all",
  "singleQuote": false,
  "tabWidth": 2,
  "printWidth": 120,
  "endOfLine": "auto",
  "plugins": ["prettier-plugin-organize-imports", "prettier-plugin-tailwindcss"]
}
```

<br>

### - Eslint

<br>

eslint-config-prettier to disable ESLint rules that conflict with Prettier, ensuring both work smoothly together without formatting issues and add some rules.

```bash
pnpm add -D eslint-config-prettier
```

<br>

```json
// .eslint.config.mjs
const eslintConfig = [
  {
    ignores: ["node_modules", "dist", "build", ".next"], // 👈 your ignore patterns
  },
  ...compat.extends("next/core-web-vitals", "next/typescript", "prettier"),
  ...compat.config({
    rules: {
      "react-hooks/exhaustive-deps": "off",
      "@typescript-eslint/no-explicit-any": "warn",
      "@typescript-eslint/ban-ts-comment": "warn",
      "@typescript-eslint/no-unused-vars": "warn",
      "@typescript-eslint/no-empty-object-type": "warn",
    },
  }),
];
```

<br>

## #Husky & Lint-staged

<br>

husky runs Git hooks like pre-commit and lint-staged runs scripts only on staged files (faster than full-project linting).

<br>

```bash
pnpm add -D husky lint-staged
```

<br>

add useful scripts to package.json

```json
//package.json
  "scripts": {
    "lint:fix": "eslint --fix --ext .ts,.tsx,.js .",
    "format": "prettier --write '**/*.{ts,tsx,js,json}'",
    "check-format": "prettier --check '**/*'.{ts,tsx,js,json}",
    "type-check": "tsc --noEmit || exit 1",
```

define lint-staged tasks in package.json

```json
  "lint-staged": {
    "**/*.{ts,tsx,js,jsx}": [
      "pnpm type-check",
      "pnpm lint:fix",
      "pnpm format"
    ],
    "**/*.{ts,js,json,css,md}": "pnpm run format"
  }
```

<br>

setup husky hook

```bash
# init husky
pnpm exec husky init
```

edit file .husky/pre-commit

```bash
# //.husky/pre-commit
pnpm exec lint-staged
```

### - [Example repository](https://github.com/ToEzBit/setup-nextjs)
