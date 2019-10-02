import React from 'react'
import { FaBars} from 'react-icons/fa';
import { FaTimes} from 'react-icons/fa';
import { FaHome } from 'react-icons/fa';
import { FaSatellite } from 'react-icons/fa';
import {FaRocket} from 'react-icons/fa';
import {FaCameraRetro } from 'react-icons/fa';
import styles from "../styles/navbar.module.scss";
import {Link} from "gatsby";

const Navbar = () => {

    return (
        <header>
        <div className={styles.spacing} />
        <input id={styles.sidebar__trigger} className={styles.sidebar__trigger} type="checkbox" />
            <label htmlFor={styles.sidebar__trigger}>
            <span className={styles.sidebar__button+" "+ styles.sidebar__buttonOpen}><FaBars/></span>
            <span className={styles.sidebar__button+" "+ styles.sidebar__buttonClose}><FaTimes /></span>
            </label><h2 className={styles.sticky}>PowerApps <span className={styles.logo}>and Beyond</span></h2>
            
        

            <ul className={styles.sidebar}>
                <Link style={{color:"white", textDecoration:"none"}} to="/"activeStyle={{color:"#bdbdbd", textDecoration:"none"}}><li><FaHome className={styles.icon}/> Home Page</li></Link>
                <Link style={{color:"white", textDecoration:"none"}} to="/apod" activeStyle={{color:"#bdbdbd", textDecoration:"none"}}><li><FaCameraRetro className={styles.icon}/> APOD</li></Link>
                <Link style={{color:"white", textDecoration:"none"}} to="/rockets" activeStyle={{color:"#bdbdbd", textDecoration:"none"}}><li><FaRocket className={styles.icon}/> Rocket Launches</li></Link>
                <Link style={{color:"white", textDecoration:"none"}} to="/hubble" activeStyle={{color:"#bdbdbd", textDecoration:"none"}}><li><FaSatellite className={styles.icon}/> Random Hubble Pics</li></Link>
            </ul>
        </header>
    )
}

export default Navbar
