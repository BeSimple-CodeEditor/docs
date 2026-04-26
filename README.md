# BeSimple CodeEditor Documentation

Welcome to the official documentation for the BeSimple CodeEditor.

## Overview

BeSimple is a modern, lightweight code editor built for developers who value speed and simplicity. It uses the Monaco Editor engine (the same power behind VS Code) but strips away the bloat to give you a clean, focused workspace.

## Core Files

- **HTML**: `src/renderer/index.html` - The UI shell.
- **CSS**: `src/renderer/styles.css` - Custom styling and theme support.
- **JS**: `src/renderer/renderer.js` - Client-side logic for tree rendering, file opening, and theme mapping.
- **Main**: `src/main/main.js` - Electron main process for file system access and OS integration.

## Key Features

### 1. Project Explorer
- Recursive folder view.
- Real-time filesystem watching.
- Context menu for renaming and deleting.

### 2. Tab Management
- Simple single-tab interface.
- Unsaved changes indicator (`*`).
- Safety warning when closing unsaved files.

### 3. Theme System
- Dynamic theme loading from `.json` files.
- Support for TextMate scopes mapped to Monaco tokens.

## How to Contribute
1. Fork the repository.
2. Create a new feature branch.
3. Submit a pull request with detailed notes.
