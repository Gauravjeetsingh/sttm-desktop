import { React } from 'react';
// import updateRangeSetting from './update-range-setting';

const { remote } = require('electron');

const { store, i18n } = remote.require('./app');

const defaultPrefs = store.getDefaults().userPrefs;
const userPrefs = store.getAllPrefs();

const rangeSettingInit = (setting, catKey, settingKey) => {
  const settingTitle = setting.title ? `.${setting.title}` : '';
  const listItems = Object.keys(setting.options).forEach(optionKey => {
    const option = setting.options[optionKey];
    const optionId = `setting-${catKey}-${settingKey}-${optionKey}`;
    const switchListAttrs = {
      'data-value': userPrefs[catKey][settingKey][optionKey],
      max: option.max,
      min: option.min,
      onchange: e => {
        const newVal = e.target.value;
        e.target.dataset.value = newVal;
        store.setUserPref(`${catKey}.${settingKey}.${optionKey}`, newVal);
        // updateRangeSetting(`${catKey}.settings.${settingKey}.options.${optionKey}`, newVal);
      },
      step: option.step,
      type: 'range',
      value: userPrefs[catKey][settingKey][optionKey],
    };
    return (
      <li>
        <span>{i18n.t(`SETTINGS${settingTitle}.${option.title}`)}</span>
        <i>{`(${i18n.t('SETTINGS.DEFAULT')}: ${defaultPrefs[catKey][settingKey][optionKey]})`}</i>
        <div className="range">
          <input id={optionId} {...switchListAttrs}></input>
          <label htmlFor={optionId}></label>
        </div>
      </li>
    );
  });
  console.log(listItems);
};

export default rangeSettingInit;
