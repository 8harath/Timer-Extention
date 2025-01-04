# Time Limit Reminder Chrome Extension

A Chrome extension that helps users manage their time spent on websites by setting time limits and providing notifications.

## Features

- Set custom time limits for browsing sessions (1-180 minutes)
- Visual countdown timer with circular progress indicator
- 90% time usage warning notification
- Automatic tab closure when time expires
- Persistent timer across tab switches
- Clean, modern UI with smooth animations

## Installation

1. Clone this repository or download the ZIP file
2. Open Chrome and navigate to `chrome://extensions/`
3. Enable "Developer mode" in the top right corner
4. Click "Load unpacked" and select the extension directory

## Usage

1. Click the extension icon in your Chrome toolbar
2. Enter a time limit in minutes (1-180)
3. Click "Start Timer" to begin the countdown
4. You'll receive a notification when:
   - 90% of your time has elapsed
   - Your time is up (the tab will close automatically after 5 seconds)
5. Use the "Reset Timer" button to cancel the current timer

## File Structure

```
├── manifest.json
├── popup.html
├── popup.js
├── styles.css
├── background.js
└── icons/
    ├── icon16.png
    ├── icon48.png
    └── icon128.png
```

## Technical Details

- Built with HTML5, CSS3, and JavaScript
- Uses Chrome Extension APIs:
  - `chrome.storage` for persistent data
  - `chrome.notifications` for time alerts
  - `chrome.tabs` for tab management
  - `chrome.alarms` for timing events
- Modern CSS features including CSS variables and transitions
- Responsive design that works across different screen sizes

## Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## License

This project is licensed under the Apache 2.0 License - see the LICENSE file for details.
