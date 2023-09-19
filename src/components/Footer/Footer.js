import React from 'react';
import FirstFooter from './FirstFooter';
import SecFooter from './SecFooter';
import ThirdFooter from './ThirdFooter';
import styles from "./Footer.module.css"


const Footer = () => {
    return (
        <div className={styles.footer}>
            <FirstFooter />
            <SecFooter />
            <ThirdFooter />
        </div>
    );
};

export default Footer;