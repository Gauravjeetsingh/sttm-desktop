const { remote } = require('electron');
// const ldGet = require('lodash.get');

const analytics = remote.getGlobal('analytics');

// function updateRangeSetting(key, val) {
//   const option = ldGet(settings, key);
//   const optionKey = key.split('.').pop();
//   for (let i = option.min; i <= option.max; i += option.step) {
//     document.body.classList.remove(`${optionKey}-${i}`);
//   }
//   document.body.classList.add(`${optionKey}-${val}`);
//   global.core.platformMethod('updateSettings');
//   analytics.trackEvent('settings', optionKey, val);
// }

export default updateRangeSetting;
