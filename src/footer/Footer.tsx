import React from 'react';
import styles from './Footer.module.css';

function Footer() {
    return (
        <div className={styles.footerBlock}>
            <h3>Filipp Kotenko</h3>
            <div className={styles.iconsBlock}>
                <img className={styles.icon} src="" alt=""/>
                <img className={styles.icon} src="" alt=""/>
                <img className={styles.icon} src="" alt=""/>
                <img className={styles.icon} src="" alt=""/>
            </div>
            <h5>{"©2020 All rights reserved"}</h5>
        </div>
    );
}

export default Footer;
