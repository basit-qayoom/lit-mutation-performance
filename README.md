# Project Structure

This project is organized as follows:

## 1. components directory

This directory contains the following:

- **Type Declaration Files:** These files define types and interfaces for the components.
- **Map Files:** Corresponding map files for each component.

## 2. dist

The "dist" directory houses the bundle files for each component.

## 3. loader

### index.html

The "index.html" file serves as the entry point for your project.

### async.js

This file contains the code responsible for lazy loading bundles corresponding to custom elements. It performs an initial check to import the bundle if any custom element is present. A Mutation Observer is used to observe added/removed nodes in the document. If a custom element is added, the corresponding bundle is imported.

### sync.js

Similar to "async.js," this file also handles lazy loading of bundles, but it imports bundles in a queue manner.

## 4. src

Inside the "src" directory, you'll find all the components written in TypeScript (TS).

## 5. Scripts

Several scripts have been provided to streamline the development process:

- **createComponent.ts:** This script assists in creating components.
- **createWebpack.ts:** It helps in configuring Webpack settings.
- **webpackEntry.ts:** This script manages the Webpack entry point.
- **writeIndex.ts:** Useful for writing and bundling up to 2000 Lit components efficiently.

Feel free to customize this README structure and text to best suit your project's needs.
