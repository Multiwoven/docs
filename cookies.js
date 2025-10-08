// Load Usercentrics autoblocker script
const autoblockerScript = document.createElement('script');
autoblockerScript.src =
  'https://web.cmp.usercentrics.eu/modules/autoblocker.js';
document.head.appendChild(autoblockerScript);

// Load Usercentrics CMP script
const usercentricsCmpScript = document.createElement('script');
usercentricsCmpScript.id = 'usercentrics-cmp';
usercentricsCmpScript.src = 'https://web.cmp.usercentrics.eu/ui/loader.js';
usercentricsCmpScript.setAttribute('data-settings-id', '9h8JD05l74ET4J');
usercentricsCmpScript.async = true;
document.head.appendChild(usercentricsCmpScript);