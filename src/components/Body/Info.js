import React from 'react';
import styles from "./Info.module.css";

const Info = ({ item }) => {
    return (
        <div className={styles.info}>
            {/* <p>{item.expertname}</p>
            <p>{item.taskname}</p> */}
            <div>
                <span>نام تسک</span>
                <p>{item.taskname}</p>
            </div>
            <div>
                <span>نام کارشناس</span>
                <p>{item.expertname}</p>
            </div>
        </div>
    );
};

export default Info;