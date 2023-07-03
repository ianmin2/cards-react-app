import React, { useEffect, useState } from "react";
import MenuItem from "../MenuItem";
import styles from './style.module.css'
import { STORAGE_KEYS } from "../../constants/index.ts";
import AppStorage from "../../lib/helpers/appStorage.ts";
import LanderPage from "../../pages/lander";

const Menu = (props) => {

 const [menuItems, setMenuItems] = useState ( AppStorage.get(STORAGE_KEYS.MENU_ITEMS))
 const [activePage, setActivePage ] = useState(AppStorage.get(STORAGE_KEYS.CURRENT_PAGE))
 
 useEffect(()=>{
    AppStorage.set(STORAGE_KEYS.CURRENT_PAGE, activePage);
 },[activePage])


 const [scanningMode, setScanningMode] = useState(AppStorage.get(STORAGE_KEYS.SCANNING_MODE));
  
 useEffect(()=> {
    AppStorage.set(STORAGE_KEYS.SCANNING_MODE, scanningMode);
}, [scanningMode]);

 
 
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
                            setPage={setActivePage}
                            isActive={cfg.target === activePage}
                        />
                        
                    ))
                }
            </nav>
            <br />
            <LanderPage 
                activePage={activePage} 
                scanningMode={scanningMode}
                setScanningMode={setScanningMode}  
            ></LanderPage>
        </>
    );
}


export default Menu;