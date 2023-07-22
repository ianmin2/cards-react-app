/* eslint-disable no-multi-spaces */

import  { useContext } from 'react';
// eslint-disable-next-line no-unused-vars
import ModeItem from '../ModeItem/index.js';
import { appContext } from '../../App.js';

const ModesList = () => {
  const {
    modes: modeItems,
    mode: scanningMode,
    switchMode: setScanningMode,
  } = useContext(appContext);

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
