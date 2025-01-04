let timerAlarm;

chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
  if (request.action === 'startTimer') {
    const minutes = request.minutes;
    
    // Create notification for 90% time warning
    const warningTime = minutes * 54; // 90% of the time in seconds
    
    chrome.alarms.create('timeWarning', {
      delayInMinutes: warningTime / 60
    });
    
    // Create notification for time's up
    chrome.alarms.create('timeUp', {
      delayInMinutes: minutes
    });
  } else if (request.action === 'resetTimer') {
    chrome.alarms.clearAll();
  }
});

chrome.alarms.onAlarm.addListener((alarm) => {
  if (alarm.name === 'timeWarning') {
    chrome.notifications.create('timeWarning', {
      type: 'basic',
      iconUrl: 'icons/icon128.png',
      title: 'Time Warning',
      message: '90% of your allocated time has been used!'
    });
  } else if (alarm.name === 'timeUp') {
    chrome.notifications.create('timeUp', {
      type: 'basic',
      iconUrl: 'icons/icon128.png',
      title: 'Time\'s Up!',
      message: 'Your allocated time has expired. The tab will close in 5 seconds.'
    });
    
    // Close the active tab after 5 seconds
    setTimeout(() => {
      chrome.tabs.query({ active: true, currentWindow: true }, (tabs) => {
        if (tabs[0]) {
          chrome.tabs.remove(tabs[0].id);
        }
      });
    }, 5000);
    
    // Clean up storage
    chrome.storage.local.remove(['endTime', 'totalTime']);
  }
});

// Check for any existing timers when the extension starts
chrome.runtime.onStartup.addListener(() => {
  chrome.storage.local.get(['endTime'], (data) => {
    if (data.endTime) {
      const remainingTime = Math.max(0, (data.endTime - Date.now()) / 1000);
      if (remainingTime <= 0) {
        chrome.storage.local.remove(['endTime', 'totalTime']);
      }
    }
  });
});