import React from "react";
import styles from './style.module.css'


const MenuItem = (props) => {
    //  aria-current="page"  props.target, props.icon
    return (
        <a 
            className={`nav-link ${styles.menuItem} ${(props.isActive == true ? styles.activeItem : '' )}`} 
            href="#" 
            onClick={()=>props.setPage(props.config.target)}
        >
           <i className={props.config.icon}></i> {props.config.label}
        </a>
    );
}

export default MenuItem;