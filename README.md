
# QuickQuery 

QuickQuery is a Chrome extension that allows you to quickly ask OpenAI about selected text or images using the right-click context menu.


## Features

- Right-click on selected text and choose **"Ask OpenAI about '[selected text]'"** to query ChatGPT.
- Right-click on any image and choose **"Ask OpenAI about this image"** to send the image URL as a prompt to ChatGPT.
- Opens a new browser tab with your query ready on ChatGPT's web interface.

## File Structure

- `manifest.json` — Extension manifest.
- `background.js` — Background service worker managing context menus and clicks.
- `icon.png` — Extension icon.


## Installation

- Download or clone the repository.
- Open Chrome and go to `chrome://extensions/`.
- Enable **Developer mode** (toggle in the top right).
- Click **Load unpacked** and select the folder containing the extension files.
- The extension will be added to your browser.
