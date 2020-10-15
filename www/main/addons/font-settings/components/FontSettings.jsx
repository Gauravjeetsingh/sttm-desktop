import React, { useState, useEffect, useRef, createRef } from 'react';
import PropTypes from 'prop-types';

import { Overlay } from '../../../common/sttm-ui';

const settings = require('../../../../configs/settings.json');

import { rangeSettingInit } from '../utils';

const FontSettings = ({ onScreenClose }) => {
  const settingsDiv = createRef();
  const [fontSettings, setFontSettings] = useState(
    settings['slide-layout']['settings']['font-sizes'],
  );
  const [settingsMarkup, setSettingsMarkup] = useState(null);

  useEffect(() => {
    const code = rangeSettingInit(fontSettings, 'slide-layout', 'font-sizes');
    setSettingsMarkup(code);
  }, [fontSettings]);

  return (
    <Overlay onScreenClose={onScreenClose}>
      <div className="sync-wrapper overlay-ui ui-sync-button">
        <div className="sync overlay-ui ui-sync-button">
          <header className="sync-header">Font Settings</header>
          <div className="sync-content-wrapper" id="font-settings-wrapper" ref={settingsDiv}>
            {/* {settingsMarkup} */}
          </div>
        </div>
      </div>
    </Overlay>
  );
};

FontSettings.propTypes = {
  onScreenClose: PropTypes.func,
};

export default FontSettings;
