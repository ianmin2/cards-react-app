import { useState } from 'react';
import { STORAGE_KEYS } from '../../constants/index.ts';
import AppStorage from '../../lib/helpers/appStorage.ts';
// eslint-disable-next-line no-unused-vars
import ModeItem from '../ModeItem/index.js';

const ModesList = ({ scanningMode, setScanningMode }) => {
  const [modeItems] = useState(AppStorage.get(STORAGE_KEYS.MODE_ITEMS));

  return (
    <ul className="list-group">
      {modeItems.map((cfg) => (
        <ModeItem
          key={cfg.department}
          config={cfg}
          setMode={setScanningMode}
          isActive={cfg.department === scanningMode}>
          {cfg.label}
        </ModeItem>
      ))}
    </ul>
  );
};

export default ModesList;
