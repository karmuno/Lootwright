# Contribution Guide

Thank you for your interest in contributing to Lootwright! We welcome all contributions, from bug fixes to new features. To ensure a smooth and collaborative process, please follow these guidelines.

## How to Contribute

1.  **Fork the Repository:** Start by forking the main repository to your own GitHub account.
2.  **Clone Your Fork:** Clone your forked repository to your local machine.
    ```bash
    git clone https://github.com/YOUR_USERNAME/treasure_generator.git
    ```
3.  **Create a Branch:** Create a new branch for your changes. Use a descriptive name for your branch (e.g., `feat/add-new-item-type`, `fix/style-issue`).
    ```bash
    git checkout -b your-branch-name
    ```
4.  **Make Your Changes:** Make your desired changes to the codebase.
5.  **Run Tests:** Before submitting your changes, make sure that all tests pass.
    ```bash
    npm test
    ```
6.  **Commit Your Changes:** Commit your changes with a clear and descriptive commit message. We follow the [Conventional Commits](https://www.conventionalcommits.org/) specification.
    ```bash
    git commit -m "feat: Add new feature"
    ```
7.  **Push to Your Fork:** Push your changes to your forked repository.
    ```bash
    git push origin your-branch-name
    ```
8.  **Submit a Pull Request:** Open a pull request from your forked repository to the `main` branch of the original repository. Provide a detailed description of your changes in the pull request.

## Code Style

This project uses [ESLint](https://eslint.org/) to enforce a consistent code style. Before committing your changes, please run the linter to ensure your code conforms to the project's style.

```bash
npm run lint
```

For more details on the project's coding conventions, please see the [Coding Best Practices](./Coding_Best_Practices.md) document.

## Code of Conduct

Please note that this project is released with a Contributor Code of Conduct. By participating in this project you agree to abide by its terms. (We will add a formal Code of Conduct file later).

## Questions?

If you have any questions, feel free to open an issue on the repository. We're happy to help!
