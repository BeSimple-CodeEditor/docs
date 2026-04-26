# Project Structure

Understanding the layout of the project helps you contribute more effectively.

```bash
BeSimple - CodeEditor/
├── app/               # The application wrapper
│   ├── assets/        # Static assets (icons, themes)
│   └── src/           # Application source code
│       ├── main/      # Electron Main Process
│       └── renderer/  # UI & Frontend Logic
└── docs/              # Documentation (You are here)
    ├── src/           # Doc engine source
    │   ├── content/   # Markdown source files
    │   └── handlers/  # Logic for the doc site
    └── index.html     # Entry point
```

### Key Directories

- **`src/main`**: Handles system-level operations like file I/O, window management, and native menus.
- **`src/renderer`**: The frontend part of the application, where Monaco Editor lives.
- **`assets/themes`**: Drop your `.json` theme files here to see them in the app.
