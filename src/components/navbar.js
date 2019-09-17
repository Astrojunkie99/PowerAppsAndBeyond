import React from 'react'

import { FaBars} from 'react-icons/fa';
import { FaTimes} from 'react-icons/fa';
import styles from "../styles/navbar.module.scss";
import {Link} from "gatsby";
import Mars from "../images/Mars.jpg";

const Navbar = () => {

    return (
        <header>
        <input id={styles.sidebar__trigger} className={styles.sidebar__trigger} type="checkbox" />
            <label for={styles.sidebar__trigger}>
            <span className={styles.sidebar__button+" "+ styles.sidebar__buttonOpen}><FaBars/></span>
            <span className={styles.sidebar__button+" "+ styles.sidebar__buttonClose}><FaTimes /></span>
            </label><h2>PowerApps <span className={styles.logo}>and Beyond</span></h2>
            
        

            <ul className={styles.sidebar}>
                <Link activeStyle={{color:"#ffebee", textDecoration:"none"}}><li>Home Page</li></Link>
                <Link activeStyle={{color:"#ffebee", textDecoration:"none"}}><li>APOD</li></Link>
                <Link activeStyle={{color:"#ffebee", textDecoration:"none"}}><li>Rocket Launches</li></Link>
                <Link activeStyle={{color:"#ffebee", textDecoration:"none"}}><li>Random Hubble Pics</li></Link>
            </ul>
            
            <img src={Mars} className={styles.imageDisplay} />
        </header>
    )
}

export default Navbar
