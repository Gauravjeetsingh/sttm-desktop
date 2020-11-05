import React from 'react';
import PropTypes from 'prop-types';

import { Overlay } from '../../common/sttm-ui';
import SettingsItem from './SettingsItem';

const { remote } = require('electron');

const { i18n } = remote.require('./app');

const settingsJson = require('../../../configs/settingsv2.json');

const Settings = ({ onScreenClose }) => {
  const settingItems = Object.keys(settingsJson);
  const settingsNav = [];
  const items = [];

  settingItems.forEach((item, index) => {
    const itemHeading = settingsJson[item].title;
    settingsNav.push(
      <span
        key={`settings-item-heading-${index}`}
        onClick={() => {
          document.getElementById(itemHeading).scrollIntoView({ block: 'center' });
        }}
      >
        {i18n.t(`SETTINGS.${itemHeading}`)}
      </span>,
    );
    items.push(
      <SettingsItem
        key={`settings-item-${index}`}
        settingsObj={settingsJson[item]}
        settingsKey={item}
      />,
    );
  });

  return (
    <Overlay onScreenClose={onScreenClose}>
      <div className="settings-wrapper">
        <div className="settings-nav">{settingsNav}</div>
        {items}
      </div>
    </Overlay>
  );
};

Settings.propTypes = {
  onScreenClose: PropTypes.func,
};

export default Settings;