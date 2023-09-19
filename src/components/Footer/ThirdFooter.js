import React from 'react';

import styles from "./Footer.module.css"; 

const ThirdFooter = () => {
    return (
        <div>
            <div className={styles.thirdFooter}>
                <p>کلیه حقوق این سرویس (وب‌سایت و اپلیکیشن‌های موبایل) محفوظ و متعلق به شرکت سفرهای علی‌بابا می‌باشد. (نسخه 2.36.3)</p>
                <div className={styles.socialMedia}>
                    <a className={styles.linkedIn}></a>
                    <a className={styles.insta}></a>
                    <a className={styles.aparat}></a>
                    <a className={styles.youtube}></a>
                    <a className={styles.twitter}></a>
                    <a className={styles.telegram}></a>
                </div>
            </div>
        </div>
    );
};

export default ThirdFooter;