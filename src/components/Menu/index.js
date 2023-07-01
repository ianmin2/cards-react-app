import React from "react";
import MenuItem from "../MenuItem";
import styles from './style.module.css'
import { MenuItems as menuItems } from "../../constants/index.ts";

const Menu = (props) => {

    // const menuItems = ;
  //  text-bg-dark p-3
    return (
        <nav className={`nav nav-pills nav-fill ${styles.menuBg}`}>
            {
                menuItems.map((cfg, index) => (
                    <MenuItem key={index} config={cfg}/>
                      
                ))
            }
        </nav>
    );
}


export default Menu;