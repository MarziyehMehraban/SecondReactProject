import React from 'react';
import Info from './Info';
import styles from "./Table.module.css"

const Table = ({dataArray}) => {
    return (
        <div className={styles.container}>
            <div className={styles.table}>
                <h5>انجام نشده</h5>

                    {dataArray.map((item,index) => (
                        item.selectedOption.value === 'notdone' && <Info key={index} item={item} />
                    ))}
                
            </div>
            <div className={styles.table}>
                <h5>در حال انجام</h5>
                
                    {dataArray.map((item,index) => (
                        item.selectedOption.value === 'whiledoing' && <Info key={index} item={item} />
                    ))}
                
            </div>
            <div className={styles.table}>
                <h5>چالشی</h5>
                
                    {dataArray.map((item,index) => (
                        item.selectedOption.value === 'challenging' && <Info key={index} item={item} />
                    ))}
                
            </div>
            <div className={styles.table}>
                <h5>انجام شده</h5>
                
                    {dataArray.map((item,index) => (
                        item.selectedOption.value === 'done' && <Info key={index} item={item} />
                    ))}
                
            </div>
            {/* <table >
                <thead>
                    <tr>
                        <th>انجام نشده</th>
                        <th>در حال انجام</th>
                        <th>چالشی</th>
                        <th>انجام شده</th>
                    </tr>
                </thead>
                <tbody>
                {dataArray.map((item, index) => (
                    <tr key={index}>
                        <td>{(item.selectedOption.value === 'notdone') && <Info item={item} />}</td>
                        <td>{item.selectedOption.value === 'whiledoing' && <Info item={item} />}</td>
                        <td>{item.selectedOption.value === 'challenging' && <Info item={item} />}</td>
                        <td>{item.selectedOption.value === 'done' && <Info item={item} />}</td>
                    </tr>
                ))}
                </tbody>
            </table> */}
        </div>
    );
};

export default Table;