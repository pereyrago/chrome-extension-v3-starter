# Chrome Extension V3 Starter

This is a starter project for creating a Chrome Extension using the new Manifest V3.

## Features

- A foreground script that can manipulate the DOM of the current page.
- A service worker script that runs in the background.

## Files

- `foreground.js`: Contains the logic for manipulating the DOM of the current page. It includes a function `removeStyles()` that can remove styles from a given element.
- `service-worker.js`: This is the service worker script, which executes in its own context when the extension is installed or refreshed. It imports functionality from `service-worker-utils.js`.
- `service-worker-utils.js`: Contains utility functions used by the service worker.
- `manifest.json`: The manifest file for the extension, containing metadata about the extension.
- `popup/`: Contains the HTML, CSS, and potentially JavaScript for the popup UI of the extension.
- `settings/`: Contains the HTML and CSS for the settings page of the extension.

## Usage

1. Clone the repository.
2. Load the extension into Google Chrome.
3. Navigate to a webpage and observe the changes made by the foreground script.

## License

This project is licensed under the terms of the included LICENSE file.
