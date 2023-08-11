// Set up reminder intervals (in milliseconds)
const waterReminderInterval = 60 * 60 * 1000; // 1 hour
const postureReminderInterval = 45 * 60 * 1000; // 45 minutes
const walkReminderInterval = 2 * 60 * 60 * 1000; // 2 hours
const eyeExerciseReminderInterval = 20 * 60 * 1000; // 20 minutes
const TakeaScreenBreakInterval = 2 * 60 * 60 * 1000; // 2 hours

// Function to display a notification
function showNotification(message) {
  chrome.notifications.create({
    type: 'basic',
    title: 'Healthy Reminder',
    message: message,
    iconUrl: chrome.runtime.getURL('icon.png'),
    requireInteraction: true

  });
}

// Function to schedule reminders
function scheduleReminders() {
  chrome.alarms.create('waterReminder', { delayInMinutes: 60, periodInMinutes: 60 });
  chrome.alarms.create('postureReminder', { delayInMinutes: 45, periodInMinutes: 45 });
  chrome.alarms.create('walkReminder', { delayInMinutes: 120, periodInMinutes: 120 });
  chrome.alarms.create('eyeExerciseReminder', { delayInMinutes: 20, periodInMinutes: 20 });
  chrome.alarms.create('TakeaScreenBreak', { delayInMinutes: 120, periodInMinutes: 120 });
}

// Listen for alarm events
chrome.alarms.onAlarm.addListener(function(alarm) {
  if (alarm.name === 'waterReminder') {
    showNotification('Time to drink water!');
  } else if (alarm.name === 'postureReminder') {
    showNotification('Remember to sit straight!');
  } else if (alarm.name === 'walkReminder') {
    showNotification('Take a short walk!');
  } else if (alarm.name === 'eyeExerciseReminder') {
    showNotification('Time for eye exercises!');
  } else if (alarm.name === 'TakeaScreenBreak') {
    showNotification('Hey take a screen break!');
  }
});

// Schedule reminders when the extension is installed or updated
chrome.runtime.onInstalled.addListener(scheduleReminders);
chrome.runtime.onStartup.addListener(scheduleReminders);
