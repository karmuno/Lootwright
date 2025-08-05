# Project Architecture

This document provides a detailed overview of the technical architecture of the Lootwright project.

## Technology Stack

-   **Frontend:** [React](https://reactjs.org/) with [TypeScript](https://www.typescriptlang.org/)
-   **Styling:** [Tailwind CSS](https://tailwindcss.com/)
-   **Build Tool:** [Vite](https://vitejs.dev/)
-   **Testing:** [Jest](https://jestjs.io/)
-   **Linting:** [ESLint](https://eslint.org/)

## Directory Structure

The project's code is organized into several key directories within the `src/` folder:

```
src/
├── components/     # Reusable React components
├── data/           # Static JSON data files
├── types/          # TypeScript type definitions
├── utils/          # Core application logic
├── assets/         # Static assets like images
├── App.tsx         # Main application component
└── main.tsx        # Application entry point
```

### `components/`

This directory contains all the React components used to build the user interface.

-   `LootGenerator.tsx`: The main component that contains the input form for generating loot.
-   `TreasureDisplay.tsx`: The component responsible for displaying the generated treasure to the user.

### `data/`

This directory holds the static JSON files that power the loot generation engine.

-   `magicItems.json`: A database of magic items, based on the D&D 5e SRD.
-   `mundaneItems.json`: A collection of non-magical items.
-   `treasureTables.json`: The treasure hoard tables from the D&D 5e DMG, which determine the amount of coins and items.
-   `contextRules.json`: A set of rules that influence the type of loot generated based on the user's input context.
-   `flavorText.json`: A collection of text snippets used to generate descriptive flavor text for items.

For a detailed explanation of the data schemas, see the [Data Schema Guide](./DataSchema.md).

### `types/`

This directory contains all TypeScript type definitions and interfaces. This ensures type safety throughout the application.

-   `index.ts`: Exports all type definitions.
-   `TreasureTableEntry.ts`: Defines the structure for entries in the treasure tables.

### `utils/`

This directory contains the core logic of the application.

-   `treasureGenerator.ts`: The main engine for generating treasure. It uses the other utilities to create a complete treasure parcel.
-   `contextParser.ts`: Parses the user's input string to determine the context of the loot generation (e.g., "dragon's hoard").
-   `balanceCalculator.ts`: Ensures that the generated loot is balanced according to the D&D 5e DMG rules.
-   `randomUtils.ts`: A set of utility functions for handling randomization.

## Data Flow

The data flow in Lootwright is unidirectional and follows these steps:

1.  **User Input:** The user enters the party level, party size, and a context string into the `LootGenerator` component.
2.  **Generation Trigger:** When the user clicks the "Generate Loot" button, the `treasureGenerator` function is called with the user's input.
3.  **Context Parsing:** The `contextParser` analyzes the context string to determine the loot context (e.g., "humanoid," "undead," "hoard").
4.  **Treasure Calculation:**
    -   The `balanceCalculator` determines the appropriate treasure value based on the party level and size, using the `treasureTables.json` data.
    -   The `treasureGenerator` then uses this information, along with the context, to select items from `magicItems.json` and `mundaneItems.json`.
5.  **Flavor Text Generation:** The `treasureGenerator` uses the `flavorText.json` data to add descriptive text to the generated items.
6.  **Display:** The generated treasure object is passed to the `TreasureDisplay` component, which formats and displays the loot to the user.
