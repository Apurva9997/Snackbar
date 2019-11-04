const SNACK_BACKGROUND = {
  success: { bg: 'green', content: 'white' },
  info: { bg: 'white', content: 'black' },
  error: { bg: 'red', content: 'white' },
  warning: { bg: 'yellow', content: 'black' }
};

function showNotification(msg, type = 'success') {
  const snackBarContainer = document.getElementsByClassName(
    'snackbar-container'
  )[0];
  const snackbarContent = document.createElement('div');
  snackbarContent.id = 'snackbar-content';
  snackbarContent.style.marginTop = '10px';
  snackbarContent.style.fontSize = '14px';
  snackbarContent.style.borderRadius = '3px';
  snackbarContent.style.backgroundColor = SNACK_BACKGROUND[type].bg;
  snackbarContent.style.color = SNACK_BACKGROUND[type].content;
  snackbarContent.style.padding = '3px 7px';
  const notificationContent = document.createTextNode(msg);
  snackbarContent.appendChild(notificationContent);
  snackBarContainer.appendChild(snackbarContent);
  setTimeout(hideNotification, 1000);
}

function hideNotification() {
  const snackBarContainer = document.getElementsByClassName(
    'snackbar-container'
  )[0];
  snackBarContainer.removeChild(document.getElementById('snackbar-content'));
}
