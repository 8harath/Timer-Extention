let timerInterval;
const CIRCLE_CIRCUMFERENCE = 283; // 2 * π * 45 (radius)

document.addEventListener('DOMContentLoaded', () => {
  const startButton = document.getElementById('startTimer');
  const resetButton = document.getElementById('resetTimer');
  const timeLimitInput = document.getElementById('timeLimit');
  const errorMessage = document.getElementById('errorMessage');
  const timeRemaining = document.getElementById('timeRemaining');
  const progressCircle = document.querySelector('.progress-ring-circle');

  // Check if timer is already running
  chrome.storage.local.get(['endTime', 'totalTime'], (data) => {
    if (data.endTime) {
      const remainingTime = Math.max(0, Math.floor((data.endTime - Date.now()) / 1000));
      if (remainingTime > 0) {
        updateUI(true);
        startCountdown(remainingTime, data.totalTime);
      }
    }
  });

  startButton.addEventListener('click', () => {
    const minutes = parseInt(timeLimitInput.value);
    
    if (isNaN(minutes) || minutes <= 0 || minutes > 180) {
      errorMessage.textContent = 'Please enter a valid time between 1 and 180 minutes';
      return;
    }
    
    errorMessage.textContent = '';
    const seconds = minutes * 60;
    const endTime = Date.now() + (seconds * 1000);
    
    chrome.storage.local.set({
      endTime: endTime,
      totalTime: seconds
    }, () => {
      chrome.runtime.sendMessage({
        action: 'startTimer',
        minutes: minutes
      });
      
      updateUI(true);
      startCountdown(seconds, seconds);
    });
  });

  resetButton.addEventListener('click', () => {
    chrome.storage.local.remove(['endTime', 'totalTime'], () => {
      chrome.runtime.sendMessage({ action: 'resetTimer' });
      clearInterval(timerInterval);
      updateUI(false);
      timeRemaining.textContent = '00:00';
      progressCircle.style.strokeDashoffset = CIRCLE_CIRCUMFERENCE;
    });
  });

  function startCountdown(seconds, totalSeconds) {
    clearInterval(timerInterval);
    
    function updateTimer() {
      const progress = (seconds / totalSeconds) * CIRCLE_CIRCUMFERENCE;
      progressCircle.style.strokeDashoffset = CIRCLE_CIRCUMFERENCE - progress;
      
      const minutes = Math.floor(seconds / 60);
      const remainingSeconds = seconds % 60;
      timeRemaining.textContent = `${String(minutes).padStart(2, '0')}:${String(remainingSeconds).padStart(2, '0')}`;
      
      if (seconds <= 0) {
        clearInterval(timerInterval);
        updateUI(false);
      }
      seconds--;
    }
    
    updateTimer();
    timerInterval = setInterval(updateTimer, 1000);
  }

  function updateUI(isRunning) {
    startButton.disabled = isRunning;
    resetButton.disabled = !isRunning;
    timeLimitInput.disabled = isRunning;
  }
});