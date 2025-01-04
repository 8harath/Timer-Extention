# Time Limit Reminder Chrome Extension

A powerful Chrome extension that helps users manage their digital wellbeing by setting time limits for their browsing sessions. This extension features a modern, intuitive interface with real-time visual feedback, customizable time limits, and automatic tab management.

## 📌 Table of Contents
- [Features](#features)
- [Installation](#installation)
- [Usage Guide](#usage-guide)
- [Technical Documentation](#technical-documentation)
- [Development](#development)
- [Troubleshooting](#troubleshooting)
- [Contributing](#contributing)
- [License](#license)

## Features

### Core Functionality
- **Customizable Time Limits**: Set browsing time limits from 1 to 180 minutes
- **Visual Countdown**: Real-time circular progress indicator showing remaining time
- **Smart Notifications**: Receive alerts at 90% time usage and completion
- **Automatic Tab Management**: Graceful tab closure when time expires
- **Session Persistence**: Timer continues running across tab switches
- **Reset Capability**: Option to reset timer at any point

### User Interface
- **Modern Design**: Clean, intuitive interface with smooth animations
- **Progress Visualization**: Circular progress ring with countdown display
- **Responsive Layout**: Adapts to different screen sizes and resolutions
- **Error Handling**: Clear feedback for invalid inputs
- **Accessibility**: Keyboard-friendly navigation and screen reader support

### Technical Features
- **State Management**: Persistent storage of timer state
- **Background Processing**: Efficient background service worker
- **Cross-Tab Synchronization**: Consistent timer state across browser tabs
- **Resource Efficient**: Minimal CPU and memory usage

## Installation

### From Source
1. Clone the repository:
   ```bash
   git clone https://github.com/yourusername/time-limit-reminder.git
   ```
2. Open Chrome and navigate to `chrome://extensions/`
3. Enable "Developer mode" using the toggle in the top right
4. Click "Load unpacked" and select the extension directory
5. The extension icon should appear in your Chrome toolbar

### Configuration
- No additional configuration required
- Extension works out of the box after installation
- Settings are automatically saved and persisted

## Usage Guide

### Basic Usage
1. Click the extension icon in your Chrome toolbar
2. Enter your desired time limit (1-180 minutes)
3. Click "Start Timer" to begin the countdown
4. Monitor remaining time through the circular progress indicator
5. Receive notifications at 90% time usage and completion

### Timer Controls
- **Start Timer**: Begins countdown for specified duration
- **Reset Timer**: Cancels current timer and resets interface
- **Time Input**: Enter duration in minutes (1-180)

### Notifications
- **90% Warning**: Notification when approaching time limit
- **Time's Up**: Final notification before tab closure
- **Auto-Close**: 5-second grace period before tab closes

### Best Practices
- Set realistic time limits for your browsing sessions
- Use the reset function if you need to adjust your time
- Keep an eye on the progress indicator for time management
- Don't ignore the 90% warning notification

## Technical Documentation

### Architecture
```
time-limit-reminder/
├── manifest.json      # Extension configuration
├── popup.html        # User interface structure
├── popup.js          # UI logic and interactions
├── styles.css        # Visual styling
├── background.js     # Background processes
└── icons/            # Extension icons
    ├── icon16.png
    ├── icon48.png
    └── icon128.png
```

### Components
1. **Manifest (manifest.json)**
   - Defines extension metadata
   - Specifies permissions
   - Declares resource locations

2. **Popup Interface (popup.html, popup.js, styles.css)**
   - Handles user interactions
   - Manages timer display
   - Controls visual feedback

3. **Background Service (background.js)**
   - Manages timer state
   - Handles notifications
   - Controls tab operations

### APIs Used
- `chrome.storage`: State persistence
- `chrome.notifications`: User alerts
- `chrome.tabs`: Tab management
- `chrome.alarms`: Timer functionality

### Storage Structure
```javascript
{
  endTime: number,    // Timestamp when timer ends
  totalTime: number   // Total seconds allocated
}
```

## Development

### Prerequisites
- Chrome browser
- Basic knowledge of HTML, CSS, and JavaScript
- Familiarity with Chrome Extension APIs

### Setup Development Environment
1. Fork the repository
2. Clone your fork locally
3. Set up your preferred code editor
4. Enable Chrome Developer Mode

### Building
1. Make your code changes
2. Test in Chrome using "Load unpacked"
3. Verify all features work as expected
4. Check for console errors

### Testing
- Manual testing of all features
- Cross-tab functionality verification
- Notification system checks
- Timer accuracy validation

## Troubleshooting

### Common Issues
1. **Timer Not Starting**
   - Check if time input is valid
   - Verify extension permissions
   - Ensure no conflicts with other extensions

2. **Notifications Not Showing**
   - Check Chrome notification permissions
   - Verify system notification settings
   - Restart Chrome if needed

3. **Tab Not Closing**
   - Check extension permissions
   - Verify Chrome version compatibility
   - Ensure no blocking scripts

### Debug Mode
1. Open Chrome Developer Tools
2. Navigate to Extensions tab
3. Select extension background page
4. Monitor console for errors

## Contributing

### How to Contribute
1. Fork the repository
2. Create a feature branch:
   ```bash
   git checkout -b feature/YourFeatureName
   ```
3. Commit your changes:
   ```bash
   git commit -m 'Add some feature'
   ```
4. Push to the branch:
   ```bash
   git push origin feature/YourFeatureName
   ```
5. Open a Pull Request

### Code Style Guidelines
- Use meaningful variable and function names
- Comment complex logic
- Follow existing code formatting
- Write clean, maintainable code

### Pull Request Process
1. Update documentation if needed
2. Add tests for new features
3. Ensure all tests pass
4. Request review from maintainers

## License

This project is licensed under the MIT License - see the LICENSE file for details.

```
MIT License

Copyright (c) 2025 Bharath K

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files.
```

## Support

For support, please:
1. Check the troubleshooting guide
2. Search existing issues
3. Create a new issue if needed

---

Made with ❤️ by Bharath K

[Back to top](#time-limit-reminder-chrome-extension)
