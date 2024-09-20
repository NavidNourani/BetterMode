# React + TypeScript + Vite + Tailwind CSS

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md)
  uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses
  [SWC](https://swc.rs/) for Fast Refresh

## Expanding the ESLint configuration

If you are developing a production application, we recommend updating the configuration to enable
type aware lint rules:

- Configure the top-level `parserOptions` property like this:

```js
export default tseslint.config({
  languageOptions: {
    // other options...
    parserOptions: {
      project: ['./tsconfig.node.json', './tsconfig.app.json'],
      tsconfigRootDir: import.meta.dirname,
    },
  },
});
```

- Replace `tseslint.configs.recommended` to `tseslint.configs.recommendedTypeChecked` or
  `tseslint.configs.strictTypeChecked`
- Optionally add `...tseslint.configs.stylisticTypeChecked`
- Install [eslint-plugin-react](https://github.com/jsx-eslint/eslint-plugin-react) and update the
  config:

```js
// eslint.config.js
import react from 'eslint-plugin-react';

export default tseslint.config({
  // Set the react version
  settings: { react: { version: '18.3' } },
  plugins: {
    // Add the react plugin
    react,
  },
  rules: {
    // other rules...
    // Enable its recommended rules
    ...react.configs.recommended.rules,
    ...react.configs['jsx-runtime'].rules,
  },
});
```

## Development Setup

### Format on Save

To ensure consistent code formatting, please configure your IDE to format on save using Prettier:

- **VS Code**: Install the "Prettier - Code formatter" extension and add the following to your
  `.vscode/settings.json`:

  ```json
  {
    "editor.formatOnSave": true,
    "editor.defaultFormatter": "esbenp.prettier-vscode"
  }
  ```

- **WebStorm**: Enable Prettier on save in Preferences/Settings > Languages & Frameworks >
  JavaScript > Prettier

For other IDEs, please configure format on save with Prettier accordingly.

## Environment Setup

Create a `.env` file in the project root with the following content:

```
VITE_BETTERMODE_API_URL=
VITE_BETTERMODE_NETWORK_DOMAIN=
```

## Tailwind CSS

This project uses Tailwind CSS for styling. Tailwind classes can be used directly in your JSX.

To customize the Tailwind configuration, edit the `tailwind.config.js` file.

# React + TypeScript + Vite + Tailwind CSS Project

This project is a modern web application built with React, TypeScript, Vite, and Tailwind CSS. It
provides a robust foundation for building scalable and performant web applications.

## Features

- React for building user interfaces
- TypeScript for type safety
- Vite for fast development and building
- Tailwind CSS for utility-first styling
- Apollo Client for GraphQL integration
- React Router for navigation
- Jotai for state management
- Dark mode support

## Prerequisites

Before you begin, ensure you have the following installed:

- Node.js (v14 or later)
- npm, yarn, or pnpm

## Getting Started

1. Clone the repository:

```
git clone git@github.com:NavidNourani/BetterMode.git cd BetterMode

```

2. Install dependencies:

```
npm install

yarn install

pnpm install

```

3. Create a `.env` file in the root directory:

```

cp .env.example .env

```

Fill in the necessary environment variables in the `.env` file.

4. Start the development server:

```

npm run dev

yarn dev

pnpm dev

```

The application will be available at `http://localhost:5173`.

## Building for Production

To create a production build:

```

npm run build

yarn build

pnpm build

```

then:

```
npm run preview

yarn preview

pnpm preview

```
