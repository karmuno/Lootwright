# Lootwright: Intelligent Loot Generator for TTRPGs

Lootwright is an intelligent treasure generation tool designed for Tabletop RPG Game Masters who need quick, balanced, and flavorful loot on-the-fly. When players go "off the map" or GMs need low-prep solutions, Lootwright generates contextually appropriate treasure parcels that feel authentic to the world while maintaining mechanical balance according to D&D 5e guidelines.

## Key Features

- **Speed First:** Generate complete treasure parcels in under 3 seconds.
- **Contextual Intelligence:** Adapts loot composition based on the encounter's context (e.g., a dragon's hoard vs. a bandit's chest).
- **Progressive Disclosure:** Simple by default, with options to reveal detailed information about items and their history.
- **DMG Compliance:** Strictly adheres to D&D 5e treasure balance guidelines from the Dungeon Master's Guide.

## Getting Started

To get the project up and running on your local machine, follow these steps:

### Prerequisites

- [Node.js](https://nodejs.org/) (v18 or higher)
- [npm](https://www.npmjs.com/)

### Installation

1.  **Clone the repository:**
    ```bash
    git clone https://github.com/karmuno/treasure_generator.git
    cd treasure_generator
    ```

2.  **Install dependencies:**
    ```bash
    npm install
    ```

3.  **Run the development server:**
    ```bash
    npm run dev
    ```
    The application will be available at `http://localhost:5173`.

## Running Tests

This project uses [Jest](https://jestjs.io/) for unit testing. To run the test suite, use the following command:

```bash
npm test
```

## Project Structure

The project is organized into the following main directories:

-   `src/`: Contains all the source code for the application.
    -   `components/`: React components that make up the UI.
    -   `data/`: Static JSON files that store item data, treasure tables, and context rules.
    -   `types/`: TypeScript type definitions and interfaces.
    -   `utils/`: Core logic for treasure generation, context parsing, and balance calculation.
-   `docs/`: Contains developer documentation, including architecture, data schema, and contribution guides.
-   `design/`: Contains design documents and project planning files.

For a more detailed breakdown of the architecture, see the [Architecture Guide](./docs/Architecture.md).

## How to Contribute

We welcome contributions to Lootwright! If you'd like to contribute, please follow these steps:

1.  Fork the repository.
2.  Create a new branch for your feature or bug fix.
3.  Make your changes, adhering to the project's coding standards.
4.  Submit a pull request with a clear description of your changes.

For more detailed information, please read our [Contribution Guide](./docs/ContributionGuide.md).

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.
