# Architecture

BeSimple CodeEditor is built on the **Electron** framework, utilizing a multi-process architecture to ensure stability, performance, and security.

## Core Components

### 1. Main Process
The Main Process (`app/src/main/main.js`) is the entry point of the application. It runs in a full Node.js environment and is responsible for:
- Creating and managing application windows.
- Handling native GUI elements (dialogs, menus).
- Executing privileged filesystem operations.
- Managing the **Filesystem Watcher** to keep the UI in sync.

### 2. Preload Script
The Preload Script (`app/src/main/preload.js`) acts as a secure bridge between the Main and Renderer processes. It uses `contextBridge` to expose a limited and safe set of APIs to the frontend without exposing full Node.js capabilities.

### 3. Renderer Process
The Renderer Process (`app/src/renderer/`) handles the user interface. It is essentially a web page running in a Chromium environment.
- **Monaco Editor**: The heart of the application, providing VS Code-like editing capabilities.
- **File Explorer**: A custom-built tree view that communicates with the Main process to display project structures.
- **State Management**: Handles active files, themes, and editor configurations.

## Communication Flow

All interaction between the UI and the system happens via **Asynchronous IPC (Inter-Process Communication)**:

1. **Renderer** calls a method on `window.api` (e.g., `window.api.openFile()`).
2. **Preload** forwards the request to the Main process via `ipcRenderer.invoke()`.
3. **Main** receives the request, performs the operation (e.g., showing a dialog), and returns the result.
4. **Renderer** receives the response and updates the UI.
