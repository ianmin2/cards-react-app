import React from "react";
import ModeItem from "../ModeItem/index.js";
import { ModeItems as modeItems } from "../../constants/index.ts";

const ModesList = (props) => {
    return (
        <ul className="list-group">
         {   
            modeItems.map( (cfg, index) =>  ( 
                    <ModeItem key={cfg.department} config={cfg}>{cfg.label}</ModeItem>
                ) 
            )
          }
        </ul>
    );
}

export default ModesList;