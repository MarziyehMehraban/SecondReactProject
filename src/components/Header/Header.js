import React from 'react';
import styles from "./Header.module.css";
import Logo from '../../images/AlibabaLogo.gif';

const Header = () => {
    return (
        <div className={styles.header}>
            <div className={styles.Rcontainer}>
                <img src={Logo} alt='alibabaLogo'/>
                <div className={styles.menubar}>
                    <ul>
                        <li><a href='#' className={styles.fAwesome1}>بلیط</a>
                            <ul className={styles.dropDown}>
                                <li>پرواز داخلی</li>
                                <li>پرواز خارجی</li>
                                <li>قطار </li>
                                <li className={styles.lastChild}>اتوبوس</li>
                            </ul>
                        </li>
                        <li><a href='#' className={styles.fAwesome}>اقامت</a>
                            <ul className={styles.dropDown}>
                                <li>هتل</li>
                                <li className={styles.lastChild}>ویلا و اقامتگاه</li>
                            </ul>
                        </li>
                        <li><a href='#'>تور</a></li>
                        <li><a href='#' className={styles.fAwesome}>بیشتر</a>
                            <ul className={styles.dropDown}>
                                <li>علی بابا پلاس</li>
                                <li>مجله علی بابا</li>
                                <li className={styles.lastChild}>بیمه مسافرتی</li>
                            </ul>
                        </li>
                    </ul>
                </div>
            </div>
            <div className={styles.Lcontainer}>
                <span><a href='#' className={styles.leftMenu1}>مرکز پشتیبانی آنلاین</a></span>
                <span><a href='#' className={styles.leftMenu2}>سفر های من</a></span>
                <span><a href='#' className={styles.leftMenu3}>ورود یا ثبت نام</a></span>
            </div>
        </div>
    );
};

export default Header;