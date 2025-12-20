# Nuxt Non-Minimal Starter

An opinionated non-minimal Nuxt starter template

## Features

### Initial Setup

- [Pug](https://pugjs.org/) templates
- Full TypeScript
  - Including configs
- [Sass](https://sass-lang.com/documentation/syntax/#the-indented-syntax) for styling
  - With a default structure for Sass files based on https://dev.to/technoph1le/i-built-a-sass-template-you-can-just-copy-me-213o
- Complete Nuxt folder structure with stubbed empty folders
- Full setup folder structure for splitting tests, etc. into the appropriate TypeScript context
- Disabled auto path prefixing for components
  - For easier component organisation
- [pnpm](https://pnpm.io) for package management
  - With `minimumReleaseAge` set to 1 week for security
    - Excludes some packages that utilise trusted publishing
- [vue-dompurify-html](https://www.npmjs.com/package/vue-dompurify-html) to avoid use of v-html
- [Nuxt Fonts](https://fonts.nuxt.com) for easy fonts usage
- [Nuxt Image](https://image.nuxt.com) for image optimisation
  - With image folder set to `assets/images`
- [lint-staged](https://www.npmjs.com/package/lint-staged) to run ESLint, Stylelint, typechecking, and unit tests on
  commit
- [Husky](https://typicode.github.io/husky/) for git hook management
  - With a preconfigured precommit hook that runs lint-staged

### Complete Linting Setup

- [ESLint](https://eslint.org) for linting and formatting
  - Using the following plugins (some provided by Nuxt ESLint):
    - [typescript-eslint](https://typescript-eslint.io)
    - [un-ts/eslint-plugin-import-x](https://www.npmjs.com/package/eslint-plugin-import-x)
    - [ESLint Stylistic](https://eslint.style)
    - [eslint-plugin-vue](https://eslint.vuejs.org)
    - [eslint-plugin-vue-pug](https://github.com/rashfael/eslint-plugin-vue-pug)
    - [eslint-plugin-unicorn](https://github.com/sindresorhus/eslint-plugin-unicorn)
    - [ESLint Plugin Playwright](https://github.com/mskelton/eslint-plugin-playwright)
    - [eslint-plugin-vitest](https://github.com/vitest-dev/eslint-plugin-vitest)
    - [eslint-plugin-testing-library](https://www.npmjs.com/package/eslint-plugin-testing-library)
- [Stylelint](https://stylelint.io/) for linting Sass
  - With [SCSS](https://github.com/stylelint-scss/stylelint-config-standard-scss),
    [Vue](https://github.com/ota-meshi/stylelint-config-standard-vue), and
    [Stylistic](https://www.npmjs.com/package/@stylistic/stylelint-plugin) plugins

### Testing

- [Nuxt Test Utils](https://github.com/nuxt/test-utils) for testing
  - [Vitest](https://vitest.dev) for unit/component testing
    - Using JSDom as DOM environment
    - Using [Vue Test Utils](https://test-utils.vuejs.org) and [Vue Testing Library](http://testing-library.com/vue)
  - [Playwright](https://playwright.dev) for end-to-end testing

### Others

- Settings for format on save
- Recommended VSCode extensions
- `package.yaml` is instead of `package.json`
  - Script to compile `package.yaml` to JSON for tools that need it

Note: Because of the use of `package.yaml`, only pnpm is supported as a package manager for this template.

Look at the [Nuxt documentation](https://nuxt.com/docs/getting-started/introduction) to learn more.

## Setup

Make sure to install the dependencies:

```bash
pnpm install
```

## Development Server

Start the development server on `http://localhost:3000`:

```bash
pnpm dev
```

## Production

Build the application for production:

```bash
pnpm build
```

Locally preview production build:

```bash
pnpm preview
```

Check out the [deployment documentation](https://nuxt.com/docs/getting-started/deployment) for more information.
