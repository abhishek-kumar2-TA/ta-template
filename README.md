# Portal Template

A scalable and containerized React portal template with built-in configurations for modern web development practices. This template includes Docker containerization, styled-components, TypeScript, SCSS, Git hooks, and more.

## Table of Contents

- [Features](#features)
- [Installation](#installation)
- [Best Practices](#best-practices)
- [Resources](#resources)

## Features

- **Containerization with Docker**: Dockerfile to containerize the entire app for consistent development, testing, and deployment environments.
- **Git Hooks with Husky**: Ensures consistent code quality using pre-commit and pre-push hooks (linting, testing). Check for commit messages following https://www.conventionalcommits.org/en/v1.0.0/
- **TypeScript Integration**: Fully integrated with TypeScript for type safety.
- **Styled-Components**: Use CSS-in-JS with `styled-components` for dynamic, themeable styles.
- **SCSS Configuration**: SCSS setup for more complex styling structures.
- **In-House Utilities**: Pre-configured utilities for faster development, including helpers for state management, API integration, and more.
- **Accessible Base Layout**: Ready-to-use accessible layout with semantic HTML, making it easy to create inclusive web experiences.

## Installation

```
npm i
npm start
```

This will start dev server on http://localhost:3000/

## Best Practices

- **Component Structure**: Break UI components into smaller, reusable pieces following atomic design principles (e.g., atoms, molecules, organisms).
- **Code Style**: Stick to the project’s ESLint and Prettier rules.
- **Test Coverage**: Always write tests for your components and utilities using Jest and React Testing Library.
- **State Management**: Use React Context or custom hooks for managing global state, avoid using Redux unless necessary.
- **SCSS Usage**: Write reusable and modular SCSS, following BEM (Block Element Modifier) conventions for class names.
- **Styled-Components Usage**:
  - Use styled-components for all CSS-in-JS styling.
  - Name styled components using PascalCase (e.g., Button, CardContainer).
  - Avoid abbreviations in styled component names and variables (e.g., use backgroundColor instead of bgColor).
- **Accessibility**: Ensure that all UI components are accessible (e.g., use semantic HTML, ARIA attributes, keyboard navigation).

## Resources

- **Commit message standard:**
  ConventionalCommits: https://www.conventionalcommits.org/en/v1.0.0-beta.2/

- **Typescript:**

  - General purpose usage

    React - The Complete Guide 2024 (incl. Next.js, Redux) -> React+Typescript - 2hrs

    https://tigeranalytics.udemy.com/course/react-the-complete-guide-incl-redux/learn/lecture/25890158#overview

  - Advanced usage

        Understanding TypeScript - 15hrs

    https://tigeranalytics.udemy.com/course/understanding-typescript/

- **Styled-Components:**

  React styled components / styled-components [V5 EDITION] - 2hrs
  https://tigeranalytics.udemy.com/course/react-styled-components/-
