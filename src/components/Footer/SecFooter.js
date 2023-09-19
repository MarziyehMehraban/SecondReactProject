import React from 'react';
import styles from "./Footer.module.css"
import Logo from '../../images/AlibabaLogo.gif';
import img4 from "../../images/img4.png";
import img5 from "../../images/img5.svg";
import img6 from "../../images/img6.png";
import img7 from "../../images/img7.png";
import img8 from "../../images/img8.png";
import img9 from "../../images/img9.svg";

const SecFooter = () => {
    return (
        <div>
            <div className={styles.secondFooter}>
                <div className={styles.secondIn}>
                    <h4>علی بابا</h4>
                    <ul>
                        <li><a href='#'>درباره ما</a></li>
                        <li><a href='#'>تماس با ما</a></li>
                        <li><a href='#'>چرا علی بابا</a></li>
                        <li><a href='#'>علی بابا پلاس</a></li>
                        <li><a href='#'>بیمه مسافرتی</a></li>
                        <li><a href='#'>مجله علی بابا</a></li>
                    </ul>
                </div>
                <div className={styles.secondIn}>
                    <h4>خدمات مشتریان</h4>
                    <ul>
                        <li><a href='#'>مرکز پشتیبانی آنلاین</a></li>
                        <li><a href='#'>راهنمای خرید</a></li>
                        <li><a href='#'>راهنمای استرداد</a></li>
                        <li><a href='#'>قوانین و مقررات</a></li>
                        <li><a href='#'>پرسش و پاسخ</a></li>
                    </ul>
                </div>
                <div className={styles.secondIn}>
                    <h4>اطلاعات تکمیلی</h4>
                    <ul>
                        <li><a href='#'>باشگاه همسفران</a></li>
                        <li><a href='#'>فروش سازمانی</a></li>
                        <li><a href='#'>همکاری با آژانس ها</a></li>
                        <li><a href='#'>فرصت های شغلی</a></li>
                    </ul>
                </div>
                <div className={styles.secondIn2}>
                    <img src={Logo}/>
                    <span>تلفن پشتیبانی:     4390000-021</span>
                    <p>دفتر پشتیبانی: اکباتان نبش اتوبان لشکری کوی بیمه خیابان بیمه چهارمبن بست گلها پلاک 1</p>
                    <div>
                        <img src={img4}/>
                        <img src={img5}/>
                        <img src={img6}/>
                        <img src={img7}/>
                        <img src={img8}/>
                        <img src={img9}/>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SecFooter;