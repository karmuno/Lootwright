# Coding Best Practices for Treasure Generator Project

This document outlines the coding best practices derived from the existing codebase of the Treasure Generator project. Adhering to these practices ensures consistency, maintainability, and quality across the project.

## 1. General Conventions

*   **Language:**
    *   **TypeScript (.ts, .tsx):** Primarily used for application logic, React components, and type definitions.
    *   **JavaScript (.js):** Used for configuration files (e.g., `eslint.config.js`, `postcss.config.js`, `tailwind.config.js`).
*   **Framework:** React for building user interfaces.
*   **Styling:** Tailwind CSS for a utility-first CSS approach. PostCSS and Autoprefixer are integrated for CSS processing.
*   **Build Tool:** Vite is used for development and bundling.
*   **Linting:** ESLint is configured with `@eslint/js`, `typescript-eslint`, `eslint-plugin-react-hooks`, and `eslint-plugin-react-refresh` to enforce code quality and consistency.
    *   Strict linting rules are enabled in `tsconfig.app.json` and `tsconfig.node.json` (e.g., `noUnusedLocals`, `noUnusedParameters`, `noFallthroughCasesInSwitch`).
*   **Type Checking:** Strict TypeScript type checking is enforced across the project.
*   **Module System:** ESNext modules are used with `bundler` resolution.
*   **File Naming:**
    *   **React Components:** PascalCase (e.g., `App.tsx`, `LootGenerator.tsx`).
    *   **Utility Files:** camelCase (e.g., `treasureGenerator.js`, `contextParser.js`).
    *   **CSS Files:** kebab-case (e.g., `App.css`, `index.css`).
    *   **JSON Data Files:** camelCase or snake_case depending on content (e.g., `contextRules.json`, `treasureTables.json`, `magicItems.json`, `flavorText.json`).
*   **Directory Structure:** Code is organized into logical directories:
    *   `src/components/`: Reusable React components.
    *   `src/data/`: Static JSON data files.
    *   `src/utils/`: Utility functions and core logic.
    *   `src/types/`: TypeScript interface and type definitions.

## 2. TypeScript and React Specific Practices

*   **JSX Runtime:** The `react-jsx` runtime is used for JSX transformations.
*   **React Strict Mode:** React's `StrictMode` is enabled in `main.tsx` for identifying potential problems in an application.
*   **Explicit Interfaces:** All data structures, especially those loaded from JSON files or passed as props, should have explicit TypeScript interfaces defined in `src/types/index.ts` to ensure type safety and clarity.
*   **Imports:** Prefer relative imports for modules within the project. `allowImportingTsExtensions` and `verbatimModuleSyntax` are enabled in TypeScript configuration.

## 3. Styling Specific Practices

*   **Tailwind Directives:** The main CSS file (`index.css`) includes Tailwind's base, components, and utilities directives (`@tailwind base; @tailwind components; @tailwind utilities;`).
*   **CSS Variables:** Root CSS variables are utilized for global styling properties such as font family, line height, font weight, color scheme, and background color.
*   **Dark Mode Support:** Implement dark mode using Tailwind's `dark:` variants and CSS media queries (`@media (prefers-color-scheme: light)`) for a responsive theme.

## 4. JSON Data Practices

*   **Static Data:** JSON files are used for storing static, structured data. Ensure these files are well-formatted and adhere to a consistent schema.
*   **Key Naming:** Maintain consistency in key naming within JSON objects (e.g., `camelCase` for properties, `snake_case` for specific data points if that convention is established for a particular dataset).

By following these best practices, we aim to maintain a high standard of code quality, improve collaboration, and streamline the development process for the Treasure Generator project.