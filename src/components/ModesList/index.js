import React, { useEffect, useState } from "react";
import ModeItem from "../ModeItem/index.js";
import {STORAGE_KEYS  } from "../../constants/index.ts";
import AppStorage from "../../lib/helpers/appStorage.ts";



const ModesList = ({scanningMode, setScanningMode}) => {

    const [modeItems, setModeItems] = useState(AppStorage.get(STORAGE_KEYS.MODE_ITEMS));
   
    return (
        <ul className="list-group">
         {   
            modeItems.map( (cfg) =>  ( 
                    <ModeItem 
                        key={cfg.department} 
                        config={cfg}
                        setMode={setScanningMode}
                        isActive={cfg.department === scanningMode}
                    >
                        {cfg.label}
                    </ModeItem>
                ) 
            )
          }
        </ul>
    );
}

export default ModesList;