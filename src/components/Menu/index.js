import React, { useContext, useEffect, useState } from "react";
import MenuItem from "../MenuItem";
import styles from './style.module.css'
import { STORAGE_KEYS } from "../../constants/index.ts";
import AppStorage from "../../lib/helpers/appStorage.ts";

import { appContext } from '../../App';


const Menu = () => {

const {page:current, items:menuItems, navigate, } = useContext(appContext);

 // const menuItems = ;
  //  text-bg-dark p-3
    return (
        <>
            
            <nav className={`nav nav-pills nav-fill ${styles.menuBg}`}>
                {
                    menuItems.map((cfg) => (
                        
                        <MenuItem 
                            key={cfg.target} 
                            config={cfg} 
                            setPage={navigate}
                            isActive={cfg.target === current}
                        />
                        
                    ))
                }
            </nav>
            
        </>
    );
}


export default Menu;