# API Reference

The `window.api` object is available in the Renderer process. It provides the following methods to interact with the system.

## File Operations

### `openFile()`
Opens a native file dialog and returns the file content and metadata.
- **Returns**: `{ filePath, fileName, content }` or `null`.

### `readFile(filePath)`
Reads the content of a specific file.
- **Returns**: `{ filePath, fileName, content }`.

### `saveFile(filePath, content)`
Saves content to an existing file path.
- **Returns**: `true` on success.

## Directory Operations

### `openFolder()`
Opens a native directory dialog and returns a recursive tree of the folder.
- **Returns**: `FolderTree` object.

### `readDirectory(dirPath)`
Reads a directory and returns its immediate children.
- **Returns**: `FolderTree` object.

### `deleteItem(itemPath)`
Moves a file or folder to the system trash.
- **Returns**: `true` on success.

## Events

### `onFolderChanged(callback)`
Subscribes to changes in the currently watched folder.
- **Usage**:
  ```javascript
  window.api.onFolderChanged(() => {
    console.log('Filesystem changed, refreshing tree...');
  });
  ```

## Themes & Assets

### `listThemes()`
Lists all available `.json` themes in the `assets/themes` directory.
- **Returns**: `string[]` (filenames).
