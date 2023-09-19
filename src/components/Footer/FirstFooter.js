import React from 'react';
import styles from "./Footer.module.css";

import img1 from "../../images/footer1.jpg";
import img2 from "../../images/footer2.jpg";
import img3 from "../../images/footer3.jpg";

const FirstFooter = () => {
    return (
        <div className={styles.firstFooter}>
                <div className={styles.container}>
                    <img src={img1}/>
                    <span>
                        <h4>رتبه یک سفر</h4>
                        <p>معتبر ترین عرضه کننده محصولات گردشگری در ایران</p>
                    </span>
                </div>
                <div className={styles.container}>
                    <img src={img2}/>
                    <span>
                        <h4>همسفر هر سفر</h4>
                        <p>اراعه تمامی خدمات سفر پرواز قطار اتوبوس هتل و تور</p>
                    </span>
                </div>
                <div className={styles.container}>
                    <img src={img3}/>
                    <span>
                        <h4>همسفر همه لحظات سفر</h4>
                        <p>پشتیبانی و همراهی ۲۴ ساعته در تمامی مراحل سفر</p>
                    </span>
                </div>
            </div>
    );
};

export default FirstFooter;